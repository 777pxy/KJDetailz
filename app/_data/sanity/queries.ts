import { client } from "@/src/sanity/sanity";
import * as types from "@/lib/sanity/sanity.types"
import { cacheTag, cacheLife } from 'next/cache'

const REVIEWS_QUERY = `*[_type == "customer_review" && isVisible] | order(_createdAt desc) { customer_name, body, service_type, star }[0...3]`

const PACKAGETYPES_QUERY = `*[_type == "package" && isVisible] | order(_createdAt desc) { package_name, package_service, extra_services, price }`

const IMAGE_QUERY = `*[_type == "gallary_image" && isVisible] | order(_createdAt desc) { image_name, image }`

export async function getReviews(): Promise<types.Customer_review[]> {
    "use cache"
    cacheTag('sanity')
    cacheLife('halfDay')
    try {
        return client.fetch(REVIEWS_QUERY)
    } catch {
        console.error("getReviews failed")
        return []
    }
}

export async function getServicePackages(): Promise<types.Package[]> {
    "use cache"
    cacheTag('sanity')
    cacheLife('halfDay')

    try {
        return client.fetch(PACKAGETYPES_QUERY)
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
        const galleryImages = client.fetch(IMAGE_QUERY)
        return galleryImages
    } catch {
        console.error("getImagesForGallery failed")
        return []
    }
}
