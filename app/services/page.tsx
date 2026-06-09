import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Premium valeting and detailing services from KJ Detailz.",
};

const services = [
  {
    name: "Basic Valet",
    description:
      "A comprehensive exterior and interior clean to refresh your vehicle. Includes hand wash, wheel cleaning, interior vacuum, and dashboard wipe-down. Perfect for regular maintenance.",
  },
  {
    name: "Deep Clean Interior Valet",
    description:
      "Intensive interior detailing including full upholstery shampooing, leather conditioning, deep carpet cleaning, and complete dashboard and trim restoration. Removes stubborn stains and odors.",
  },
  {
    name: "Full Valet",
    description:
      "The complete package combining our exterior and interior services. Your vehicle receives meticulous attention inside and out, leaving it in showroom condition.",
  },
  {
    name: "Exterior Ceramic Coating",
    description:
      "Professional-grade ceramic protection providing long-lasting shine and protection against the elements. Creates a hydrophobic layer that repels water, dirt, and contaminants for up to 2 years.",
  },
  {
    name: "Paint Enhancement",
    description:
      "Multi-stage paint correction to remove swirl marks, light scratches, and oxidation. Machine polishing restores depth and clarity to your paintwork, followed by protective sealant application.",
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen px-4 py-12 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-12 text-center md:mb-20">
          <h1 className="mb-4 font-serif text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Premium valeting. Honest pricing.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:mb-16 md:gap-8">
          {services.map((service) => (
            <article
              key={service.name}
              className="rounded-lg border-t-2 border-primary bg-card p-6 transition-all duration-300 hover:bg-card/80 md:p-8"
            >
              <h2 className="mb-3 font-serif text-xl font-bold md:mb-4 md:text-2xl">
                {service.name}
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-foreground/90 md:mb-6 md:text-base">
                {service.description}
              </p>
              <a
                href="tel:07123456789"
                className="text-sm font-medium text-primary transition-all hover:underline md:text-base"
              >
                Call to book
              </a>
            </article>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-secondary p-8 text-center md:p-12">
          <h2 className="mb-4 font-serif text-2xl font-bold md:mb-6 md:text-3xl">
            Ready to book?
          </h2>
          <p className="mb-6 text-base text-muted-foreground md:mb-8 md:text-lg">
            Call us today to discuss your requirements and schedule your
            appointment.
          </p>
          <a
            href="tel:07123456789"
            className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 md:px-8 md:py-4 md:text-base"
          >
            07123 456 789
          </a>
        </div>
      </div>
    </section>
  );
}
