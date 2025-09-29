// src/components/HeroSection.tsx
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import TopDestinations from "./TopDestinations";
import FeaturedListings from "./FeaturedListings"
import WhyChooseUs from "./WhyChooseUs";
import Newsletter from "./Newsletter";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer"

export default function Hero() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      location,
      checkIn,
      checkOut,
      guests,
    });
    // 🚀 In production, you’ll trigger navigation to /listings with query params
  };

  return (
    <>
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Dark overlay for cozy feel */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight"
          >
            Find Your Perfect <span className="text-amber-400">Stay</span>
          </motion.h1>

          {/* Animated Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base sm:text-lg md:text-xl mb-8 font-light"
          >
            Luxury apartments, cozy spaces, and unforgettable experiences —
            tailored just for you.
          </motion.p>

          {/* Animated Search Bar */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="bg-white rounded-2xl shadow-xl p-4 flex flex-col sm:flex-row gap-4 items-center sm:items-stretch"
          >
            {/* Location */}
            <input
              type="text"
              placeholder="Where are you going?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full"
            />

            {/* Dates */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Guests */}
            <input
              type="number"
              min={1}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full sm:w-24 px-4 py-3 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            {/* Search Button */}
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 transition px-6 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FaSearch /> Search
            </button>
          </motion.form>
        </div>
      </section>
      <TopDestinations />
      <FeaturedListings />
      <WhyChooseUs />
      <Newsletter />
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
    </>
  );
}
