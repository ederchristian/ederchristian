import type { AstroComponentFactory } from "astro/runtime/server/index.js"
import { BookOpen, Code2, Compass, Wrench } from "lucide-astro"

export type ThemeSlug = "engineering" | "career" | "books" | "uses"

export type NoteTheme = {
  slug: ThemeSlug
  name: string
  description: string
  icon: AstroComponentFactory | typeof Code2
  href: string
  external?: boolean
}

export const NOTE_THEMES: NoteTheme[] = [
  {
    slug: "engineering",
    name: "Engineering",
    description: "Notes on frontend craft, systems, and tools.",
    icon: Code2,
    href: "/notes/engineering",
  },
  {
    slug: "career",
    name: "Career",
    description: "The path from outsider to senior, in public.",
    icon: Compass,
    href: "/notes/career",
  },
  {
    slug: "books",
    name: "Books",
    description: "What I'm reading and what stuck.",
    icon: BookOpen,
    href: "/notes/books",
  },
  {
    slug: "uses",
    name: "Uses",
    description: "Hardware, editor, CLI, daily tools.",
    icon: Wrench,
    href: "/uses",
  },
]

export const getThemeBySlug = (slug: string): NoteTheme | undefined =>
  NOTE_THEMES.find((t) => t.slug === slug)
