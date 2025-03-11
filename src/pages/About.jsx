import React from "react";
import { Header, Footer } from "../components";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="h-80 flex flex-col justify-center items-center text-center px-6 bg-[url('/about-bg.jpg')] bg-cover bg-center">
        <h2 className="text-5xl font-extrabold">Who We Are</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Welcome to{" "}
          <span className="font-semibold text-red-500">Pulse Fitness</span>,
          where fitness meets passion! We’re not just a gym—we’re a community of
          athletes, health enthusiasts, and everyday people pushing their
          limits.
        </p>
      </section>

      {/* About Content */}
      <section className="py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-red-500">
                🏋️‍♂️ State-of-the-Art Equipment
              </h3>
              <p className="mt-2 text-gray-300">
                Our gym is equipped with cutting-edge machines and tools to help
                you reach your fitness goals efficiently.
              </p>
            </div>

            <div className="p-6 bg-gray-700 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-red-500">
                🔥 Expert Trainers
              </h3>
              <p className="mt-2 text-gray-300">
                Our certified trainers create personalized workout plans and
                provide expert guidance for maximum results.
              </p>
            </div>

            <div className="p-6 bg-gray-700 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-red-500">
                💪 Community & Motivation
              </h3>
              <p className="mt-2 text-gray-300">
                Join a supportive community that keeps you motivated and pushes
                you to break through your limits.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-200">
              Join Us & Transform Your Life!
            </h3>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">
              Whether you're just starting your fitness journey or already a
              pro, we welcome you to experience the best in health and wellness.
            </p>
            <button className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
