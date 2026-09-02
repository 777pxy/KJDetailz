/**
 * Hand-written placeholder types for the `premium_package` Sanity document type.
 *
 * This type does not exist in the Sanity schema yet — it must be added in
 * Sanity Studio first (see docs/sanity-premium-services-setup.md). Once added
 * and `sanity typegen generate` has been re-run, the generated equivalents
 * will appear in `sanity.types.ts` and this file can be deleted in favour of
 * those, updating the import in `app/_data/sanity/queries.ts` accordingly.
 */
import type { Extra_service, Extra_serviceReference } from "./sanity.types";

export type PremiumPackage = {
  _id: string;
  _type: "premium_package";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  package_name?: string;
  description?: string;
  package_services?: Array<string>;
  extra_services?: Array<
    {
      _key: string;
    } & Extra_serviceReference
  >;
  price?: number;
  isVisible?: boolean;
};

export type PremiumPackageWithExtras = Omit<PremiumPackage, "extra_services"> & {
  extra_services: Extra_service[];
};
