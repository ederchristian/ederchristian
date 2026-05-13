import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import vercelStatic from "@astrojs/vercel/static"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import partytown from "@astrojs/partytown"
import icon from "astro-icon"
import remarkWikiLink from "remark-wiki-link"
import { visit } from "unist-util-visit"

function rehypeWideImages() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "img") return
      const title = node.properties?.title
      if (typeof title !== "string") return
      if (title.toLowerCase() !== "wide") return
      const existing = Array.isArray(node.properties.className) ? node.properties.className : []
      node.properties.className = [...existing, "wide"]
      delete node.properties.title
    })
    visit(tree, "element", (node) => {
      if (node.tagName !== "p") return
      const onlyChild = node.children?.length === 1 ? node.children[0] : null
      if (onlyChild?.type === "element" && onlyChild.tagName === "img") {
        const cls = Array.isArray(onlyChild.properties?.className) ? onlyChild.properties.className : []
        if (cls.includes("wide")) {
          const existing = Array.isArray(node.properties?.className) ? node.properties.className : []
          node.properties = node.properties ?? {}
          node.properties.className = [...existing, "has-wide-image"]
        }
      }
    })
  }
}

export default defineConfig({
  output: "static",
  adapter: vercelStatic(),
  site: "https://ederchristian.com",
  integrations: [
    mdx(),
    sitemap(),
    icon(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
    },
    remarkPlugins: [
      [
        remarkWikiLink,
        {
          aliasDivider: "|",
          hrefTemplate: (permalink) => `/garden/${permalink}`,
          pageResolver: (name) => [name.replace(/ /g, "-").toLowerCase()],
        },
      ],
    ],
    rehypePlugins: [rehypeWideImages],
  },
  redirects: {
    "/blog": "/writing",
    "/blog/[...slug]": "/writing/[...slug]",
    "/writing/page/1": "/writing",
    "/pt": "/",
    "/pt/sobre": "/about",
    "/links": "/",
  },
})
