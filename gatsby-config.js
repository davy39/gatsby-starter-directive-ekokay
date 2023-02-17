const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
        siteUrl: config.siteUrl,
        title: `Ekokay - Diagnostiques énergétiques`,
        description: `EKOKAY est un bureau d'étude indépendant oeuvrant pour la maîtrise de l'énergie. L'audit énergétique permet d'identifier les travaux prioritaires tout en quantifiant leurs coûts financiers, ainsi que le gain énergétique engendré.`,
        author: `Vangélis Cottet`,
        image: `/img/logo.jpg`,
        keywords: `audit énergétique, diagnostic énergétique, bilan thermique, jura, Lons-le-Saunier, Dole, Champagnole, Poligny, Bourgogne, Franche-Comté, économies d'énergie, énergie, chauffage, solaire`,
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
