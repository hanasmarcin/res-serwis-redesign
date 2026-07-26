import { useEffect } from "react";
import { scrollToHash } from "@/lib/scroll";

export const useHashScroll = () => {
  useEffect(() => {
    const syncHashScroll = () => {
      const hash = window.location.hash || "#home";

      requestAnimationFrame(() => {
        scrollToHash(hash, { updateHistory: false });
      });
    };

    syncHashScroll();

    window.addEventListener("hashchange", syncHashScroll);
    window.addEventListener("popstate", syncHashScroll);

    return () => {
      window.removeEventListener("hashchange", syncHashScroll);
      window.removeEventListener("popstate", syncHashScroll);
    };
  }, []);
};
