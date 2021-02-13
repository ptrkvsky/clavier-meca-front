var plugins = [{
      plugin: require('/Volumes/System/perso/www/master-gatsby/starter-files/gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Volumes/System/perso/www/master-gatsby/starter-files/gatsby/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Volumes/System/perso/www/master-gatsby/starter-files/gatsby/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#fff700","theme_color":"#fff700","display":"minimal-ui","icon":"src/assets/images/favicons/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"77517a3c180d59385ab79dfe479e7b14"},
    },{
      plugin: require('/Volumes/System/perso/www/master-gatsby/starter-files/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"dhh9ms17","dataset":"production","token":"sk1GWHA8AESHqIcKb3Sb0JnIUtWw0WcelsNFsk2TreJrvNu46E9jh7f0MIBUeI3i69NjvoOXeP1UdDfo71xWKt6qtCtvrwVLfTJysocgRJ8yleqLAYxpvAKR7On5erINABVTFgngfAS8F3y6pvhcvBtUsrRWnE342phZRvcJCIbMx5KWCxCw","watchMode":false,"overlayDrafts":false},
    },{
      plugin: require('/Volumes/System/perso/www/master-gatsby/starter-files/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
