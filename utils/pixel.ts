export const FB_PIXEL_ID = '2016958548988839';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

// Track standard PageView
export const pageview = () => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
};

// Track standard and custom events safely
export const event = (name: string, options: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', name, options);
  }
};

// Track Lead event (fired when a user successfully submits an inquiry or career form)
export const trackLead = (params?: { formName?: string; [key: string]: unknown }) => {
  event('Lead', {
    content_name: params?.formName || 'Form Submission',
    ...params,
  });
};

// Track Contact event (fired when a user clicks WhatsApp, phone call, or consultation CTAs)
export const trackContact = (params?: { channel?: string; label?: string; [key: string]: unknown }) => {
  event('Contact', {
    content_category: params?.channel || 'Contact CTA',
    content_name: params?.label || 'Direct Contact Click',
    ...params,
  });
};
