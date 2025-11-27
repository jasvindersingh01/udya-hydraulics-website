import Rexroth from "../assets/brands/Rexroth.png";
import Parker from "../assets/brands/Parker.png";
import Yuken from "../assets/brands/Yuken.png";
import Moog from "../assets/brands/Moog.png";
import Vickers from "../assets/brands/Vickers.png";
import Atos from "../assets/brands/Atos.png";
import { motion } from "framer-motion";

export default function Brands() {
  const brands = [
    { name: "Rexroth", logo: Rexroth },
    { name: "Parker", logo: Parker },
    { name: "Yuken", logo: Yuken },
    { name: "Moog", logo: Moog },
    { name: "Vickers", logo: Vickers },
    { name: "Atos", logo: Atos },
  ];

  return (
  <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
    <section className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Brands We Deal In
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
          {brands.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white p-3 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-20 h-auto object-contain hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </motion.h2>
  );
}
