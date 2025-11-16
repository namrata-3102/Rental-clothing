
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

function BookingPage() {
  const [bookingData, setBookingData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("bookingData");
    if (savedData) {
      setBookingData(JSON.parse(savedData));
    }
  }, []);

 
  if (!bookingData) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white shadow-xl rounded-xl p-8 text-center w-full max-w-md">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">
              ⚠️ No Booking Found!
            </h2>
            <p className="text-gray-600 mb-6">
              You have not made any booking yet. Please make a booking first.
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition duration-300 font-medium shadow-md"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

 
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-6">
            Booking Confirmed 🎉
          </h2>

          
          <div className="grid grid-cols-1 gap-3 mb-4">
            <p className="text-gray-700">
              <strong>Clothing:</strong> {bookingData.clothingName}
            </p>
            <p className="text-gray-700">
              <strong>Date:</strong> {bookingData.bookingDate}
            </p>
            <p className="text-gray-700">
              <strong>Time:</strong> {bookingData.bookingTime}
            </p>
            <p className="text-gray-700">
              <strong>Duration:</strong> {bookingData.bookingDuration} hours
            </p>
            
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800 border-b pb-2">
            User Details
          </h3>
          <div className="grid grid-cols-1 gap-2 text-gray-700">
            <p><strong>Name:</strong> {bookingData.userName}</p>
            <p><strong>Contact:</strong> {bookingData.userContact}</p>
            <p><strong>Email:</strong> {bookingData.userEmail}</p>
            <p><strong>Address:</strong> {bookingData.userAddress}</p>
            <p><strong>ID Type:</strong> {bookingData.userIdType}</p>
            <p><strong>ID Number:</strong> {bookingData.userIdNumber}</p>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate("/")}
              className="bg-slate-700 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-slate-800 transition duration-300 font-medium shadow-md"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
