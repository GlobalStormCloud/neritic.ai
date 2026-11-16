// All page text lives here. Components hold no wording.

/** The product name. Every use on the page, in the title and in the description comes from this constant. */
export const PRODUCT = 'Neritic AI';

export const COMPANY = 'Global Storm';

/** One value for every demo button on the page. */
export const DEMO_URL = 'https://globalstorm.cloud/company/#contact';

export const site = {
  lang: 'en',
  url: 'https://neritic.ai/',
  // shortcut: stand-ins built from the hero text below; replace if a dedicated title and description are supplied.
  title: `${PRODUCT} · Make sense of your machine noise.`,
  description: `Make sense of your machine noise. Your machines already show when something’s changing. ${PRODUCT} helps you see it.`,
  skip: 'Skip to content',

  header: {
    by: `by ${COMPANY}`,
    byUrl: 'https://globalstorm.cloud/',
    demo: 'Book a 30-minute demo',
  },

  hero: {
    h1: 'Make sense of your machine noise.',
    lead: `Your machines already show when something’s changing. ${PRODUCT} helps you see it.`,
    demo: 'Book a 30-minute demo',
  },

  illustration: {
    tag: 'Illustration',
    caption: 'what changed, which machine, since when',
    alt: 'Illustration: four machine signals run steady, then one changes at a marked point.',
  },

  does: {
    label: 'What it does',
    items: [
      'It learns what normal looks like for each of your machines, from their own data.',
      'Nothing to build or train for each machine. Setup is simple.',
      'When one starts to drift, you hear about it early, so you can plan the maintenance.',
      'It doesn’t need to know what your machine is, only to see its data.',
    ],
  },

  starts: {
    label: 'How it starts',
    items: [
      { label: 'Connect a machine', text: 'Point it at your machine’s data.' },
      { label: 'Show it normal', text: 'Tell it when the machine was running well.' },
      {
        label: 'Get answers',
        text: 'Then just ask. It tells you in plain words what changed, which machine needs attention first, and since when.',
      },
    ],
  },

  contact: {
    label: 'Contact',
    email: 'contact@globalstorm.cloud',
    demo: 'Book a 30-minute demo',
  },

  footer: {
    by: `by ${COMPANY}`,
    byUrl: 'https://globalstorm.cloud/',
    company: 'Global Storm sp. z o.o., Warsaw, Poland',
    registryLabel: 'globalstorm.cloud/company/#registry',
    registryUrl: 'https://globalstorm.cloud/company/#registry',
  },

  // shortcut: the build spec has no 404 wording; these are minimal stand-ins.
  notFound: {
    title: 'Page not found',
    home: PRODUCT,
  },
} as const;
