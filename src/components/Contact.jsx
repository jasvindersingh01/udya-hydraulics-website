import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <section id="contact" className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              For hydraulic pumps, valves, cylinders, power packs and more — get in touch.
            </p>

            <p><strong>Phone:</strong> 7217834397 / 8800459957</p>
            <p><strong>Email:</strong> udayhydraulics@gmail.com</p>
            <p><strong>Address:</strong> Ballabhgarh, Faridabad, Haryana</p>
          </div>

          <form className="flex flex-col gap-4 mt-8 md:mt-0">
            <input type="text" placeholder="Your Name" className="p-3 border rounded" />
            <input type="text" placeholder="Phone Number" className="p-3 border rounded" />
            <textarea rows="4" placeholder="Message" className="p-3 border rounded"></textarea>

            <button className="bg-red-600 text-white px-6 py-3 rounded-md">
              Send Message
            </button>
          </form>

        </div>
      </section>
    </motion.h2>
  );
}
