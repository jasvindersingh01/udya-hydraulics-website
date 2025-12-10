import { Link } from "react-router-dom";
import hero from "../assets/HeroImg.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-2">
      <div
        className="h-[100vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-black/60 w-full h-full flex items-center px-10">
          <div className="max-w-3xl mt-20 md:mt-0 pt-15">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
                Precision in Motion
              </h1>
              <p className="text-gray-200 mt-4 text-lg tracking-wide mx-1">
                Hydraulic Pumps • Valves • Cylinders • Power Packs • Servo Hydraulics
              </p>

              <div className="mt-6 flex gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-6 py-3 rounded-md">
                  Get Quote
                </Link>
                <a
                  href="https://wa.me/917217834397?text=Hello%20I%20want%20to%20know%20about%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fixed bottom-6 right-6 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition transform"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-10 h-10"
                  />
                </a>

              </div>
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}
