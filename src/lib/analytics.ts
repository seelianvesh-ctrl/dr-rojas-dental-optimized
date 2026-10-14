declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * The GA4 / Google tag itself is injected into the built `index.html` <head> by
 * the `inject-ga4-snippet` plugin in vite.config.ts, and the measurement ID is
 * configured in src/config.ts. This module only sends events to it — it
 * deliberately does not create the tag, so there is exactly one initialisation
 * path and no chance of double-counting page views.
 */

/** Fire a GA4 event.  No-op when gtag hasn't loaded (dev, or blocked by the client). */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

/* Conversion-ready events — mark as conversions in GA4 → Admin → Events:
 *   whatsapp_click · call_click · directions_click                    */

export function trackWhatsAppClick(source: string): void {
  trackEvent('whatsapp_click', { source });
}

export function trackCallClick(source: string): void {
  trackEvent('call_click', { source });
}

export function trackDirectionsClick(): void {
  trackEvent('directions_click');
}
