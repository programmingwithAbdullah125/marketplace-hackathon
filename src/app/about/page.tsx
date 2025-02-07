import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            About Us
          </h2>

          {/* Content Wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Welcome to PWA Fragrance Hub!
              </h3>
              <p className="text-gray-600 text-lg">
                PWA ShopHub is your go-to store for the best electronics and
                appliances. Whether it’s the latest smartphones, powerful
                laptops, or smart gadgets, we have everything you need to make
                life easier and more exciting.
              </p>
              <p className="text-gray-600 text-lg">
                We make sure our platform is easy to use and secure so you can
                shop worry-free. With fast delivery and reliable service, we aim
                to bring a smile to every customer.
              </p>
              <p className="text-gray-600 text-lg">
                At PWA ShopHub, we care about quality and trust, and that’s why
                we’re committed to offering you the best products at fair
                prices.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src="/logo.png" // Replace with your image path
                alt="logo"
                className="rounded-lg shadow-lg"
                width={500}
                height={500}
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
