import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Header, Footer } from "../components";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Contact Hero Section */}
      <section className="h-80 flex flex-col justify-center items-center text-center px-6 bg-[url('/contact-bg.jpg')] bg-cover bg-center">
        <h2 className="text-5xl font-extrabold">Get in Touch</h2>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl">
          Have questions? We're here to help! Reach out to us anytime.
        </p>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-800 text-center">
        <h3 className="text-4xl font-bold mb-10">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 max-w-6xl mx-auto">
          <div className="bg-gray-700 p-6 rounded shadow-md flex flex-col items-center">
            <FaPhone size={40} className="text-red-500" />
            <h4 className="text-2xl font-semibold mt-4">Phone</h4>
            <p className="text-gray-300 mt-2">+(91) 0123456789</p>
          </div>
          <div className="bg-gray-700 p-6 rounded shadow-md flex flex-col items-center">
            <FaEnvelope size={40} className="text-blue-500" />
            <h4 className="text-2xl font-semibold mt-4">Email</h4>
            <p className="text-gray-300 mt-2">niteshbarkhane123@gmail.com</p>
          </div>
          <div className="bg-gray-700 p-6 rounded shadow-md flex flex-col items-center">
            <FaMapMarkerAlt size={40} className="text-green-500" />
            <h4 className="text-2xl font-semibold mt-4">Location</h4>
            <p className="text-gray-300 mt-2">mhow, Indore</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 text-center">
        <h3 className="text-4xl font-bold mb-10">Send Us a Message</h3>
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
          <form>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none"
              ></textarea>
            </div>
            <button
              type="button"
              className="bg-red-500 px-6 py-3 text-lg font-semibold rounded shadow-md hover:bg-red-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
