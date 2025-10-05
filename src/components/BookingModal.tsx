import { useState } from "react"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { X, Copy } from "lucide-react"; // ✅ Added Copy icon
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  price: string; 
  propertyName: string; // ✅ ensure this is passed in
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, price, propertyName }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showPayment, setShowPayment] = useState(false);

  // ✅ Error state for required validation
  const [error, setError] = useState<string | null>(null);

  // ✅ Copy success state
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const pricePerNight = parseInt(price.replace(/[^\d]/g, ""), 10);

  const nights =
    startDate && endDate
      ? Math.max(
          1,
          Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
        )
      : 0;

  const totalPrice = nights * pricePerNight;

  // ✅ Generate Receipt PDF
  const generateReceipt = async () => {
    const receiptElement = document.getElementById("receipt-content");
    if (!receiptElement) return;

    const canvas = await html2canvas(receiptElement);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`BookingReceipt-${propertyName}.pdf`); // ✅ property name included
  };

  // ✅ Open WhatsApp with pre-filled message
  const openWhatsApp = () => {
    const message = `
📌 Booking Confirmation
🏠 Property: ${propertyName} 
📅 Check-in: ${startDate?.toLocaleDateString() || "N/A"}
📅 Check-out: ${endDate?.toLocaleDateString() || "N/A"}
🌙 Nights: ${nights}
👥 Guests: ${adults} Adult(s), ${children} Child(ren)
💰 Total: ₦${totalPrice.toLocaleString()}

I have made the payment. Please confirm my booking.
    `;

    const phoneNumber = "+2347063604975"; // ✅ Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // ✅ Handle confirm booking with validation
  const handleConfirmBooking = () => {
    if (!startDate || !endDate) {
      setError("Please select both check-in and check-out dates.");
      return;
    }
    if (endDate <= startDate) {
      setError("Check-out must be after check-in.");
      return;
    }
    setError(null);
    setShowPayment(true);
  };

  // ✅ Copy account number function
  const ACCOUNT_NUMBER = "1234567890";
  const ACCOUNT_NAME = "Revvona Rentals";
  const BANK_NAME = "Access Bank";

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNT_NUMBER);
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(null), 2500);
    } catch {
      setCopySuccess("Failed to copy");
      setTimeout(() => setCopySuccess(null), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center 
      bg-black/30 backdrop-blur-sm">
      
      <div className="bg-white w-full max-w-lg rounded-t-2xl md:rounded-2xl shadow-lg p-6 relative animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="w-6 h-6" />
        </button>

        {!showPayment ? (
          <>
            <h2 className="text-xl font-bold mb-4">Book {propertyName}</h2> {/* ✅ property name visible */}
            <p className="text-orange-600 font-semibold mb-6">From {price} / night</p>

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
                  placeholderText="Check-in"
                  className="w-full border rounded-lg px-3 py-2"
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate || new Date()}
                  placeholderText="Check-out"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            </div>

            {/* ✅ Show error if missing */}
            {error && <div className="text-red-600 text-sm mb-3">{error}</div>}

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

            {/* Price Summary */}
            {nights > 0 && (
              <div className="bg-gray-100 p-3 rounded-lg mb-4">
                <p className="text-sm text-gray-600">{nights} night(s) × {price} </p>
                <p className="font-bold text-lg text-gray-800">Total: ₦{totalPrice.toLocaleString()}</p>
              </div>
            )}

            {/* Confirm Booking */}
            <button
              onClick={handleConfirmBooking} // ✅ Validation check
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold mt-4"
            >
              Confirm Booking
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4">Payment Instructions</h2>
            
            {/* Receipt Content */}
            <div id="receipt-content" className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-bold text-lg mb-2">{propertyName}</h3> {/* ✅ Property name shown */}
              <p>Check-in: {startDate?.toLocaleDateString() || "N/A"}</p>
              <p>Check-out: {endDate?.toLocaleDateString() || "N/A"}</p>
              <p>Nights: {nights}</p>
              <p>Guests: {adults} Adult(s), {children} Child(ren)</p>
              <hr className="my-2" />
              <p className="font-semibold">Total: ₦{totalPrice.toLocaleString()}</p>
              
              {/* ✅ Bank details with copy button */}
              <div className="flex items-center gap-3 mt-2">
                <div>
                  <p className="text-sm font-semibold">{BANK_NAME}</p>
                  <p className="text-sm font-semibold">{ACCOUNT_NAME}</p>
                  <p className="text-sm tracking-wider font-semibold">{ACCOUNT_NUMBER}</p>
                </div>

                <button
                  onClick={copyAccountNumber}
                  className="ml-auto inline-flex items-center gap-2 px-3 py-1 border rounded bg-white hover:bg-gray-50"
                >
                  <Copy className="w-2 h-2" />
                  <span className="text-sm">{copySuccess ?? "Copy"}</span>
                </button>
              </div>

              <p className="mt-2 text-sm text-gray-600">
                ⚠️ After payment, screenshot this receipt and send it to WhatsApp below:
              </p>
              <p className="font-bold text-green-600">WhatsApp: +234 706 360 4975</p>
            </div>

            {/* Generate Receipt */}
            <button
              onClick={generateReceipt}
              className="w-full bg-amber-400 text-white py-3 rounded-lg font-semibold mb-3"
            >
              Generate Receipt (PDF)
            </button>

            {/* Open WhatsApp */}
            <button
              onClick={openWhatsApp}
              className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold mb-3"
            >
              Send to WhatsApp
            </button>

            <button
              onClick={onClose}
              className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold"
            >
              Done
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
