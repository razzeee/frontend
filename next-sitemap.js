/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_BASE_URI,
  generateRobotsTxt: true,
  alternateRefs: [
    {
      hreflang: 'en',
      href: process.env.NEXT_PUBLIC_SITE_BASE_URI + '/en',
    },
    {
      hreflang: 'de',
      href: process.env.NEXT_PUBLIC_SITE_BASE_URI + '/de',
    },
    {
      hreflang: 'fr',
      href: process.env.NEXT_PUBLIC_SITE_BASE_URI + '/fr',
    },
    {
      hreflang: 'nb_NO',
      href: process.env.NEXT_PUBLIC_SITE_BASE_URI + '/nb_NO',
    },
    {
      hreflang: 'tr',
      href: process.env.NEXT_PUBLIC_SITE_BASE_URI + '/tr',
    },
    {
      hreflang: 'fi',
      href: process.env.NEXT_PUBLIC_SITE_BASE_URI + '/fi',
    },
    {
      hreflang: 'id',
      href: process.env.NEXT_PUBLIC_SITE_BASE_URI + '/id',
    },
    {
      hreflang: 'it',
      href: process.env.NEXT_PUBLIC_SITE_BASE_URI + '/it',
    },
    {
      hreflang: 'pl',
      href: process.env.NEXT_PUBLIC_SITE_BASE_URI + '/pl',
    },
    {
      hreflang: 'pt_BR',
      href: process.env.NEXT_PUBLIC_SITE_BASE_URI + '/pt_BR',
    },
  ],
}
