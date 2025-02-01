import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const currentYear = new Date().getFullYear(); // Dynamic Year

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white flex flex-col min-h-screen section-blur">
      <div className="max-w-4xl mx-auto text-center px-4 flex-grow">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full mt-1 p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white py-3 px-6 rounded-lg font-semibold"
          >
            Send Message
          </button>

          {status && <p className="mt-4 text-green-400">{status}</p>}
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-400">
        © {currentYear} S1 Solutions LLC
      </footer>
    </section>
  );
};

export default ContactForm;
