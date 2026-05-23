import { type CollectionEntry, getCollection } from "astro:content"

export type WritingEntry = CollectionEntry<"writing"> | CollectionEntry<"blog">

const isPublishedBlog = (entry: CollectionEntry<"blog">) =>
  (entry.data.language === undefined || entry.data.language === "en-US") &&
  entry.slug !== undefined

async function safeGetCollection<T extends "writing" | "blog">(name: T) {
  try {
    return await getCollection(name)
  } catch {
    return [] as Array<CollectionEntry<T>>
  }
}

export async function getAllWriting(): Promise<WritingEntry[]> {
  const [writingRaw, blogRaw] = await Promise.all([
    safeGetCollection("writing"),
    safeGetCollection("blog"),
  ])

  const all: WritingEntry[] = [
    ...writingRaw.filter((e) => !(e as CollectionEntry<"writing">).data.draft),
    ...blogRaw.filter((e) =>
      isPublishedBlog(e as CollectionEntry<"blog">),
    ),
  ]

  return all.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  )
}

export async function getRecentWriting(limit = 3): Promise<WritingEntry[]> {
  const all = await getAllWriting()
  return all.slice(0, limit)
}

export async function getNotes(themeSlug?: string) {
  const all = await getCollection("notes", (e) => !e.data.draft)
  const filtered = themeSlug
    ? all.filter((n) => n.data.theme === themeSlug)
    : all
  return filtered.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  )
}

export function entryHref(entry: WritingEntry): string {
  return `/writing/${entry.slug}`
}
