// src/components/FeaturedListings.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Listing {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  rating: number;
}

const listings: Listing[] = [
  {
    id: 1,
    title: "Luxury Waterfront Apartment",
    location: "Lekki, Lagos",
    price: "₦170,000 / night",
    image:
      "https://i.pinimg.com/1200x/ff/c1/93/ffc193f3743e8057fb18545c7437a27e.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Elegant Villa with Pool",
    location: "Abuja",
    price: "₦250,000 / night",
    image:
      "https://i.pinimg.com/736x/96/56/42/96564214cf2b8d76be1e6a512a0cd21d.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Modern City View Apartment",
    location: "Victoria Island, Lagos",
    price: "₦200,000 / night",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Cozy Premium Studio",
    location: "Ikoyi, Lagos",
    price: "₦120,000 / night",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
  },
];

export default function FeaturedListings() {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 text-center md:text-left">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured <span className="text-amber-500">Listings</span>
          </h2>
          <p className="mt-2 text-gray-600">
            Handpicked luxury stays curated just for you
          </p>
        </div>

        {/* Desktop Button */}
        <button
          onClick={() => navigate("/listings")}
          className="hidden md:inline-block bg-amber-500 hover:bg-amber-600 transition px-6 py-3 rounded-xl text-white font-semibold"
        >
          View All
        </button>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {listings.map((listing, index) => (
          <motion.div
            key={listing.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-gray-50 group cursor-pointer hover:shadow-2xl transition"
            onClick={() => navigate(`/listing/${listing.id}`)}
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/80 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                ⭐ {listing.rating}
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {listing.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{listing.location}</p>
              <p className="text-amber-600 font-bold">{listing.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Button (after listings) */}
      <div className="mt-10 text-center md:hidden">
        <button
          onClick={() => navigate("/listings")}
          className="bg-amber-500 hover:bg-amber-600 transition px-6 py-3 rounded-xl text-white font-semibold"
        >
          View All
        </button>
      </div>
    </section>
  );
}
