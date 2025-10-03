import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  price: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, price }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center 
      bg-black/30 backdrop-blur-sm"> {/* ✅ blur background */}
      
      <div className="bg-white w-full max-w-lg rounded-t-2xl md:rounded-2xl shadow-lg p-6 relative animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-bold mb-4">Book This Property</h2>
        <p className="text-orange-600 font-semibold mb-6">From {price}</p>

        {/* Dates */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Dates
          </label>
          <div className="flex gap-3">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              className="w-full border rounded-lg px-3 py-2"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate || new Date()}
              placeholderText="End Date"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Guests
          </label>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span>Adults</span>
              <button
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="px-3 py-1 border rounded"
              >
                -
              </button>
              <span>{adults}</span>
              <button
                onClick={() => setAdults(adults + 1)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span>Children</span>
              <button
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="px-3 py-1 border rounded"
              >
                -
              </button>
              <span>{children}</span>
              <button
                onClick={() => setChildren(children + 1)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Book Now */}
        <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold mt-4">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
