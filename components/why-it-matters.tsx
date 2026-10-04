import { ArrowUpRight } from 'lucide-react'
import { PROJECT_URL } from '@/lib/project'

export function WhyItMatters() {
  return (
    <section id="why" aria-labelledby="why-heading" className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <div className="flex flex-col gap-8 rounded-3xl bg-primary p-8 text-primary-foreground md:flex-row md:items-end md:justify-between md:p-12">
        <div className="flex max-w-xl flex-col gap-4">
          <h2 id="why-heading" className="font-heading text-3xl font-bold text-balance">
            Why it matters
          </h2>
          <p className="text-lg leading-relaxed text-pretty opacity-90">
            Orbit &amp; Cross lets two people play together remotely with no account or setup. Just
            share a link and start a game.
          </p>
        </div>
        <a
          href={PROJECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-fit shrink-0 items-center gap-2 rounded-xl bg-primary-foreground px-6 font-medium text-primary transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
        >
          See it live
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </section>
  )
}
