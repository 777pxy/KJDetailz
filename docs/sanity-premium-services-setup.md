# Sanity setup: Premium Services

The website has a standalone page at `/premium-services` that lists
"premium" packages, separate from the regular packages shown on `/services`.

The `premium_service` document type is live in the Sanity schema (Studio is a
separate project from this repo) and the frontend is fully wired up to it.
The one remaining step is adding content — see below.

## Schema: the `premium_service` document type

Lives alongside the existing `package` type, with these fields:

| Field              | Name               | Type                              | Notes                                                              |
| ------------------ | ------------------ | ---------------------------------- | -------------------------------------------------------------------- |
| Service name        | `service_name`      | `string`                           | Required                                                             |
| Description         | `description`       | `text`                             | Optional. Short persuasive blurb shown under the name on the card.   |
| Included services    | `package_services`   | `array` of `string`                | Same field name as the existing `package` type — a bullet-point checklist. |
| Optional add-ons    | `extra_services`     | `array` of references to `extra_service` | Reuses the **existing** `extra_service` type — same pool of add-ons available to regular packages. |
| Price                | `price`             | `number`                           | Required                                                             |
| Visible on site      | `isVisible`          | `boolean`                          | Same show/hide toggle used on `package` and the other content types. |

This mirrors the existing `package` schema, plus one addition
(`description`) to support the more persuasive/marketing-led copy premium
listings need. `service_name` (not `package_name`) and the document type
name `premium_service` (not `premium_package`) are deliberate — these are
"premium services", not packages, and the naming should read that way
end-to-end (schema, generated types, GROQ queries, component).

## Add premium service documents

In Studio, create one or more `Premium Service` documents (name, price,
included services, optional add-ons, and toggle `Visible on site` on). Only
visible documents show up on the site, ordered by price ascending — same
behaviour as the regular packages list.

## Where this shows up on the site

- **`/premium-services`** — the standalone page listing all visible premium
  services.
- **Homepage** — a "Premium Collection" banner appears right after the hero,
  before the reviews section, linking to `/premium-services`.
- **`/services`** — a banner near the top links out to `/premium-services`.
  Premium services are intentionally **not** duplicated into the regular
  `/services` grid, per the client's request to lead with premium pricing
  rather than anchoring on the cheaper packages.
