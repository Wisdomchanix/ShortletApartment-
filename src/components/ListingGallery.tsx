// src/components/ListingGallery.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface ListingGalleryProps {
  images: string[];
}

export default function ListingGallery({ images }: ListingGalleryProps) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={10}
      slidesPerView={1}
      className="w-full h-56"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={img}
            alt={`Gallery image ${idx + 1}`}
            className="w-full h-56 object-cover rounded-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
