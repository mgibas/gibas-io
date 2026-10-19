import { profile } from '@data/profile'

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: profile.url,
  description: profile.description,
  jobTitle: profile.jobTitle,
  worksFor: { '@type': 'Organization', name: profile.employer.name, url: profile.employer.url },
  address: {
    '@type': 'PostalAddress',
    addressLocality: profile.location.city,
    addressRegion: profile.location.regionCode,
    addressCountry: profile.location.country,
  },
  sameAs: Object.values(profile.social),
}
