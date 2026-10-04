import { Link2, Smartphone, Trophy } from 'lucide-react'

const STEPS = [
  {
    icon: Link2,
    title: 'Create a room',
    body: 'One player creates a room and shares the invite link.',
  },
  {
    icon: Smartphone,
    title: 'Join from another device',
    body: 'The other player opens the link and joins from a separate device.',
  },
  {
    icon: Trophy,
    title: 'Make a line of three',
    body: 'The host plays X, the guest plays O. The first to make a line of three wins.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="border-y bg-card">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <h2 id="how-heading" className="font-heading text-3xl font-bold text-balance">
          How it works
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-4 rounded-2xl border bg-background p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-heading text-sm font-semibold text-muted-foreground">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 font-medium text-secondary-foreground">
            <span className="font-heading font-bold text-primary">X</span> Host
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 font-medium text-secondary-foreground">
            <span className="font-heading font-bold text-accent">O</span> Guest
          </span>
        </div>
      </div>
    </section>
  )
}
