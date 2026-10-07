import { GA4_MEASUREMENT_ID } from '../config';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/* ── Bootstrap ─────────────────────────────────────────────────────────── */

/**
 * Load the GA4 gtag.js snippet and wire up the dataLayer.
 * Skipped in development so local traffic doesn't pollute real analytics.
 */
export function initAnalytics(): void {
  if (!GA4_MEASUREMENT_ID || import.meta.env.DEV) return;

  // Inject the remote gtag.js loader
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialise the dataLayer queue and gtag helper
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID, {
    send_page_view: true,
  });
}

/* ── Generic event helper ──────────────────────────────────────────────── */

/**
 * Fire an arbitrary GA4 event.
 * Silently no-ops when gtag hasn't loaded (e.g. during dev or if the
 * ad-blocker intercepted the script).
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

/* ── Conversion-ready CTA events ───────────────────────────────────────── */
/*
 * Mark these three event names as conversions in GA4 after merging:
 *   GA4 → Admin → Events → toggle "Mark as conversion"
 *     • whatsapp_click
 *     • call_click
 *     • directions_click
 */

export function trackWhatsAppClick(source: string): void {
  trackEvent('whatsapp_click', {
    source,
    link_url: 'https://wa.me/918247491265',
  });
}

export function trackCallClick(source: string): void {
  trackEvent('call_click', {
    source,
    phone: '+918247491265',
  });
}

export function trackDirectionsClick(): void {
  trackEvent('directions_click', {
    link_url: 'https://maps.app.goo.gl/mtauKva9JUmjKvuN6',
  });
}