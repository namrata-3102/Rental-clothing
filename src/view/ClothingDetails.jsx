import React, { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { CLOTHING_CONFIG } from "../configs/clothing";
import Heading from "../components/heading";
import CategoryBatch from "../components/CategoryBatch";
import InputBox from "../components/InputBox";

function ClothingDetails() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  const clothing = CLOTHING_CONFIG.find((item) => item.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [BookingDetails, setBookingDetails] = useState({
    clothingId: id,
    bookingDate: "",
    bookingTime: "",
    bookingDuration: "",
    userName: "",
    userContact: "",
    userEmail: "",
    userAddress: "",
    userIdType: "",
    userIdNumber: "",
    totalAmount: 0,
  });


  const rentalPrice = clothing?.rentalPrice || 0;
  const totalAmount = Number(BookingDetails.bookingDuration || 0) * rentalPrice;

  
  const handleSubmit = () => {
    const bookingData = {
      ...BookingDetails,
      totalAmount,
      clothingName: clothing.name,
    };

    
    localStorage.setItem("bookingData", JSON.stringify(bookingData));

    
    navigate("/book-now");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Heading
  heading={`Let's explore the ${clothing.name}`}
        className={"mt-6 mb-4 text-center"}
      />
      <CategoryBatch />

      <div className="flex flex-col md:flex-row gap-12 m-10 justify-center items-start">
       
        <div className="flex md:flex-col flex-row gap-3 md:mt-10">
          {clothing.imageUrl.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-24 h-24 object-cover rounded-md cursor-pointer border-2 shadow-sm transition-all ${
                index === currentImageIndex
                  ? "border-slate-700 scale-105"
                  : "border-transparent hover:scale-105"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>

      
        <div className="flex flex-col items-center">
          <img
            src={clothing.imageUrl[currentImageIndex]}
            alt={clothing.name}
            className="w-[500px] h-[500px] object-cover rounded-xl shadow-lg"
          />
          <p className="mt-4 text-gray-700 text-lg font-medium text-center px-4">
            {clothing.description}
          </p>
        </div>
      </div>

    
      <div className="p-8 mx-auto w-full md:w-[800px] bg-white shadow-xl rounded-xl mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center text-slate-800">
          Booking Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputBox
            type="date"
            placeholder="Booking Date"
            value={BookingDetails.bookingDate}
            onChange={(value) =>
              setBookingDetails({ ...BookingDetails, bookingDate: value })
            }
          />
          <InputBox
            type="time"
            placeholder="Booking Time"
            value={BookingDetails.bookingTime}
            onChange={(value) =>
              setBookingDetails({ ...BookingDetails, bookingTime: value })
            }
          />
          <InputBox
            type="number"
            placeholder="Booking Duration (hours)"
            value={BookingDetails.bookingDuration}
            onChange={(value) =>
              setBookingDetails({
                ...BookingDetails,
                bookingDuration: value,
              })
            }
          />

          <InputBox
            type="text"
            placeholder="Your Name"
            value={BookingDetails.userName}
            onChange={(value) =>
              setBookingDetails({ ...BookingDetails, userName: value })
            }
          />
          <InputBox
            type="text"
            placeholder="Your Contact Number"
            value={BookingDetails.userContact}
            onChange={(value) =>
              setBookingDetails({ ...BookingDetails, userContact: value })
            }
          />
          <InputBox
            type="email"
            placeholder="Your Email"
            value={BookingDetails.userEmail}
            onChange={(value) =>
              setBookingDetails({ ...BookingDetails, userEmail: value })
            }
          />
          <InputBox
            type="text"
            placeholder="Your Address"
            value={BookingDetails.userAddress}
            onChange={(value) =>
              setBookingDetails({ ...BookingDetails, userAddress: value })
            }
          />
          <InputBox
            type="text"
            placeholder="ID Type (e.g., Passport, Driver's License)"
            value={BookingDetails.userIdType}
            onChange={(value) =>
              setBookingDetails({ ...BookingDetails, userIdType: value })
            }
          />
          <InputBox
            type="text"
            placeholder="ID Number"
            value={BookingDetails.userIdNumber}
            onChange={(value) =>
              setBookingDetails({ ...BookingDetails, userIdNumber: value })
            }
          />
        </div>

        

        <div className="flex justify-center mt-6">
          <Link
            to="/book-now"
            onClick={handleSubmit}
            className="bg-slate-700 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300 font-medium shadow-md"
          >
            Submit Booking
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ClothingDetails;
