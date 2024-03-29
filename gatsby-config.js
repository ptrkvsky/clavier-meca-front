/* eslint-disable max-len */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: 'Clavier Meca',
    description: 'Découvrir le monde merveilleux des claviers mécaniques',
    author: 'Eric André',
    siteUrl: 'https://www.clavier-meca.com',
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-prettier-eslint',
    //   // this is the default configuration, override only what you need
    //   options: {
    //     cwd: process.cwd(), // path to a directory that should be considered as the current working directory
    //     watch: true, // format/lint on save
    //     initialScan: true, // if true, will format/lint the whole project on Gatsby startup
    //     onChangeFullScanLint: false, // if true, on file save always perform full scan lint
    //     onChangeFullScanFormat: false, // if true, on file save always perform full scan format
    //     prettierLast: false, // if true, will run Prettier after ESLint
    //     ignorePatterns: [
    //       '**/node_modules/**/*',
    //       '**/.git/**/*',
    //       '**/dist/**/*',
    //       '.cache/**/*',
    //       'public/**/*',
    //     ], // string or array of paths/files/globs to ignore
    //     prettier: {
    //       patterns: [], // string or array of paths/files/globs to include related only to Prettier
    //       ignorePatterns: [], // string or array of paths/files/globs to exclude related only to Prettier
    //       customOptions: {}, // see: https://prettier.io/docs/en/options.html
    //     },
    //     eslint: {
    //       patterns: [], // string or array of paths/files/globs to include related only to ESLint
    //       ignorePatterns: [], // string or array of paths/files/globs to exclude related only to ESLint
    //       formatter: 'stylish', // set custom or third party formatter
    //       maxWarnings: undefined, // number of max warnings allowed, when exceed it will fail Gatsby build
    //       emitWarning: true, // if true, will emit lint warnings
    //       failOnError: false, // if true, any lint error will fail the build, you may set true only in your prod config
    //       failOnWarning: false, // same as failOnError but for warnings
    //       plugins: [], // an array of plugins to load for ESLint
    //       customOptions: {}, // see: https://eslint.org/docs/developer-guide/nodejs-api#cliengine
    //     },
    //   },
    // },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Clavier Meca',
        short_name: 'Clavier Meca',
        start_url: '/',
        background_color: '#8000ff',
        theme_color: '#8000ff',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicons/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-source-sanity-transform-images',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECTID || 'dhh9ms17',
        dataset: process.env.GATSBY_SANITY_DATASET || 'production',
        token: process.env.GATSBY_SANITY_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    'gatsby-plugin-offline', // make sure to put last in the array
  ],
};
