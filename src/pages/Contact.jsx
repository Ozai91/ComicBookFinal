import React from "react";

const Contact = () => {
  return (
    <>
      <section className="bg-gray-950 text-white py-24 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
            Contact Marvel Comics
          </h2>
          <p className="text-gray-400 text-lg">
            Got a question, suggestion, or request? Whether you're a fan or
            business, we're listening.
          </p>
        </div>

        <form
          className="max-w-3xl mx-auto bg-gray-900 rounded-xl p-8 shadow-xl space-y-6"
          onSubmit={(e) => e.preventDefault()} // Replace with your form handler
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Tony Stark"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="ironman@starkindustries.com"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 123 456 7890"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Business Collaboration, Feedback, etc."
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Reason for Contact
              </label>
              <select
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              >
                <option value="">Select Reason</option>
                <option>Fan Feedback</option>
                <option>Business Inquiry</option>
                <option>Press & Media</option>
                <option>Support Request</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Preferred Contact Method
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    defaultChecked
                    className="form-radio text-red-600 mr-2"
                  />
                  <span className="text-gray-300">Email</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    className="form-radio text-red-600 mr-2"
                  />
                  <span className="text-gray-300">Phone</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Share your message, feedback, or inquiry here..."
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            ></textarea>
          </div>

          <div className="flex items-start">
            <input type="checkbox" id="terms" className="mt-1 mr-3" required />
            <label htmlFor="terms" className="text-sm text-gray-400">
              I agree to Marvel's{" "}
              <a href="#" className="text-red-500 hover:underline">
                terms and conditions
              </a>
              .
            </label>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition duration-300 px-8 py-3 rounded-lg font-semibold text-white shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
