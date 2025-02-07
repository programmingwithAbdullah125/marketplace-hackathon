"use client"
import Image from "next/image"
import React, { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r h-20  from-gray-800 to-gray-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand Logo and Name */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            height={45}
            width={45}
            className=" rounded-full"
          />
          <span className="text-xl font-bold tracking-wide">PWA Fragrance Hub</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`flex-col md:flex md:flex-row space-y-2 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="/"
            className="block md:inline-block px-4 py-2 md:py-0 hover:underline transition duration-200 ease-in-out hover:text-blue-400"
          >
            Home
          </a>
          {/* <a
            href="/components/product"
            className="block md:inline-block px-4 py-2 md:py-0 hover:underline transition duration-200 ease-in-out hover:text-blue-400"
          >
            Products
          </a> */}
          <Link
            href="/about"
            className="block md:inline-block px-4 py-2 md:py-0 hover:underline transition duration-200 ease-in-out hover:text-blue-400"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block md:inline-block px-4 py-2 md:py-0 hover:underline transition duration-200 ease-in-out hover:text-blue-400"
          >
            Contact
            </Link>
          <Link
            href="/cart"
            className="block md:inline-block px-4 py-2 md:py-0 hover:underline transition duration-200 ease-in-out hover:text-blue-400"
          >
            Your Cart
            </Link>
        </div>
      </div>
    </nav>
  );
}
