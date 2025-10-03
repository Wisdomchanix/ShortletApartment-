// src/pages/ListingsPage.tsx
import { useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { listings } from "../data/ListingData"; 

const ListingsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get query params from Hero search
  const searchParams = new URLSearchParams(location.search);
  const filterLocation = searchParams.get("location")?.toLowerCase().trim() || "";
  const filterRooms = searchParams.get("rooms");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  // Filter listings
  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const matchesLocation = filterLocation
        ? listing.location.toLowerCase().includes(filterLocation)
        : true;

      const matchesRooms = filterRooms
        ? listing.bedrooms >= parseInt(filterRooms, 10)
        : true;

      return matchesLocation && matchesRooms;
    });
  }, [filterLocation, filterRooms, checkIn, checkOut]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12" id="apartments">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Available Listings</h2>

      {/* Filter Banner */}
      {(filterLocation || filterRooms || (checkIn && checkOut)) && (
        <div className="mb-8 p-4 bg-amber-100 border border-amber-300 text-amber-800 rounded-lg text-sm">
          Showing results for:&nbsp;
          {filterLocation && <span className="font-medium">{filterLocation}</span>}
          {filterRooms && (
            <span className="font-medium">, {filterRooms}+ bedrooms</span>
          )}
          {checkIn && checkOut && (
            <span className="font-medium">
              , {new Date(checkIn).toLocaleDateString()} –{" "}
              {new Date(checkOut).toLocaleDateString()}
            </span>
          )}
        </div>
      )}

      {filteredListings.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
              onClick={() => navigate(`/listing/${listing.id}`)}
            >
              {/* ✅ Use the first image from the gallery */}
              <img
                src={listing.images[0]}
                alt={listing.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{listing.title}</h3>
                <p className="text-gray-600">{listing.location}</p>
                <p className="mt-2 text-sm text-gray-500">
                  {listing.bedrooms} {listing.bedrooms > 1 ? "Bedrooms" : "Bedroom"}
                </p>
                <p className="mt-2 font-bold text-orange-600">${listing.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
            alt="No results"
            className="w-32 h-32 mb-6 opacity-80"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            No listings match your search
          </h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your filters or browsing all available apartments.
          </p>
          <button
            onClick={() => navigate("/listings")}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};

export default ListingsPage;
