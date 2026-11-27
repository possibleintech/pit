import posthog from "posthog-js";

type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  try {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.capture(name, payload);
    }
  } catch {
    // ignore analytics failures
  }

  try {
    window.gtag?.("event", name, payload);
  } catch {
    // ignore analytics failures
  }
}
