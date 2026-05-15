import * as Dialog from "@radix-ui/react-dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { useCallback, useEffect, useRef, useState } from "react"

type PagefindSubResult = {
  url: string
  excerpt: string
  meta?: { title?: string }
}

type PagefindResult = {
  id: string
  data: () => Promise<{
    url: string
    excerpt: string
    meta: { title?: string; image?: string }
    filters?: Record<string, string[]>
    sub_results?: PagefindSubResult[]
  }>
}

type Pagefind = {
  search: (query: string, options?: { filters?: Record<string, string> }) => Promise<{
    results: PagefindResult[]
  }>
  options?: (opts: Record<string, unknown>) => Promise<void>
}

type Hit = {
  url: string
  title: string
  excerpt: string
  type: string
}

const filterChoices = [
  { value: "", label: "All" },
  { value: "writing", label: "Writing" },
  { value: "garden", label: "Garden" },
]

export default function CmdK() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [hits, setHits] = useState<Hit[]>([])
  const [typeFilter, setTypeFilter] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const pagefindRef = useRef<Pagefind | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const loadPagefind = useCallback(async () => {
    if (pagefindRef.current) return pagefindRef.current
    try {
      const url = `${window.location.origin}/pagefind/pagefind.js`
      const mod = (await import(/* @vite-ignore */ url)) as unknown as Pagefind
      pagefindRef.current = mod
      return mod
    } catch {
      return null
    }
  }, [])

  useEffect(() => {
    if (!open) return
    void loadPagefind()
    const t = setTimeout(() => inputRef.current?.focus(), 50)
    return () => clearTimeout(t)
  }, [open, loadPagefind])

  useEffect(() => {
    if (!open) return
    let cancelled = false
    const run = async () => {
      const pf = await loadPagefind()
      if (!pf) {
        setHits([])
        return
      }
      if (!query.trim()) {
        setHits([])
        return
      }
      setLoading(true)
      const res = await pf.search(query, typeFilter ? { filters: { type: typeFilter } } : undefined)
      const top = await Promise.all(res.results.slice(0, 10).map((r) => r.data()))
      if (cancelled) return
      setHits(
        top.map((d) => ({
          url: d.url,
          title: d.meta?.title ?? d.url,
          excerpt: d.excerpt,
          type: d.filters?.type?.[0] ?? "page",
        })),
      )
      setLoading(false)
    }
    const timer = setTimeout(run, 120)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [query, typeFilter, open, loadPagefind])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="cmdk-trigger" aria-label="Search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="cmdk-trigger__label">Search</span>
          <kbd className="cmdk-kbd">⌘K</kbd>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="cmdk-overlay" />
        <Dialog.Content className="cmdk-content">
          <VisuallyHidden>
            <Dialog.Title>Search</Dialog.Title>
            <Dialog.Description>Search across writing and the garden.</Dialog.Description>
          </VisuallyHidden>
          <div className="cmdk-input-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              className="cmdk-input"
              placeholder="Search writing and garden..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <kbd className="cmdk-kbd cmdk-kbd--inline">ESC</kbd>
          </div>
          <div className="cmdk-filters">
            {filterChoices.map((c) => (
              <button
                key={c.value}
                type="button"
                className={`cmdk-filter ${typeFilter === c.value ? "is-active" : ""}`}
                onClick={() => setTypeFilter(c.value)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="cmdk-results">
            {loading ? <p className="cmdk-empty">Searching...</p> : null}
            {!loading && hits.length === 0 && query ? (
              <p className="cmdk-empty">No results for "{query}".</p>
            ) : null}
            {!loading && !query ? (
              <p className="cmdk-empty">Type to search. Try "career" or "engineering".</p>
            ) : null}
            <ul>
              {hits.map((h) => (
                <li key={h.url}>
                  <a href={h.url} onClick={() => setOpen(false)}>
                    <span className="cmdk-type">{h.type}</span>
                    <span className="cmdk-title">{h.title}</span>
                    <span className="cmdk-excerpt" dangerouslySetInnerHTML={{ __html: h.excerpt }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
      <style>{styles}</style>
    </Dialog.Root>
  )
}

const FONT_BODY = "'Inter Variable', system-ui, -apple-system, sans-serif"
const FONT_MONO = "'JetBrains Mono', ui-monospace, monospace"

const styles = `
.cmdk-trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #A6A6A6;
  padding: 7px 10px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  transition: border-color 200ms ease, color 200ms ease;
  font-family: ${FONT_BODY};
}
.cmdk-trigger:hover {
  color: #EDEDED;
  border-color: rgba(255, 255, 255, 0.14);
}
.cmdk-trigger__label {
  margin-right: 4px;
}
.cmdk-kbd {
  font-family: ${FONT_MONO};
  font-size: 11px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 3px;
  padding: 1px 5px;
  color: #A6A6A6;
}
@media (max-width: 720px) {
  .cmdk-trigger__label, .cmdk-trigger .cmdk-kbd { display: none; }
}

.cmdk-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 100;
}
.cmdk-content {
  position: fixed;
  top: 12vh;
  left: 50%;
  transform: translateX(-50%);
  width: min(640px, calc(100% - 32px));
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  z-index: 101;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  font-family: ${FONT_BODY};
  color: #EDEDED;
}
.cmdk-input-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: #A6A6A6;
}
.cmdk-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #EDEDED;
  font-size: 16px;
  font-family: ${FONT_BODY};
}
.cmdk-input::placeholder {
  color: #6B6B6B;
}
.cmdk-kbd--inline {
  margin-left: auto;
}
.cmdk-filters {
  display: flex;
  gap: 6px;
  padding: 10px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.cmdk-filter {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #A6A6A6;
  font-size: 13px;
  padding: 5px 12px;
  border-radius: 999px;
  cursor: pointer;
  font-family: ${FONT_BODY};
}
.cmdk-filter.is-active {
  border-color: #00D59F;
  color: #00D59F;
}
.cmdk-results {
  overflow-y: auto;
  padding: 8px 8px 14px;
}
.cmdk-results ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.cmdk-results li a {
  display: grid;
  grid-template-columns: 76px 1fr;
  grid-template-rows: auto auto;
  gap: 4px 14px;
  padding: 14px;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
}
.cmdk-results li a:hover {
  background: rgba(255, 255, 255, 0.04);
}
.cmdk-type {
  font-family: ${FONT_MONO};
  font-size: 11px;
  color: #6B6B6B;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  grid-column: 1;
  grid-row: 1 / span 2;
  align-self: center;
}
.cmdk-title {
  color: #EDEDED;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
}
.cmdk-excerpt {
  color: #A6A6A6;
  font-size: 14px;
  line-height: 1.55;
}
.cmdk-excerpt :global(mark) {
  background: transparent;
  color: #00D59F;
  font-weight: 500;
}
.cmdk-empty {
  color: #6B6B6B;
  font-size: 14px;
  padding: 20px;
  margin: 0;
}
`
