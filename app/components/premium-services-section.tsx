import Image from "next/image";
import { getImagesForGallery, getPremiumServices } from "../_data/sanity/queries";
import {
  Extra_service,
  Premium_serviceWithExtras,
} from "@/lib/sanity/sanity.types";
import { urlFor } from "@/src/sanity/sanity";

export async function PremiumServicesSection() {
  const [services, galleryImages] = await Promise.all([
    getPremiumServices(),
    getImagesForGallery(),
  ]);

  if (services.length === 0) {
    return (
      <div className="border border-primary/30 p-8 text-center md:p-12">
        <p className="text-base text-foreground/50 md:text-lg">
          Our premium services are being finalised. Get in touch to discuss a
          bespoke package for your vehicle.
        </p>
      </div>
    );
  }

  return (
    <div className="border-t border-border">
      {services.map((service: Premium_serviceWithExtras, i) => {
        const image =
          galleryImages.length > 0
            ? galleryImages[i % galleryImages.length]
            : undefined;

        return (
          <div
            key={service._id}
            className="grid grid-cols-1 border-b border-border lg:grid-cols-2"
          >
            {image?.image ? (
              <div
                className={`relative overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}
                style={{ minHeight: 360 }}
              >
                <Image
                  src={urlFor(image.image).width(900).height(700).quality(80).format("webp").url()}
                  alt={image.image_name ?? service.service_name ?? "Premium detailing service"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/15" />
              </div>
            ) : null}

            <div
              className={`flex flex-col justify-center p-10 lg:p-16 ${
                image?.image && i % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <div className="mb-6 h-px w-8 bg-primary" />
              <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-primary">
                Premium
              </p>
              <h2 className="mb-3 font-serif text-3xl leading-snug text-foreground md:text-4xl">
                {service.service_name}
              </h2>
              {service.description && (
                <p className="mb-6 text-sm leading-relaxed text-foreground/55">
                  {service.description}
                </p>
              )}

              {service.package_services && service.package_services.length > 0 && (
                <ul className="mb-6 space-y-1.5">
                  {service.package_services.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-foreground/55"
                    >
                      <span className="mt-0.5 shrink-0 text-xs text-primary">
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {service.extra_services && service.extra_services.length > 0 && (
                <ul className="mb-6 space-y-2">
                  {service.extra_services.map((extra: Extra_service) => (
                    <li
                      key={extra._id}
                      className="flex items-center justify-between gap-4 border border-border px-3 py-2 text-sm"
                    >
                      <span className="text-foreground/80">{extra.description}</span>
                      <span className="shrink-0 font-medium text-primary">
                        +£{extra.price}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">
                  £{service.price}
                </span>
                <a
                  href="/contact"
                  className="border border-primary/35 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  Enquire
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
