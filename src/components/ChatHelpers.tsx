type IntersectionObserverEntry = {
  target: Element;
  time: DOMHighResTimeStamp;
  rootBounds: DOMRectReadOnly | null;
  boundingClientRect: DOMRectReadOnly;
  intersectionRect: DOMRectReadOnly;
  intersectionRatio: number;
  isIntersecting: boolean;
};

export type IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;
