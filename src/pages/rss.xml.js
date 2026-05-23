import rss from "@astrojs/rss"
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts"
import { getAllWriting } from "../lib/content"

export async function GET(context) {
  const posts = await getAllWriting()
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.date),
      link: `/writing/${post.slug}/`,
    })),
  })
}
