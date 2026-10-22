// The Person node of the structured data: the home page and the About page describe the same person
// (the @id ties them together), and every article names this person as its author.
export const SITE_URL = 'https://www.karatitsyn.com/';
export const PERSON_ID = `${SITE_URL}#person`;

export const PERSON = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Kiril Karatitsyn',
  url: SITE_URL,
  image: `${SITE_URL}source/profile/kiril-1000.webp`,
  jobTitle: 'Shopify Developer',
  address: { '@type': 'PostalAddress', addressCountry: 'DE' },
  knowsLanguage: ['de', 'en', 'uk'],
  worksFor: { '@type': 'Organization', name: 'Independent' },
  sameAs: [
    'https://www.upwork.com/freelancers/~0165dda3529105e6f3',
    'https://www.linkedin.com/in/kiril-karatitsyn-bb278b332/',
    'https://github.com/kirilkaratitsyn',
  ],
  knowsAbout: ['Shopify', 'Shopify theme development', 'Shopify Markets', 'B2B wholesale on Shopify', 'Online Store 2.0', 'Liquid', 'Storefront UX', 'Performance optimization'],
};
