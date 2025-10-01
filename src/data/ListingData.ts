// src/data/listingsData.ts
export interface Listing {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  amenities: string[];
  thingsToKnow: string[];
}

export const listings: Listing[] = [
  {
    id: 1,
    title: "Luxury Apartment in Lekki",
    location: "Lekki, Lagos",
    price: "₦80,000/night",
    image: "https://i.pinimg.com/1200x/66/c9/4c/66c94c7de4c8fbe1fb4daef1d872f701.jpg",
    bedrooms: 3,
    bathrooms: 2,
    description: "A spacious luxury apartment with modern finishing, perfect for families and business travelers.",
    amenities: ["Free WiFi", "Fully Equipped Kitchen", "Smart TV", "Coffee Maker"],
    thingsToKnow: ["Check-in after 2 PM", "No smoking", "No pets", "Quiet hours after 10 PM"],
  },
  {
    id: 2,
    title: "Cozy Studio in Victoria Island",
    location: "Victoria Island, Lagos",
    price: "₦60,000/night",
    image: "https://i.pinimg.com/1200x/5a/9c/3a/5a9c3aeb41e4261bbd032cb3280d18bd.jpg",
    bedrooms: 1,
    bathrooms: 1,
    description: "A cozy and modern studio apartment ideal for solo travelers and couples.",
    amenities: ["High-speed WiFi", "Mini Kitchen", "Smart TV"],
    thingsToKnow: ["Check-in after 3 PM", "No loud music", "No smoking"],
  },
  {
    id: 3,
    title: "Beachfront Villa",
    location: "Oniru, Lagos",
    price: "₦150,000/night",
    image: "https://i.pinimg.com/1200x/6a/4c/1a/6a4c1a3a5981f78bc4f8429b3f37049d.jpg",
    bedrooms: 5,
    bathrooms: 4,
    description: "Enjoy breathtaking ocean views in this exclusive beachfront villa.",
    amenities: ["Private Pool", "WiFi", "Chef on Request", "Outdoor Lounge"],
    thingsToKnow: ["Check-in after 2 PM", "Parties allowed", "Security deposit required"],
  },
  {
    id: 4,
    title: "Modern Loft in Ikoyi",
    location: "Ikoyi, Lagos",
    price: "₦120,000/night",
    image: "https://i.pinimg.com/736x/d2/d2/36/d2d2360ddefff84d3ef78fcc4de1f83d.jpg",
    bedrooms: 2,
    bathrooms: 2,
    description:
      "A stylish loft apartment with floor-to-ceiling windows and premium furnishings.",
    amenities: ["WiFi", "Gym Access", "Smart TV", "Washer/Dryer"],
    thingsToKnow: ["Check-in after 1 PM", "No parties", "No pets"],
  },
  {
    id: 5,
    title: "Family Apartment",
    location: "Yaba, Lagos",
    price: "₦45,000/night",
    image: "https://i.pinimg.com/1200x/7f/5b/d7/7f5bd7f99847920948a72f0b896b74bf.jpg",
    bedrooms: 3,
    bathrooms: 2,
    description:
      "A family-friendly apartment located near schools, shopping centers, and public transport.",
    amenities: ["Free WiFi", "Kitchen", "Children’s Play Area", "Parking"],
    thingsToKnow: ["Check-in after 2 PM", "No smoking", "Respect neighbors"],
  },
  {
    id: 6,
    title: "Short-let Penthouse",
    location: "Banana Island, Lagos",
    price: "₦300,000/night",
    image: "https://i.pinimg.com/736x/27/19/f9/2719f9e86cd435781d655628a8c24364.jpg",
    bedrooms: 4,
    bathrooms: 3,
    description:
      "Experience unmatched luxury in this penthouse with panoramic city views.",
    amenities: ["Private Terrace", "Jacuzzi", "WiFi", "Concierge Service"],
    thingsToKnow: [
      "Check-in after 3 PM",
      "Security deposit required",
      "No smoking indoors",
    ],
  },
  {
    id: 7,
    title: "Budget Friendly Flat",
    location: "Surulere, Lagos",
    price: "₦25,000/night",
    image: "https://i.pinimg.com/1200x/86/bb/3b/86bb3bda6173bcdc3ff61534e2dfaa9f.jpg",
    bedrooms: 2,
    bathrooms: 1,
    description:
      "An affordable yet comfortable flat, perfect for short stays and budget travelers.",
    amenities: ["WiFi", "Kitchen", "TV", "Parking"],
    thingsToKnow: [
      "Check-in after 12 PM",
      "No loud music",
      "Respect house rules",
    ],
  },
];
