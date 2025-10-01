// src/components/HeroSection.tsx
import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaBed } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TopDestinations from "./TopDestinations";
import FeaturedListings from "./FeaturedListings";
import WhyChooseUs from "./WhyChooseUs";
import Newsletter from "./Newsletter";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Scrollup from "./Scrollup";
import Navbar from "./Navbar";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState(1);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [checkIn, checkOut] = dateRange;

  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(
      `/listings?location=${encodeURIComponent(location)}&checkIn=${
        checkIn ? checkIn.toISOString().split("T")[0] : ""
      }&checkOut=${checkOut ? checkOut.toISOString().split("T")[0] : ""}&rooms=${rooms}`
    );
  };

  return (
    <>
      <Navbar />
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        id="home"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight"
          >
            Find Your Perfect <span className="text-amber-400">Stay</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base sm:text-lg md:text-xl mb-8 font-light"
          >
            Luxury apartments, cozy spaces, and unforgettable experiences —
            tailored just for you.
          </motion.p>

          {/* Search Form */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="bg-white rounded-2xl shadow-xl p-4 flex flex-col sm:flex-row gap-4 items-stretch"
          >
            {/* Location */}
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-xl w-full sm:w-56">
              <FaMapMarkerAlt className="text-amber-500" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full text-gray-800 focus:outline-none text-sm sm:text-base"
              />
            </div>

            {/* Date Range Picker */}
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-xl w-full sm:w-56">
              <FaCalendarAlt className="text-amber-500" />
              <DatePicker
                selectsRange
                startDate={checkIn}
                endDate={checkOut}
                onChange={(update) => setDateRange(update)}
                isClearable
                placeholderText="From - To"
                className="w-full text-gray-800 focus:outline-none text-sm sm:text-base"
                dateFormat="MM/dd/yyyy"
              />
            </div>

            {/* Rooms */}
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-xl w-full sm:w-40">
              <FaBed className="text-amber-500" />
              <input
                type="number"
                min={1}
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full text-gray-800 focus:outline-none text-sm sm:text-base"
                placeholder="Rooms"
              />
            </div>

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
      <Scrollup />
    </>
  );
}
