import { Check } from "lucide-react";
import { getServicePackages } from "../_data/sanity/queries";
import { Extra_service, PackageWithExtras } from "@/lib/sanity/sanity.types";

export async function PackagesSection() {
  const packages = await getServicePackages();
  let count = 0;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
      {packages.map((pkg: PackageWithExtras) => (
        <article
          key={pkg._id}
          className={`flex flex-col rounded-lg border border-border transition-all duration-300 hover:border-primary/40 hover:bg-card/80`}
        >
          <div className="border-b border-border p-6 md:p-8">
            <h2 className="mb-1 font-serif text-xl font-bold md:text-2xl">
              {pkg.package_name}
            </h2>
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
              className="mt-auto block rounded-lg border border-primary px-4 py-3 text-center text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground md:text-base"
            >
              Book this package
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
