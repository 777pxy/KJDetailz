import { getImagesForGallery } from "@/app/_data/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/src/sanity/sanity";

export default async function GallerySection() {
  const images = await getImagesForGallery();

  return (
    <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
      {images.map((item) => (
        <div
          key={item._id}
          className="group relative overflow-hidden"
          style={{ aspectRatio: "4/3" }}
        >
          {item.image && (
            <Image
              src={urlFor(item.image)
                .width(600)
                .height(450)
                .quality(80)
                .format("webp")
                .url()}
              alt={item.image_name ?? "KJ Detailz valet and detailing work"}
              fill
              sizes="(max-width: 768px) 50vw, 330px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-background/0 transition-all duration-500 group-hover:bg-background/30" />
          {item.image_name ? (
            <div className="absolute bottom-0 left-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="bg-background/85 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-primary">
                {item.image_name}
              </span>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
