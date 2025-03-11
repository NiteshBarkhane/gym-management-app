import React from "react";
import { Header, Footer } from "../components";

const Pricing = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="h-80 flex flex-col justify-center items-center text-center px-6 bg-[url('/pricing-bg.jpg')] bg-cover bg-center">
        <h2 className="text-5xl font-extrabold">Membership Plans</h2>
        <p className="mt-4 text-lg text-gray-300">
          Choose the best plan that suits your fitness goals.
        </p>
      </section>

      {/* Pricing Plans */}
      <section className="p-10 bg-gray-800 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500">Basic Plan</h3>
            <p className="text-gray-200 underline mt-2">₹499/month</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>✅ Access to gym</li>
              <li>✅ Free locker</li>
              <li>❌ No personal trainer</li>
              <li>❌ No group classes</li>
            </ul>
            <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 border-2 border-red-500">
            <h3 className="text-2xl font-bold text-red-500">Premium Plan</h3>
            <p className="text-gray-200 underline mt-2">₹799/month</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>✅ Full gym access</li>
              <li>✅ Personal trainer (2 sessions/week)</li>
              <li>✅ Group classes</li>
              <li>❌ No diet consultation</li>
            </ul>
            <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition">
              Most Popular
            </button>
          </div>

          {/* VIP Plan */}
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500">VIP Plan</h3>
            <p className="text-gray-200 underline mt-2">₹1299/month</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>✅ 24/7 Gym Access</li>
              <li>✅ Unlimited Personal Trainer</li>
              <li>✅ Diet Consultation</li>
              <li>✅ Exclusive VIP Lounge</li>
            </ul>
            <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
              Join Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
