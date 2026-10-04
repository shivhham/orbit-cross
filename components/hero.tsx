import { ArrowUpRight } from 'lucide-react'
import { BoardIllustration } from '@/components/board-illustration'
import { PROJECT_URL } from '@/lib/project'

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
      <div className="flex flex-col gap-6">
        <p className="w-fit rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
          Two-player online tic-tac-toe
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl">
          Orbit &amp; Cross
        </h1>
        <p className="max-w-prose text-lg leading-relaxed text-muted-foreground text-pretty">
          A lightweight tic-tac-toe game for two people on separate devices. Create a room, share
          an invite link, and play together remotely with no account or setup.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Open the game
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex h-12 items-center rounded-xl border bg-card px-6 font-medium transition-colors hover:bg-secondary"
          >
            How it works
          </a>
        </div>
      </div>
      <BoardIllustration />
    </section>
  )
}
