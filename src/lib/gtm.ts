// Functie om pageviews handmatig te tracken
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'page_view',
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Functie om custom events te tracken
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...parameters
    });
  }
};