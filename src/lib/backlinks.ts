import { type CollectionEntry, getCollection } from "astro:content"

type Backlink = {
  fromSlug: string
  fromTitle: string
  href: string
  collection: "writing" | "garden"
  theme?: string
}

const wikiLinkRegex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g

function normalize(name: string): string {
  return name.trim().replace(/\s+/g, "-").toLowerCase()
}

let cache: Map<string, Backlink[]> | null = null

async function buildIndex(): Promise<Map<string, Backlink[]>> {
  if (cache) return cache
  const [writing, garden] = await Promise.all([
    getCollection("writing"),
    getCollection("garden"),
  ])

  const index = new Map<string, Backlink[]>()

  const record = (
    targetSlug: string,
    backlink: Backlink,
  ) => {
    const list = index.get(targetSlug) ?? []
    list.push(backlink)
    index.set(targetSlug, list)
  }

  const scan = (
    entry: CollectionEntry<"writing"> | CollectionEntry<"garden">,
    collection: "writing" | "garden",
  ) => {
    const body = entry.body
    if (!body) return
    let m: RegExpExecArray | null
    wikiLinkRegex.lastIndex = 0
    while ((m = wikiLinkRegex.exec(body))) {
      const target = normalize(m[1])
      const fromSlug = entry.slug
      const theme = collection === "garden" ? (entry as CollectionEntry<"garden">).data.theme : undefined
      record(target, {
        fromSlug,
        fromTitle: entry.data.title,
        href: collection === "writing" ? `/writing/${fromSlug}` : `/garden/${theme}/${fromSlug}`,
        collection,
        theme,
      })
    }
  }

  for (const w of writing) scan(w, "writing")
  for (const g of garden) scan(g, "garden")

  cache = index
  return index
}

export async function getBacklinksFor(slug: string): Promise<Backlink[]> {
  const index = await buildIndex()
  return index.get(normalize(slug)) ?? []
}
