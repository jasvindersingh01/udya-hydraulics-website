import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import manufacturing from "../assets/industries/manufacture.jpg";
import construction from "../assets/industries/construction.jpg";
import automotive from "../assets/industries/automotive.jpg";
import plastic from "../assets/industries/plastic.webp";

const previewIndustries = [
  {
    title: "Manufacturing Industry",
    image: manufacturing,
    desc: "Hydraulic solutions for CNC, presses and automation systems.",
  },
  {
    title: "Construction & Infrastructure",
    image: construction,
    desc: "Hydraulic cylinders & power packs for heavy machinery.",
  },
  {
    title: "Automotive Industry",
    image: automotive,
    desc: "Precision hydraulics for assembly and testing lines.",
  },
  {
    title: "Plastic & Injection Molding",
    image: plastic,
    desc: "High-pressure systems for molding machines.",
  },
];

export default function IndustriesPreview() {
  return (
    <section className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Industries We Serve
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Delivering reliable hydraulic solutions across multiple industrial sectors.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewIndustries.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/industries"
            className="inline-block px-7 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition"
          >
            View All Industries →
          </Link>
        </div>

      </div>
    </section>
  );
}
