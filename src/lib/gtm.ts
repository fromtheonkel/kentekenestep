// GTM Event Tracking Functions

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Generic GTM event function
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
  
  // Also push to dataLayer for debugging
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters
    });
  }
};

// CTA Button Tracking Events
export const trackCTA = {
  // Homepage CTAs
  homeHeroButton: () => {
    trackEvent('cta_click', {
      event_category: 'engagement',
      event_label: 'homepage_hero_vergelijken',
      page_location: window.location.href,
      button_text: 'Vergelijk Elektrische Steps'
    });
  },

  homeSelanaButton: () => {
    trackEvent('cta_click', {
      event_category: 'engagement', 
      event_label: 'homepage_selana_details',
      page_location: window.location.href,
      button_text: 'Bekijk SELANA Alpha'
    });
  },

  homeVergelijkenButton: () => {
    trackEvent('cta_click', {
      event_category: 'engagement',
      event_label: 'homepage_vergelijken_cta',
      page_location: window.location.href,
      button_text: 'Vergelijk Elektrische Steps'
    });
  },

  // Comparison page CTAs  
  vergelijkenDetailsButton: (scooterModel: string) => {
    trackEvent('cta_click', {
      event_category: 'engagement',
      event_label: 'vergelijken_details',
      page_location: window.location.href,
      button_text: 'Details',
      scooter_model: scooterModel
    });
  },

  vergelijkenKopenButton: (scooterModel: string, affiliate: string) => {
    trackEvent('cta_click', {
      event_category: 'engagement',
      event_label: 'vergelijken_kopen',
      page_location: window.location.href,
      button_text: 'Kopen',
      scooter_model: scooterModel,
      affiliate_link: affiliate
    });
  },

  // SELANA detail page CTAs
  selanaBestellenButton: () => {
    trackEvent('cta_click', {
      event_category: 'conversion',
      event_label: 'selana_bestellen_main',
      page_location: window.location.href,
      button_text: 'Bekijk op Selana.nl',
      value: 1900 // Product price for conversion tracking
    });
  },

  selanaBestellenFooter: () => {
    trackEvent('cta_click', {
      event_category: 'conversion', 
      event_label: 'selana_bestellen_footer',
      page_location: window.location.href,
      button_text: 'Bestel bij SELANA',
      value: 1900
    });
  },

  // Blog CTAs
  blogReadMore: (articleTitle: string) => {
    trackEvent('cta_click', {
      event_category: 'engagement',
      event_label: 'blog_read_more',
      page_location: window.location.href,
      article_title: articleTitle
    });
  },

  // Navigation
  headerNavigation: (navItem: string) => {
    trackEvent('navigation_click', {
      event_category: 'engagement',
      event_label: 'header_navigation',
      page_location: window.location.href,
      nav_item: navItem
    });
  },

  // FAQ interactions
  faqMoreQuestions: () => {
    trackEvent('cta_click', {
      event_category: 'engagement',
      event_label: 'faq_more_questions',
      page_location: window.location.href,
      button_text: 'Meer vragen? Bekijk volledige FAQ'
    });
  }
};

// Page view tracking
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GTM-KW6X22NL', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

// Scroll tracking (for engagement)
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll', {
    event_category: 'engagement',
    event_label: 'scroll_depth',
    value: depth
  });
};

// Form interactions (for contact/newsletter)
export const trackFormStart = (formName: string) => {
  trackEvent('form_start', {
    event_category: 'engagement',
    event_label: formName,
    page_location: window.location.href
  });
};

export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    event_category: 'conversion',
    event_label: formName, 
    page_location: window.location.href
  });
};

// Newsletter tracking
export const trackNewsletterSignup = (email: string) => {
  trackEvent('newsletter_signup', {
    event_category: 'conversion',
    event_label: 'homepage_newsletter',
    page_location: window.location.href,
    value: 1 // Lead value
  });
};

export const trackNewsletterStart = () => {
  trackEvent('newsletter_start', {
    event_category: 'engagement',
    event_label: 'homepage_newsletter_focus',
    page_location: window.location.href
  });
};