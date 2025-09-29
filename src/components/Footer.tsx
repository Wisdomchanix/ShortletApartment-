import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0B0B] text-[#F5F5F5] py-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand / About */}
        <div>
          <h3 className="text-2xl font-bold text-[#C5A572] mb-4">99Keys</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Unlock luxury living with curated premium properties designed
            for comfort, elegance, and timeless experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="/about" className="hover:text-[#C5A572]">About Us</a></li>
            <li><a href="/faqs" className="hover:text-[#C5A572]">FAQs</a></li>
            <li><a href="/listings" className="hover:text-[#C5A572]">Listings</a></li>
            <li><a href="/contact" className="hover:text-[#C5A572]">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="/terms" className="hover:text-[#C5A572]">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-[#C5A572]">Privacy Policy</a></li>
            <li><a href="/help" className="hover:text-[#C5A572]">Help Center</a></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-400 text-sm mb-6">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#C5A572]" /> info@99keys.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#C5A572]" /> +234 800 000 0000
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-[#C5A572]" /> Lagos, Nigeria
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 border border-gray-600 rounded-full hover:border-[#C5A572] hover:text-[#C5A572] transition"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 border border-gray-600 rounded-full hover:border-[#C5A572] hover:text-[#C5A572] transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 border border-gray-600 rounded-full hover:border-[#C5A572] hover:text-[#C5A572] transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} 99Keys. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
