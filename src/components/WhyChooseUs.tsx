import React from "react";
import { ShieldCheck, Diamond, Building2, Clock } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Trusted & Secure",
      description:
        "We prioritize your safety with verified listings and secure transactions you can rely on.",
      bg: "bg-gradient-to-tr from-gray-800 to-amber-400",
    },
    {
      icon: <Diamond className="w-8 h-8 text-white" />,
      title: "Luxury Experience",
      description:
        "Handpicked premium properties that combine comfort, elegance, and timeless design.",
      bg: "bg-gradient-to-tr from-amber-400 to-gray-800",
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Prime Locations",
      description:
        "All our properties are located in prestigious neighborhoods, close to essential amenities.",
      bg: "bg-gradient-to-tr from-gray-800 to-amber-400",
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "24/7 Support",
      description:
        "Our dedicated team is available anytime to provide you with seamless assistance.",
      bg: "bg-gradient-to-tr from-amber-400 to-gray-800",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Why Choose <span className="text-amber-400">Us</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover the unique value we bring to make your real estate journey
          stress-free, secure, and luxurious.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black/20 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
