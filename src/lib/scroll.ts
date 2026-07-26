const HEADER_GAP = 12;
const MIN_SCROLL_DURATION = 220;
const MAX_SCROLL_DURATION = 460;
const DISTANCE_FACTOR = 0.35;

let activeAnimationFrame = 0;

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

const getHeaderOffset = () => {
  const header = document.querySelector<HTMLElement>("[data-site-header-offset]");
  return header ? header.getBoundingClientRect().height + HEADER_GAP : HEADER_GAP;
};

const getScrollTopForHash = (hash: string) => {
  const id = hash.replace(/^#/, "");
  const target = document.getElementById(id);

  if (!target) {
    return null;
  }

  return Math.max(0, window.scrollY + target.getBoundingClientRect().top - getHeaderOffset());
};

const focusHashTarget = (hash: string) => {
  const id = hash.replace(/^#/, "");
  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  target.focus({ preventScroll: true });
};

export const scrollToHash = (
  hash: string,
  {
    focusTarget = true,
    updateHistory = true,
  }: { focusTarget?: boolean; updateHistory?: boolean } = {},
) => {
  if (!hash.startsWith("#")) {
    return false;
  }

  const nextTop = getScrollTopForHash(hash);

  if (nextTop === null) {
    return false;
  }

  if (updateHistory && window.location.hash !== hash) {
    window.history.pushState(window.history.state, "", hash);
  }

  if (activeAnimationFrame) {
    cancelAnimationFrame(activeAnimationFrame);
    activeAnimationFrame = 0;
  }

  const currentTop = window.scrollY;
  const distance = nextTop - currentTop;

  if (Math.abs(distance) < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: nextTop });
    if (focusTarget) {
      focusHashTarget(hash);
    }
    return true;
  }

  const duration = Math.min(
    MAX_SCROLL_DURATION,
    Math.max(MIN_SCROLL_DURATION, Math.abs(distance) * DISTANCE_FACTOR),
  );
  const startTime = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const easedProgress = easeOutCubic(progress);

    window.scrollTo({
      top: currentTop + distance * easedProgress,
    });

    if (progress < 1) {
      activeAnimationFrame = requestAnimationFrame(step);
      return;
    }

    activeAnimationFrame = 0;
    if (focusTarget) {
      focusHashTarget(hash);
    }
  };

  activeAnimationFrame = requestAnimationFrame(step);
  return true;
};
