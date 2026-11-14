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
  address: { '@type': 'PostalAddress', addressLocality: 'Bad Bentheim', postalCode: '48455', addressRegion: 'Niedersachsen', addressCountry: 'DE' },
  knowsLanguage: ['de', 'en', 'uk'],
  worksFor: { '@type': 'Organization', name: 'Independent' },
  sameAs: [
    'https://www.upwork.com/freelancers/~0165dda3529105e6f3',
    'https://www.linkedin.com/in/kirilkaratitsyn/',
    'https://www.malt.com/de-de/profile/kirilkaratitsyn',
    'https://github.com/kirilkaratitsyn',
  ],
  knowsAbout: ['Shopify', 'Shopify theme development', 'Shopify Markets', 'B2B wholesale on Shopify', 'Online Store 2.0', 'Liquid', 'Storefront UX', 'Performance optimization'],
};

// Name, address and phone exactly as in the Impressum (src/legal/impressum.de.md); the Google Business Profile,
// directories and the footer must say the same. No rating: Upwork reviews may not be marked up as the site's own.
export const BUSINESS_ID = `${SITE_URL}#business`;
export const PHONE = '+49 175 8772778';
export const EMAIL = 'kiril@karatitsyn.com';
export const BUSINESS = {
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: 'Kiril Karatitsyn',
  description: 'Freiberuflicher Shopify-Entwickler und Webdesigner in Bad Bentheim: Onlineshops, Websites, Umzug zu Shopify, Shopify Markets.',
  url: SITE_URL,
  image: `${SITE_URL}source/profile/kiril-1000.webp`,
  telephone: PHONE.replace(/ /g, ''),
  email: EMAIL,
  address: { '@type': 'PostalAddress', streetAddress: 'Am Kuckuck 6', postalCode: '48455', addressLocality: 'Bad Bentheim', addressRegion: 'Niedersachsen', addressCountry: 'DE' },
  areaServed: ['Bad Bentheim', 'Grafschaft Bentheim', 'Nordhorn', 'Lingen (Ems)', 'Emsland', 'Rheine', 'Gronau (Westf.)', 'Osnabrück', 'Deutschland'].map((name) => ({ '@type': 'AdministrativeArea', name })),
  knowsLanguage: ['de', 'en', 'uk'],
  founder: { '@id': PERSON_ID },
  sameAs: PERSON.sameAs,
};
