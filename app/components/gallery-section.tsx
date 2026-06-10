import { getImagesForGallery } from '@/app/_data/sanity/queries'
import Image from 'next/image'
import { urlFor } from '@/src/sanity/sanity'

export default async function GallerySection() {
  const images = await getImagesForGallery()

  return (
    <div className="mb-6 grid grid-cols-2 gap-3 md:mb-8 md:grid-cols-3 md:gap-4">
      {images.map((item) => (
        <div
          key={item._id}
          className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-muted"
        >
          {item.image && (
            <Image
            src={urlFor(item.image).width(800).quality(80).url()}
            alt={item.image_name ?? 'Gallery image'}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent opacity-30" />
          <div className="absolute right-2 top-2 size-6 border-r-2 border-t-2 border-transparent transition-all duration-300 group-hover:border-primary md:size-8" />
        </div>
      ))}
    </div>
  )
}