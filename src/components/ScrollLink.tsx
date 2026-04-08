import { AnchorHTMLAttributes, MouseEvent, forwardRef } from "react";
import { scrollToHash } from "@/lib/scroll";

type ScrollLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  onNavigate?: () => void;
};

const isModifiedEvent = (event: MouseEvent<HTMLAnchorElement>) =>
  event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;

const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  ({ href = "#", onClick, onNavigate, ...props }, ref) => {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);

      if (
        event.defaultPrevented ||
        !href.startsWith("#") ||
        event.button !== 0 ||
        isModifiedEvent(event) ||
        props.target === "_blank"
      ) {
        return;
      }

      event.preventDefault();
      onNavigate?.();

      requestAnimationFrame(() => {
        scrollToHash(href);
      });
    };

    return <a ref={ref} href={href} onClick={handleClick} {...props} />;
  },
);

ScrollLink.displayName = "ScrollLink";

export default ScrollLink;
