import { client } from "@/src/sanity/sanity";
import * as types from "@/lib/sanity/sanity.types"
import type { Premium_serviceWithExtras } from "@/lib/sanity/sanity.types"
import { cacheTag, cacheLife } from 'next/cache'

const REVIEWS_QUERY = `*[_type == "customer_review" && isVisible] | order(_createdAt desc) { customer_name, body, service_type, stars }[0...3]`

const PACKAGETYPES_QUERY = `*[_type == "package" && isVisible] | order(price asc) {
  _id,
  package_name,
  package_services,
  "extra_services": extra_services[]-> | order(price asc) { _id, description, price },
  price
}`
const IMAGE_QUERY = `*[_type == "gallary_image" && isVisible] | order(_createdAt desc) { _id, image_name, image }`

const PREMIUM_SERVICETYPES_QUERY = `*[_type == "premium_service" && isVisible] | order(price asc) {
  _id,
  service_name,
  description,
  package_services,
  "extra_services": extra_services[]-> | order(price asc) { _id, description, price },
  price
}`

export async function getReviews(): Promise<types.Customer_review[]> {
    "use cache"
    cacheTag('sanity')
    cacheLife('halfDay')
    try {
        return await client.fetch(REVIEWS_QUERY)
    } catch {
        console.error("getReviews failed")
        return []
    }
}

export async function getServicePackages(): Promise<types.PackageWithExtras[]> {
    "use cache"
    cacheTag('sanity')
    cacheLife('halfDay')

    try {
        return await client.fetch(PACKAGETYPES_QUERY)
    } catch {
        console.error("getServicePackages failed")
        return []
    }
}

export async function getImagesForGallery(): Promise<types.Gallary_image[]> {
    "use cache"
    cacheTag('sanity')
    cacheLife('halfDay')

    try {
        const galleryImages = await client.fetch(IMAGE_QUERY)
        return galleryImages
    } catch {
        console.error("getImagesForGallery failed")
        return []
    }
}

export async function getPremiumServices(): Promise<Premium_serviceWithExtras[]> {
    "use cache"
    cacheTag('sanity')
    cacheLife('halfDay')

    try {
        return await client.fetch(PREMIUM_SERVICETYPES_QUERY)
    } catch {
        console.error("getPremiumServices failed")
        return []
    }
}
