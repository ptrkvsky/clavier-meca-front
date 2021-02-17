const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Volumes/System/perso/www/master-gatsby/starter-files/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Volumes/System/perso/www/master-gatsby/starter-files/gatsby/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Volumes/System/perso/www/master-gatsby/starter-files/gatsby/src/pages/index.js"))),
  "component---src-templates-category-js": hot(preferDefault(require("/Volumes/System/perso/www/master-gatsby/starter-files/gatsby/src/templates/Category.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Volumes/System/perso/www/master-gatsby/starter-files/gatsby/src/templates/Post.js")))
}

