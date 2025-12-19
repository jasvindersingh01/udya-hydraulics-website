import { motion } from "framer-motion";
import banner from "../assets/banner/banner1.jpg";

import manufacturing from "../assets/industries/manufacture.jpg";
import construction from "../assets/industries/construction.jpg";
import automotive from "../assets/industries/automotive.jpg";
import plastic from "../assets/industries/plastic.webp";
import steel from "../assets/industries/steel-metal.jpg";
import power from "../assets/industries/power.jpg";
import mining from "../assets/industries/mining.jpg";
import agriculture from "../assets/industries/agriculture.jpg";

const industries = [
  {
    title: "Manufacturing Industry",
    image: manufacturing,
    desc: "Hydraulic pumps, valves and systems for CNC machines, presses and automation lines.",
  },
  {
    title: "Construction & Infrastructure",
    image: construction,
    desc: "Hydraulic cylinders and power packs for earthmoving and construction equipment.",
  },
  {
    title: "Automotive Industry",
    image: automotive,
    desc: "Precision hydraulic solutions for automotive assembly and testing systems.",
  },
  {
    title: "Plastic & Injection Molding",
    image: plastic,
    desc: "High-pressure hydraulics for injection molding and plastic processing machines.",
  },
  {
    title: "Steel & Metal Processing",
    image: steel,
    desc: "Heavy-duty hydraulic systems for rolling mills and metal forming operations.",
  },
  {
    title: "Power & Energy Sector",
    image: power,
    desc: "Hydraulic components used in power plants and energy infrastructure.",
  },
  {
    title: "Mining & Heavy Machinery",
    image: mining,
    desc: "Robust hydraulic equipment designed for extreme mining environments.",
  },
  {
    title: "Agriculture Machinery",
    image: agriculture,
    desc: "Hydraulic pumps and valves for tractors and agricultural equipment.",
  },
];

export default function Industries() {
  return (
    <>
      <div className="w-full h-[24vh] md:h-[34vh] relative">
        <img src={banner} className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Industries
          </h1>
        </div>
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powering Industries with Precision Hydraulics
          </h2>
          <p className="text-gray-600">
            Uday Hydraulics provides reliable and efficient hydraulic solutions
            across multiple industries with quality, performance and trust.
          </p>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {industries.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover"
              />

              {/* CONTENT */}
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
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">
          Need Hydraulic Solutions for Your Industry?
        </h3>
        <p className="mb-6 text-red-100">
          Contact Uday Hydraulics for reliable and customized hydraulic solutions.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}
