import { ArrowUpRight } from 'lucide-react'
import { PROJECT_URL } from '@/lib/project'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="flex items-center gap-2 font-heading text-lg font-semibold">
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground"
          >
            X
          </span>
          Orbit &amp; Cross
        </a>
        <nav aria-label="Main" className="flex items-center gap-5 text-sm">
          <a href="#how-it-works" className="hidden text-muted-foreground hover:text-foreground sm:inline">
            How it works
          </a>
          <a href="#why" className="hidden text-muted-foreground hover:text-foreground sm:inline">
            Why it matters
          </a>
          <a
            href={PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Play
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
