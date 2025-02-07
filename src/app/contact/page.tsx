import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h2>

          {/* Contact Form and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Get in Touch
              </h3>
              <p className="text-gray-600 text-lg">
                Have questions or need assistance? We’re here to help! Reach out
                to us using the form or contact details below.
              </p>
              <ul className="text-gray-700 text-lg space-y-4">
                <li>
                  <span className="font-bold">Email:</span>{" "}
                  abdullahateeq331@gmail.com
                </li>
                <li>
                  <span className="font-bold">Phone:</span> +92 336 2310043
                </li>
                <li>
                  <span className="font-bold">Address:</span> 123 PWA ShopHub
                  Avenue, Tech City, 56789
                </li>
              </ul>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
