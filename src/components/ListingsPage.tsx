// src/pages/ListingsPage.tsx
import { useNavigate } from "react-router-dom";
import { listings } from "../data/ListingData"; // ✅ shared listings data

const ListingsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Available Listings</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
            onClick={() => navigate(`/listing/${listing.id}`)} // ✅ navigates with ID
          >
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{listing.title}</h3>
              <p className="text-gray-600">{listing.location}</p>
              <p className="mt-2 font-bold text-orange-600">{listing.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;
