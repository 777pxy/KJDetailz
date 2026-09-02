# Sanity setup: Premium Services

The website has a new standalone page at `/premium-services` that lists
"premium" packages, separate from the regular packages shown on `/services`.

The frontend (this repo) is fully wired up and already deployed — it currently
shows an empty-state message ("Our premium services are being finalised...")
because the `premium_package` document type does not exist in the Sanity
schema yet. Nothing will appear on `/premium-services` until the steps below
are done in Sanity Studio (Studio is a separate project from this repo, so
these changes have to be made there directly).

## 1. Add the `premium_package` document type

Add a new schema type alongside the existing `package` type, with these
fields:

| Field              | Name               | Type                              | Notes                                                              |
| ------------------ | ------------------ | ---------------------------------- | -------------------------------------------------------------------- |
| Package name        | `package_name`      | `string`                           | Required                                                             |
| Description         | `description`       | `text`                             | Optional. Short persuasive blurb shown under the name on the card.   |
| Included services    | `package_services`   | `array` of `string`                | Same as the existing `package` type — a bullet-point checklist.      |
| Optional add-ons    | `extra_services`     | `array` of references to `extra_service` | Reuses the **existing** `extra_service` type — same pool of add-ons available to regular packages. |
| Price                | `price`             | `number`                           | Required                                                             |
| Visible on site      | `isVisible`          | `boolean`                          | Same show/hide toggle used on `package` and the other content types. |

This mirrors the existing `package` schema exactly, plus one addition
(`description`) to support the more persuasive/marketing-led copy premium
listings need.

Example schema definition (adjust to match your Studio's existing file
conventions — e.g. `schemaTypes/premiumPackage.ts`):

```ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "premium_package",
  title: "Premium Package",
  type: "document",
  fields: [
    defineField({
      name: "package_name",
      title: "Package name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Short persuasive blurb shown on the premium services page.",
    }),
    defineField({
      name: "package_services",
      title: "Included services",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "extra_services",
      title: "Optional add-ons",
      type: "array",
      of: [{ type: "reference", to: [{ type: "extra_service" }] }],
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isVisible",
      title: "Visible on site",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
```

Register the new type in your schema index (e.g. `schemaTypes/index.ts`),
then deploy/publish the Studio.

## 2. Add premium package documents

In Studio, create one or more `Premium Package` documents (name, price,
included services, optional add-ons, and toggle `Visible on site` on). Only
visible documents show up on the site, ordered by price ascending — same
behaviour as the regular packages list.

## 3. Regenerate TypeScript types in this repo

This repo currently has a **hand-written placeholder** for the
`premium_package` type at `lib/sanity/premium-package.types.ts`, because the
schema didn't exist yet when the frontend was built. Once the schema above is
live:

1. Run `sanity typegen generate` (from wherever this project's Sanity config
   lives) to regenerate `lib/sanity/sanity.types.ts` with the real
   `Premium_package` / `Premium_packageWithExtras` types.
2. In `app/_data/sanity/queries.ts`, swap the import of `PremiumPackageWithExtras`
   from `@/lib/sanity/premium-package.types` to the generated equivalent in
   `@/lib/sanity/sanity.types`.
3. Delete `lib/sanity/premium-package.types.ts`.

This is a type-safety cleanup only — the site works correctly before this
step, since the hand-written types match the schema above field-for-field.

## Where this shows up on the site

- **`/premium-services`** — the standalone page listing all visible premium
  packages.
- **Homepage** — a "Premium Collection" banner appears right after the hero,
  before the reviews section, linking to `/premium-services`.
- **`/services`** — a banner near the top links out to `/premium-services`.
  Premium packages are intentionally **not** duplicated into the regular
  `/services` grid, per the client's request to lead with premium pricing
  rather than anchoring on the cheaper packages.
