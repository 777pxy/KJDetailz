import { Check, Crown } from "lucide-react";
import { getPremiumServicePackages } from "../_data/sanity/queries";
import { Extra_service } from "@/lib/sanity/sanity.types";
import { PremiumPackageWithExtras } from "@/lib/sanity/premium-package.types";

export async function PremiumPackagesSection() {
  const packages = await getPremiumServicePackages();

  if (packages.length === 0) {
    return (
      <div className="rounded-lg border border-primary/30 bg-card p-8 text-center md:p-12">
        <p className="text-base text-muted-foreground md:text-lg">
          Our premium services are being finalised. Get in touch to discuss a
          bespoke package for your vehicle.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
      {packages.map((pkg: PremiumPackageWithExtras) => (
        <article
          key={pkg._id}
          className="flex flex-col rounded-lg border border-primary/40 bg-card transition-all duration-300 hover:border-primary hover:shadow-[0_0_40px_-15px] hover:shadow-primary/40"
        >
          <div className="border-b border-primary/30 p-6 md:p-8">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <Crown className="size-3.5" aria-hidden="true" />
              Premium
            </div>
            <h2 className="mb-1 font-serif text-2xl font-bold md:text-3xl">
              {pkg.package_name}
            </h2>
            {pkg.description && (
              <p className="mb-3 text-sm text-muted-foreground md:text-base">
                {pkg.description}
              </p>
            )}
            <p className="text-2xl font-bold text-primary md:text-3xl">
              £{pkg.price}
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
            {pkg.package_services && pkg.package_services.length > 0 && (
              <ul className="space-y-2">
                {pkg.package_services.map((service, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm md:text-base"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            )}

            {pkg.extra_services && pkg.extra_services.length > 0 && (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Optional Add-ons
                </p>
                <ul className="space-y-2">
                  {pkg.extra_services.map((extra: Extra_service) => (
                    <li
                      key={extra._id}
                      className="flex items-center justify-between gap-4 rounded-md bg-secondary px-3 py-2 text-sm"
                    >
                      <span className="text-foreground/80">
                        {extra.description}
                      </span>
                      <span className="shrink-0 font-semibold text-primary">
                        +£{extra.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <a
              href="/contact"
              className="mt-auto block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 md:text-base"
            >
              Enquire about this service
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
