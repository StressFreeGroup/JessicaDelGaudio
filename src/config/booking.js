/**
 * BOOKING & PAYMENT URLs
 *
 * Single source of truth for every booking and payment link on the site.
 * After Jessica's Google Workspace + Stripe accounts are provisioned, update
 * each URL below with the real value. The site reads from here everywhere.
 *
 * SETUP STEPS:
 *
 * 1. Google Appointment Scheduling — log into Jessica's Google Calendar at
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
  freeConsult: 'https://calendar.app.google/PLACEHOLDER_FREE_CONSULT',
  onTheSpot:   'https://buy.stripe.com/PLACEHOLDER_ON_THE_SPOT',
  weeklyPlan:  'https://buy.stripe.com/PLACEHOLDER_WEEKLY_PLAN',
  annualPlan:  'https://buy.stripe.com/PLACEHOLDER_ANNUAL_PLAN',
  addOnSession:'https://buy.stripe.com/PLACEHOLDER_ADDON_SESSION'
};

/**
 * Scheduler — three modes, switch by editing scheduler.mode:
 *   'mock'      → in-house preview availability grid (default until Workspace is provisioned)
 *   'calendly'  → Calendly inline iframe widget
 *   'google'    → Google Appointment Scheduling iframe
 */
export const scheduler = {
  mode: 'mock',
  calendlyUrl: 'https://calendly.com/PLACEHOLDER_CALENDLY_HANDLE/free-consult',
  googleUrl:   'https://calendar.app.google/PLACEHOLDER_GOOGLE_SCHEDULER'
};

/**
 * Direct contact methods — used in headers, footers, payment page.
 */
export const contact = {
  phone: '(845) 662-5773',
  phoneE164: '+18456625773',
  email: 'jess@jessicadelgaudio.com',
  personalEmail: 'jessica.delgaudio1@gmail.com'
};

/**
 * Verified third-party reviews — outbound links only, never republished on site
 * per APA Ethics §5.05 / NYS OP licensing-board guidance on testimonials.
 */
export const reviews = {
  primary: {
    platform: 'Mind Diagnostics',
    url: 'https://www.mind-diagnostics.org/listing/207162-Jessica-Del-Gaudio',
    rating: 4.6,
    count: 50
  },
  others: [
    {
      platform: 'Find a Therapist',
      url: 'https://www.findatherapist.com/listing/jessica-m-del-gaudio-z3u0c2/'
    },
    {
      platform: 'Therapist.com',
      url: 'https://therapist.com/clinician/jessica-del-gaudio/'
    }
  ]
};
