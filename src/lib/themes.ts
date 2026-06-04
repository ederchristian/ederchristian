import type { AstroComponentFactory } from "astro/runtime/server/index.js"
import {
  BookOpen,
  Code2,
  Compass,
  GraduationCap,
  Hammer,
  Languages,
  PenLine,
  Wrench,
} from "lucide-astro"

export type ThemeSlug =
  | "engineering"
  | "career"
  | "books"
  | "uses"
  | "learning"
  | "writing"
  | "english"
  | "craft"

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
    slug: "craft",
    name: "Craft",
    description: "Tools, sharing, and the fundamentals under the frameworks.",
    icon: Hammer,
    href: "/notes/craft",
  },
  {
    slug: "career",
    name: "Career",
    description: "The path from outsider to senior, in public.",
    icon: Compass,
    href: "/notes/career",
  },
  {
    slug: "learning",
    name: "Learning",
    description: "How I study, stay sharp, and learn in public.",
    icon: GraduationCap,
    href: "/notes/learning",
  },
  {
    slug: "writing",
    name: "Writing",
    description: "Writing clearly — the skill that scales everything else.",
    icon: PenLine,
    href: "/notes/writing",
  },
  {
    slug: "english",
    name: "English",
    description: "English as a developer's biggest career multiplier.",
    icon: Languages,
    href: "/notes/english",
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
