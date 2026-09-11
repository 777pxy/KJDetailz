import { getReviews, getReviewStats } from "@/app/_data/sanity/queries";
import { Star } from "lucide-react";

export function getInitials(name: string | undefined): string {
  if (name == undefined) {
    return "JD";
  }

  return name
    .split(" ")
    .map((w) => w[0].toUpperCase())
    .join("");
}

export default async function ReviewsSection() {
  const [testimonials, stats] = await Promise.all([
    getReviews(),
    getReviewStats(),
  ]);

  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.32em] text-primary">
              Client Reviews
            </p>
            <h2 className="font-serif text-4xl text-foreground md:text-5xl">
              What our clients say.
            </h2>
          </div>
          {stats.count > 0 ? (
            <div className="hidden text-right md:block">
              <div className="font-serif text-5xl leading-none text-primary">
                {stats.average.toFixed(1)}
              </div>
              <p className="mt-1.5 text-xs tracking-wide text-foreground/35">
                Average rating
              </p>
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.customer_name}
              className="border border-border p-7 transition-colors duration-300 hover:border-primary/18"
            >
              <div className="mb-4 flex gap-0.5 text-primary">
                {Array.from({ length: Number(testimonial.stars ?? 0) }).map(
                  (_, index) => (
                    <Star
                      key={index}
                      className="size-[11px] fill-primary text-primary"
                      aria-hidden="true"
                    />
                  ),
                )}
              </div>
              <p className="mb-5 text-sm leading-relaxed text-foreground/75">
                &ldquo;{testimonial.body}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm text-foreground">
                  {testimonial.customer_name}
                </p>
                <p className="mt-0.5 text-xs text-foreground/35">
                  {testimonial.service_type}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
