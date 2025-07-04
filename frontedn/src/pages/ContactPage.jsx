import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!\n" + JSON.stringify(form, null, 2));
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mt-10 mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full border border-gray-300 px-4 py-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
