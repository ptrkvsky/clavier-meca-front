module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#fff700","theme_color":"#fff700","display":"minimal-ui","icon":"src/assets/images/favicons/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"77517a3c180d59385ab79dfe479e7b14"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
