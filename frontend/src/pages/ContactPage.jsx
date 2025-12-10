import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import banner from "../assets/banner/banner1.jpg";
import { useLocation } from "react-router-dom";

export default function Contact() {

     const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const productName = queryParams.get("product");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: productName ? `Enquiry about: ${productName}` : ""
  });

    useEffect(() => {
  if (productName) {
    setFormData(prev => ({
      ...prev,
      message: `Enquiry about: ${productName}`
    }));
  }
}, [productName]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      Swal.fire({
        icon: "error",
        title: "Missing Details",
        text: "Please fill all the fields before submitting.",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Message Sent!",
          text: "We will contact you soon.",
          icon: "success",
        });

        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Banner */}
      <div className="w-full h-[25vh] md:h-[40vh] relative">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-6"
        >
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            For hydraulic pumps, valves, cylinders, power packs and more — we’re here to help.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-lg"
          >
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <p><strong>📞 Phone:</strong> 7217834397 / 8800459957</p>
            <p><strong>✉️ Email:</strong> udayhydraulics@gmail.com</p>
            <p>
              <strong>📍 Address:</strong> Ballabhgarh, Faridabad, Haryana
            </p>

            <p className="mt-4 text-gray-700">
              We provide quick support for all hydraulic-related solutions and product inquiries.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg space-y-5"
          >
            <h3 className="text-xl font-semibold mb-2">Send Us a Message</h3>

            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <textarea
              name="message"
              value={formData.message}
              rows="4"
              placeholder="Your Message"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              disabled={loading}
              className={`bg-red-600 text-white px-6 py-3 rounded-md transition ${
                loading ? "bg-red-400 cursor-not-allowed" : "hover:bg-red-700"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.8532938738267!2d77.29443367532532!3d28.363284675812746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd004d5c311f%3A0xf2fc12f486776732!2sUday%20hydraulics!5e0!3m2!1sen!2sin!4v1764657811228!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>

      </section>
    </>
  );
}
