import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8">
        
        <h1 className="text-4xl font-bold text-violet-700 text-center mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Have questions or need help? Reach out to us and we’ll be happy to
          assist you.
        </p>

     
        <div className="grid md:grid-cols-2 gap-10">
         
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-3 rounded-xl font-semibold hover:bg-violet-700 transition"
            >
              Send Message
            </button>
          </form>

      
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="text-violet-600 w-6 h-6" />
              <p className="text-gray-700">123 Clothing Lane, Mumbai, India</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-violet-600 w-6 h-6" />
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-violet-600 w-6 h-6" />
              <p className="text-gray-700">support@clothingshop.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

