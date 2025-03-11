import React from "react";
import { Link } from "react-router-dom";
import { FaDumbbell, FaUsers, FaHeartbeat } from "react-icons/fa";
import { Header, Footer } from "../components";
import { useAuth } from "../context/authContext";

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[url('/gym-bg.jpg')] bg-cover bg-center">
        <h2 className="text-6xl font-extrabold">Unleash Your Power</h2>
        <p className="text-xl text-gray-300 mt-4 max-w-2xl">
          Transform your body and mind with expert guidance, top-tier equipment,
          and personalized workout plans.
        </p>
        {!currentUser ? (
          <Link
            to="/signup"
            className="mt-6 bg-red-500 px-8 py-3 text-lg font-semibold rounded shadow-md"
          >
            Get Started
          </Link>
        ) : (
          <Link
            to={currentUser.role === "user" ? "/pricing" : "/dashboard"}
            className="mt-6 bg-red-500 px-8 py-3 text-lg font-semibold rounded shadow-md"
          >
            {currentUser.role === "user" ? "See Our Plans" : "Go to Dashboard"}
          </Link>
        )}
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800 text-center">
        <h3 className="text-4xl font-bold mb-10">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 max-w-6xl mx-auto">
          <div className="bg-gray-700 p-6 rounded shadow-md flex flex-col items-center">
            <FaDumbbell size={50} className="text-red-500" />
            <h4 className="text-2xl font-semibold mt-4">Modern Equipment</h4>
            <p className="text-gray-300 mt-2">
              State-of-the-art gym facilities for optimal workouts.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded shadow-md flex flex-col items-center">
            <FaUsers size={50} className="text-blue-500" />
            <h4 className="text-2xl font-semibold mt-4">Certified Trainers</h4>
            <p className="text-gray-300 mt-2">
              Get guidance from the best fitness professionals.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded shadow-md flex flex-col items-center">
            <FaHeartbeat size={50} className="text-green-500" />
            <h4 className="text-2xl font-semibold mt-4">Custom Plans</h4>
            <p className="text-gray-300 mt-2">
              Tailored fitness and diet plans for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 text-center">
        <h3 className="text-4xl font-bold mb-10">What Our Members Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded shadow-md">
            <p className="text-gray-300">
              "This gym has completely transformed my life! The trainers are
              amazing."
            </p>
            <h4 className="text-red-400 mt-4">- John Doe</h4>
          </div>
          <div className="bg-gray-800 p-6 rounded shadow-md">
            <p className="text-gray-300">
              "The best equipment and workout plans I’ve ever seen! Highly
              recommended."
            </p>
            <h4 className="text-red-400 mt-4">- Sarah Smith</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
