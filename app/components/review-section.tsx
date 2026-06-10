// app/_components/ReviewsSection.tsx
import { getReviews } from '@/app/_data/sanity/queries'
import { Star } from 'lucide-react'

function getInitials(name: string | undefined): string {
  if (name == undefined) {
    return "JD"
  }

  return name.split(' ').map(w => w[0].toUpperCase()).join('')
}

export default async function ReviewsSection() {
  const testimonials = await getReviews()

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
      {testimonials.map((testimonial) => (
        <article
          key={testimonial.customer_name}
          className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 md:p-8"
        >
          <div className="mb-4 flex gap-1">
            {Array.from({ length: testimonial.stars ?? 0 }).map((_, index) => (
              <Star
                key={index}
                className="size-4 fill-primary text-primary md:size-5"
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mb-4 text-sm leading-relaxed text-foreground md:mb-6 md:text-base">
            &ldquo;{testimonial.body}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-xs font-semibold md:size-12 md:text-sm">
              {getInitials(testimonial.customer_name ?? '')}
            </div>
            <div className="text-xs text-muted-foreground md:text-sm">
              {testimonial.customer_name}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}