import React, { useState } from "react";
import { Header, Footer } from "../components";

const images = [
  "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
  "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
  "https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg",
  "https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="h-80 flex flex-col justify-center items-center text-center px-6 bg-[url('/gallery-bg.jpg')] bg-cover bg-center">
        <h2 className="text-5xl font-extrabold">Gallery</h2>
        <p className="mt-4 text-lg text-gray-300">
          Explore moments from our gym and training sessions.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 py-12 bg-gray-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <div key={index} className="relative group">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-4 right-4 text-gray-900 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
