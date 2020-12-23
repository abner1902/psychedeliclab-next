const withImages = require('next-images')
module.exports = withImages({
  webpack (config, options) {
    return config
  }
})

module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['pt', 'en-US'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'pt',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    domains: [
      {
        domain: 'www.ressarcir.com.br',
        defaultLocale: 'pt'
      },
      {
        domain: 'www.ressarcir.com',
        defaultLocale: 'en-Us'
      }
    ]
  }
}