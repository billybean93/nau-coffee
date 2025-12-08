// src/app/components/Footer.tsx
"use client";

import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-[#0e0908] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        
        {/* Brand with logo */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <Logo size="sm" />   {/* ← your logo here */}
          <p className="text-sm text-gray-300 mt-4">
            Crafted with love, beans, and chaos.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
          <div>
            <h4 className="font-medium mb-2">Explore</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="#menu" className="hover:text-white duration-150">Menu</a></li>
              <li><a href="#ourStory" className="hover:text-white duration-150">Our Story</a></li>
              <li><a href="#popups" className="hover:text-white duration-150">Past Pop-Ups</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2">Connect</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="https://instagram.com/nau_coffee" target="_blank" className="hover:text-white duration-150">Instagram</a></li>
              <li><a href="mailto:hello@nau.coffee" className="hover:text-white duration-150">Email</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-gray-400 text-sm">
          © {new Date().getFullYear()} nâu coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}