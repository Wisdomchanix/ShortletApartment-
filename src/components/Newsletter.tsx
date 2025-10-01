import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email.", {
        style: {
          background: "#fff0f0",
          color: "#b91c1c",
          border: "1px solid #fecaca",
          borderRadius: "12px",
          padding: "12px 16px",
          fontWeight: "500",
        },
        iconTheme: {
          primary: "#b91c1c",
          secondary: "#fff",
        },
      });
      return;
    }

    // Simulate success
    toast.success(`Subscribed successfully with: ${email}`, {
      style: {
        background: "#164A41",
        color: "#ffffff",
        borderRadius: "12px",
        padding: "12px 16px",
        fontWeight: "500",
        boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
      },
      iconTheme: {
        primary: "#F1824A",
        secondary: "#fff",
      },
    });

    setEmail("");
  };

  return (
    <section className="w-full  bg-white py-16 px-6 md:px-12" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-800 mb-8">
          Subscribe to our newsletter and never miss exclusive property updates,
          market insights, and luxury real estate tips.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F1824A] outline-none"
          />
          <button
            type="submit"
            className="bg-[#F1824A] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-[#d66f32] transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Toaster for Notifications */}
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default Newsletter;
