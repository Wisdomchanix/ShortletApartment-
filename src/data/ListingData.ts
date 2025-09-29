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
  // add other listings (4–7) here...
];
