import { PROJECT_URL } from '@/lib/project'

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          Orbit &amp; Cross — made by <span className="font-medium text-foreground">Shivam</span>
        </p>
        <a
          href={PROJECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-primary hover:underline"
        >
          shivhham.github.io/orbit-and-cross
        </a>
      </div>
    </footer>
  )
}
