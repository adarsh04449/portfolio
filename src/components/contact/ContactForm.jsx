import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const res = await axios.post('https://formspree.io/f/mblywvzg', form);
        alert('Message sent successfully!');
      } catch (error) {
        console.error('Submission failed:', error);
    }
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full max-w-xl  p-0 sm:ps-6 sm:pe-6 ">
      <h2 className="text-2xl font-bold text-white mb-2">Let's Connect</h2>
      <p className="text-gray-400 mb-6">I'd love to hear from you! Send me a message below.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-[#00377e] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
