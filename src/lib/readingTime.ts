import readingTime from "reading-time"

export function computeReadingTime(markdownBody: string): string {
  const { minutes } = readingTime(markdownBody)
  const mins = Math.max(1, Math.round(minutes))
  return `${mins} min read`
}
