const CELLS = ['X', 'O', '', 'O', 'X', '', '', 'O', 'X'] as const
const WINNING = new Set([0, 4, 8])

export function BoardIllustration() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-xs">
      <div className="absolute -inset-6 rounded-full bg-primary/10 blur-2xl" />
      <div className="relative grid grid-cols-3 gap-2 rounded-3xl border bg-card p-3 shadow-sm">
        {CELLS.map((cell, i) => (
          <div
            key={i}
            className={`flex aspect-square items-center justify-center rounded-xl font-heading text-4xl font-bold sm:text-5xl ${
              WINNING.has(i)
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted ' + (cell === 'O' ? 'text-accent' : 'text-primary')
            }`}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  )
}
