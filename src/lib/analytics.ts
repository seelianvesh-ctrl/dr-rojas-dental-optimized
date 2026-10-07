import { GA4_MEASUREMENT_ID } from '../config';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/** Load gtag.js and initialise GA4.  Skipped in dev. */
export function initAnalytics(): void {
  if (!GA4_MEASUREMENT_ID || import.meta.env.DEV) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID);
}

/** Fire a GA4 event.  No-op when gtag hasn't loaded. */
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