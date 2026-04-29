/**
 * BOOKING & PAYMENT URLs
 *
 * This is the single source of truth for every booking and payment link on the site.
 * After Jessica's Google Workspace + Stripe accounts are provisioned, update each
 * URL below with the real value. The site reads from here everywhere.
 *
 * SETUP STEPS:
 *
 * 1. Google Appointment Scheduling — log in to Jessica's Google Calendar at
 *    jess@jessicadelgaudio.com, click "+ Create" → Appointment schedule, then
 *    create one schedule per session type. Each gives a public booking URL.
 *
 * 2. Stripe Payment Links — log in to Stripe dashboard → Payment Links → create
 *    one link per paid tier. For each link, set "After payment → Confirmation
 *    page → Don't show confirmation page → Redirect to your website" and paste
 *    the matching Google Appointment Scheduling URL into the redirect field.
 *
 *    That means: client pays Stripe → Stripe redirects them straight to the
 *    booking calendar → they pick a time → done.
 *
 * 3. Replace the placeholders below. No other file needs to change.
 */

export const booking = {
  /**
   * FREE 15-min consultation.
   * Direct Google Appointment Scheduling link — no payment.
   */
  freeConsult: 'https://calendar.app.google/PLACEHOLDER_FREE_CONSULT',

  /**
   * On the Spot — single $80 session.
   * Stripe Payment Link → on success, redirects to Google scheduler.
   */
  onTheSpot: 'https://buy.stripe.com/PLACEHOLDER_ON_THE_SPOT',

  /**
   * Weekly Plan — $399/month subscription.
   * Stripe Subscription Payment Link → on success, redirects to plan-member scheduler.
   */
  weeklyPlan: 'https://buy.stripe.com/PLACEHOLDER_WEEKLY_PLAN',

  /**
   * Annual Plan — $3,750/year subscription.
   * Stripe Subscription Payment Link → on success, redirects to plan-member scheduler.
   */
  annualPlan: 'https://buy.stripe.com/PLACEHOLDER_ANNUAL_PLAN',

  /**
   * Add-on 45-min session — $45.
   * Stripe Payment Link, plan members only.
   */
  addOnSession: 'https://buy.stripe.com/PLACEHOLDER_ADDON_SESSION'
};

/**
 * Direct contact methods — used in headers, footers, payment page.
 */
export const contact = {
  phone: '(845) 662-5773',
  phoneE164: '+18456625773',
  email: 'jess@jessicadelgaudio.com'
};

/**
 * Verified third-party reviews — outbound link only, never republished on site.
 */
export const reviews = {
  url: 'https://www.mind-diagnostics.org/listing/207162-Jessica-Del-Gaudio',
  rating: 4.6,
  count: 50
};
