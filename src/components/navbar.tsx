"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide Navbar on Scroll Down
      } else {
        setIsVisible(true); // Show Navbar on Scroll Up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar Fixed to Top */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-gray-900 text-white h-20 flex items-center transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Brand Logo and Name */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              height={45}
              width={45}
              className="rounded-full"
            />
            <span className="text-xl font-bold tracking-wide">PWA Fragrance Hub</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            <Link href="/" className="hover:text-blue-400 transition duration-300">Home</Link>
            <Link href="/about" className="hover:text-blue-400 transition duration-300">About</Link>
            <Link href="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
            {/* Cart Icon for Desktop Only */}
            <Link href="/cart" className="hover:text-blue-400 transition duration-300 text-2xl">
              <FaShoppingCart />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile & Tablet */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-white text-2xl">
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }} // Instant Open, No Delay
            className="fixed top-20 right-0 w-2/3 h-auto bg-gray-900 text-white shadow-lg rounded-bl-lg flex flex-col items-center py-6 space-y-4 md:hidden z-50"
          >
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-3xl">
              ✖
            </button>

            {/* Mobile Menu Links */}
            <Link href="/" className="text-xl hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="text-xl hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="text-xl hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/cart" className="text-xl hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Cart</Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fix Content Padding to Avoid Overlapping */}
      <div className="pt-20"></div>
    </>
  );
}
