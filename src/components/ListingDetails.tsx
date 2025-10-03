// src/pages/ListingDetails.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { listings } from "../data/ListingData";
import { Bed, Bath, DollarSign, Wifi, Utensils, Tv, Coffee, Info, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "react-datepicker/dist/react-datepicker.css";
import BookingModal from "./BookingModal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ListingDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const listingId = Number(id);
  const currentListing = listings.find((l) => l.id === listingId);

  const recommendations = listings.filter((l) => l.id !== listingId).slice(0, 3);

  // 🔥 Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

    // 🔥 Booking Modal
  const [showBooking, setShowBooking] = useState(false);

  if (!currentListing) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-red-600">Listing not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* Image Gallery */}
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="rounded-2xl shadow-lg"
        >
          {currentListing.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`${currentListing.title} - ${idx + 1}`}
                className="w-full h-96 object-cover rounded-2xl cursor-pointer"
                onClick={() => {
                  setLightboxOpen(true);
                  setStartIndex(idx);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <h1 className="text-3xl font-bold mt-6">{currentListing.title}</h1>
        <p className="text-gray-600 mt-2">{currentListing.location}</p>
        <p className="text-orange-600 font-bold text-xl mt-4">{currentListing.price}</p>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
          <Bed className="text-emerald-600 w-6 h-6" />
          <span>{currentListing.bedrooms} Bedrooms</span>
        </div>
        <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
          <Bath className="text-emerald-600 w-6 h-6" />
          <span>{currentListing.bathrooms} Bathrooms</span>
        </div>
        <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
          <DollarSign className="text-emerald-600 w-6 h-6" />
          <span>{currentListing.price}</span>
        </div>
        <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
          <Info className="text-emerald-600 w-6 h-6" />
          <span>{currentListing.location}</span>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded-2xl shadow space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
        <p className="text-gray-600">{currentListing.description}</p>
      </div>

      {/* Amenities */}
      <div className="bg-white p-6 rounded-2xl shadow space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">Amenities</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentListing.amenities.map((amenity, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-gray-700 bg-gray-50 p-3 rounded-xl"
            >
              {amenity.includes("WiFi") && <Wifi className="text-emerald-600 w-5 h-5" />}
              {amenity.includes("Kitchen") && <Utensils className="text-emerald-600 w-5 h-5" />}
              {amenity.includes("TV") && <Tv className="text-emerald-600 w-5 h-5" />}
              {amenity.includes("Coffee") && <Coffee className="text-emerald-600 w-5 h-5" />}
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Things to Know */}
      <div className="bg-white p-6 rounded-2xl shadow space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">Things to Know</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          {currentListing.thingsToKnow.map((thing, index) => (
            <li key={index}>{thing}</li>
          ))}
        </ul>
      </div>

      {/* Recommendations */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
              onClick={() => navigate(`/listing/${rec.id}`)}
            >
              <img src={rec.images[0]} alt={rec.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{rec.title}</h3>
                <p className="text-gray-600">{rec.location}</p>
                <p className="mt-2 font-bold text-orange-600">{rec.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-5xl">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              initialSlide={startIndex}
            >
              {currentListing.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Preview ${idx + 1}`}
                    className="w-full h-[80vh] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

       <button
        onClick={() => setShowBooking(true)}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-lg z-50"
      >
        Book Now
      </button>

      {/* Booking Modal */}
      <BookingModal
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
        price={currentListing.price}
      />
      
    </div>
  );
};

export default ListingDetails;
