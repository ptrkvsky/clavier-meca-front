require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: `Clavier Meca`,
    description: 'Découvrir le monde merveilleux des claviers mécaniques',
    author: 'Johan Petrikovsky',
    siteUrl: `https://www.clavier-meca.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#8000FF`,
        theme_color: `#8000FF`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-source-sanity-transform-images',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECTID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
  ],
};
