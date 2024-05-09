var plugins = [{
      name: 'gatsby-plugin-google-analytics',
      plugin: require('/Users/ederchristian/Documents/dev/side-projects/ederchristian.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-77253655-1","head":false,"anonymize":true,"respectDNT":true,"exclude":[],"pageTransitionDelay":0,"enableWebVitalsTracking":false},
    },{
      name: 'gatsby-plugin-google-adsense',
      plugin: require('/Users/ederchristian/Documents/dev/side-projects/ederchristian.github.io/node_modules/gatsby-plugin-google-adsense/gatsby-ssr'),
      options: {"plugins":[],"publisherId":"ca-pub-3078800558715049"},
    },{
      name: 'gatsby-plugin-facebook-pixel',
      plugin: require('/Users/ederchristian/Documents/dev/side-projects/ederchristian.github.io/node_modules/gatsby-plugin-facebook-pixel/gatsby-ssr'),
      options: {"plugins":[],"pixelId":"2581799535451652"},
    },{
      name: 'gatsby-plugin-transition-link',
      plugin: require('/Users/ederchristian/Documents/dev/side-projects/ederchristian.github.io/node_modules/gatsby-plugin-transition-link/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-styled-components',
      plugin: require('/Users/ederchristian/Documents/dev/side-projects/ederchristian.github.io/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false,"disableVendorPrefixes":false},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/ederchristian/Documents/dev/side-projects/ederchristian.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/ederchristian/Documents/dev/side-projects/ederchristian.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Eder Christian","short_name":"Eder Christian","start_url":"/","background_color":"#0e1218","theme_color":"#0e1218","display":"minimal-ui","icon":"static/assets/favicons/favicon-32x32.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"de7d04412186cb9798bc2a9ba2cffe06"},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/Users/ederchristian/Documents/dev/side-projects/ederchristian.github.io/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap","createLinkInHead":true,"entryLimit":45000,"query":"{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }","excludes":[]},
    },{
      name: 'gatsby-plugin-instagram-embed',
      plugin: require('/Users/ederchristian/Documents/dev/side-projects/ederchristian.github.io/node_modules/gatsby-plugin-instagram-embed/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-offline',
      plugin: require('/Users/ederchristian/Documents/dev/side-projects/ederchristian.github.io/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
/* global plugins */
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

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
