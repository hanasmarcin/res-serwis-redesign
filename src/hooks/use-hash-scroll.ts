import { useEffect } from "react";
import { scrollToHash } from "@/lib/scroll";

export const useHashScroll = () => {
  useEffect(() => {
    const syncHashScroll = () => {
      if (!window.location.hash) {
        return;
      }

      requestAnimationFrame(() => {
        scrollToHash(window.location.hash, { updateHistory: false });
      });
    };

    syncHashScroll();

    window.addEventListener("hashchange", syncHashScroll);

    return () => {
      window.removeEventListener("hashchange", syncHashScroll);
    };
  }, []);
};
