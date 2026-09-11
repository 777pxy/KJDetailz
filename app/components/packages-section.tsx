import { getServicePackages } from "../_data/sanity/queries";
import { Extra_service, PackageWithExtras } from "@/lib/sanity/sanity.types";

export async function PackagesSection() {
  const packages = await getServicePackages();

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {packages.map((pkg: PackageWithExtras) => (
        <article
          key={pkg._id}
          className="flex flex-col border border-border p-8 transition-all duration-300 hover:border-primary/18"
        >
          <div className="mb-4 flex items-start justify-between">
            <h2 className="font-serif text-2xl leading-snug text-foreground">
              {pkg.package_name}
            </h2>
            <span className="ml-4 shrink-0 text-sm font-medium text-primary">
              £{pkg.price}
            </span>
          </div>

          {pkg.package_services && pkg.package_services.length > 0 && (
            <div className="mb-6 flex-1">
              <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-foreground/25">
                Includes
              </p>
              <ul className="space-y-1.5">
                {pkg.package_services.map((service, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-foreground/55"
                  >
                    <span className="mt-0.5 shrink-0 text-xs text-primary">
                      —
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {pkg.extra_services && pkg.extra_services.length > 0 && (
            <div className="mb-6">
              <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-foreground/25">
                Optional Add-ons
              </p>
              <ul className="space-y-2">
                {pkg.extra_services.map((extra: Extra_service) => (
                  <li
                    key={extra._id}
                    className="flex items-center justify-between gap-4 border border-border px-3 py-2 text-sm"
                  >
                    <span className="text-foreground/80">
                      {extra.description}
                    </span>
                    <span className="shrink-0 font-medium text-primary">
                      +£{extra.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a
            href="/contact"
            className="mt-auto flex items-center justify-between border-t border-border pt-4 text-[11px] uppercase tracking-[0.18em] text-primary transition-colors duration-200 hover:text-[#d4b06d]"
          >
            Book this package <span>→</span>
          </a>
        </article>
      ))}
    </div>
  );
}
