import type { AstroComponentFactory } from "astro/runtime/server/index.js"
import { BookOpen, Code2, Compass, Music, Wrench } from "lucide-astro"

export type ThemeSlug = "engineering" | "career" | "books" | "music" | "uses"

export type GardenTheme = {
  slug: ThemeSlug
  name: string
  description: string
  icon: AstroComponentFactory | typeof Code2
  href: string
  external?: boolean
}

export const GARDEN_THEMES: GardenTheme[] = [
  {
    slug: "engineering",
    name: "Engineering",
    description: "Notes on frontend craft, systems, and tools.",
    icon: Code2,
    href: "/garden/engineering",
  },
  {
    slug: "career",
    name: "Career",
    description: "The path from outsider to senior, in public.",
    icon: Compass,
    href: "/garden/career",
  },
  {
    slug: "books",
    name: "Books",
    description: "What I'm reading and what stuck.",
    icon: BookOpen,
    href: "/garden/books",
  },
  {
    slug: "music",
    name: "Music",
    description: "Listening notes and writing soundtracks.",
    icon: Music,
    href: "/garden/music",
  },
  {
    slug: "uses",
    name: "Uses",
    description: "Hardware, editor, CLI, daily tools.",
    icon: Wrench,
    href: "/uses",
  },
]

export const getThemeBySlug = (slug: string): GardenTheme | undefined =>
  GARDEN_THEMES.find((t) => t.slug === slug)
