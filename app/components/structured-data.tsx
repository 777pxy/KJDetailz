import { getReviewStats } from "@/app/_data/sanity/queries";
import { serviceAreas } from "@/lib/seo/service-areas";
import { SITE_URL } from "@/lib/seo/site";

export async function StructuredData() {
  const { count, average } = await getReviewStats();

  const localBusiness: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoWash"],
    name: "KJ Detailz",
    url: SITE_URL,
    image: `${SITE_URL}/KJ_logo_HD.png`,
    telephone: process.env.PHONE_NUMBER,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "32 Birch Ave, Blandford St Mary",
      addressLocality: "Blandford Forum",
      addressRegion: "Dorset",
      postalCode: "DT11 9QD",
      addressCountry: "GB",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.town,
    })),
    sameAs: [process.env.FACEBOOK_LINK, process.env.INSTAGRAM_LINK].filter(
      Boolean,
    ),
  };

  if (count > 0) {
    localBusiness.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: average,
      reviewCount: count,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
