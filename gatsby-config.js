const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
        siteUrl: config.siteUrl,
        siteUrlShort: config.siteUrlShort,
        siteTitle: config.siteTitle,
        siteTitleAlt: config.siteTitleAlt,
        siteDescription: config.siteDescription,
        siteLogo: config.siteLogo,
        siteKeyWords: config.siteKeyWords,
        favicon: config.favicon,
        userEmail: config.userEmail,
        userName: config.userName,
        userMoto: config.userMoto,
        avatar: config.avatar,
        algoliaAppId: config.algoliaAppId,
        algoliaApiKey: config.algoliaApiKey,
        disqusShortname: config.disqusShortname,
        socialLinks: config.socialLinks,
        title: config.siteTitle,
        description: config.siteDescription,
        addThisID: config.addThisID,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
