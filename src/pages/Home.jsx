import React from 'react';
import upendoLogo from '../assets/upendo-logo.png'; // Make sure this path matches your project

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Banner */}
      <section className="bg-green-100 py-16 text-center">
        <img
          src={upendoLogo}
          alt="Upendo Village Logo"
          className="mx-auto w-40 md:w-52 lg:w-60 mb-6 drop-shadow-lg"
        />
        <h1 className="text-5xl font-bold text-green-800 mb-4">Welcome to Upendo Village</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Providing care, hope, and support to those affected by HIV/AIDS in Naivasha, Kenya.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Guided by gospel values, we provide medical, educational, economic, and psychosocial support to people affected by HIV/AIDS, empowering them with dignity and tools for self-sufficiency.
        </p>
      </section>

      {/* What We Do / Programs */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-8">Our Strategic Pillars</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded shadow text-center">
            <h3 className="text-xl font-bold mb-2">Health & Wellness</h3>
            <p>Integrated medical care, home visits, and prevention programs.</p>
          </div>
          <div className="p-6 bg-white rounded shadow text-center">
            <h3 className="text-xl font-bold mb-2">Education Support</h3>
            <p>Scholarships, life skills, and mentorship for orphaned and vulnerable children.</p>
          </div>
          <div className="p-6 bg-white rounded shadow text-center">
            <h3 className="text-xl font-bold mb-2">Livelihood & Nutrition</h3>
            <p>Food security, smart farming, poultry, and dairy projects.</p>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-16 text-center bg-green-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Join Us in Creating Change</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Your support helps restore dignity and opportunity to families in need. Every donation counts.
        </p>
        <a
          href="/donate"
          className="bg-white text-green-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
        >
          Donate Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Upendo Village. All rights reserved.
      </footer>
    </div>
  );
}