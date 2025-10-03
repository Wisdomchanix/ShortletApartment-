// src/components/TopDestinations.tsx
import { motion } from "framer-motion";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

interface Destination {
  name: string;
  image: string;
}

const destinations: Destination[] = [
  {
    name: "Lekki",
    image:
      "https://i.pinimg.com/736x/6a/57/bf/6a57bf127c5b3660ee579a85d751f10d.jpg",
  },
  {
    name: "Victoria Island",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Abuja",
    image:
      "https://i.pinimg.com/1200x/e9/e4/a1/e9e4a1b65b9749cbb2ba96bb198f8e7a.jpg",
  },
  {
    name: "Ikoyi",
    image:
      "https://i.pinimg.com/1200x/a7/86/dc/a786dcacd4cc6cd21fdf27ba90599ce1.jpg",
  },
];

export default function TopDestinations() {

   useEffect(() => {
      ScrollReveal().reveal(".destinations", {
        duration: 1500,
        distance: "60px",
        origin: "bottom",
        easing: "ease-in-out",
        reset: true,
        interval: 150,
      });
    }, []);
  
  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-50 section destinations">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Top <span className="text-amber-500">Destinations</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Explore our most popular luxury stays
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((dest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            {/* Destination image */}
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
            {/* Name */}
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
              {dest.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
