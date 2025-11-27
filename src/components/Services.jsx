import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Hydraulic Pump Supply",
      desc: "Industrial-grade piston, vane and gear pumps sourced from trusted OEM brands.",
    },
    {
      title: "Hydraulic Valve Supply",
      desc: "Directional, pressure and flow control valves suitable for industrial machinery.",
    },
    {
      title: "Hydraulic Cylinder Supply",
      desc: "Durable hydraulic cylinders for press machines, manufacturing and heavy equipment.",
    },
    {
      title: "Hydraulic Repair Services",
      desc: "Basic inspection and repair services for pumps, valves and cylinders (on request).",
    },
    {
      title: "Custom Power Pack Solutions",
      desc: "Design and supply of hydraulic power packs based on required pressure and flow.",
    },
    {
      title: "Technical Support",
      desc: "Assistance in selecting the correct hydraulic components for your machinery.",
    },
  ];

  return (
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <section id="services" className="py-16 bg-white scroll-mt-8">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </motion.h2>
  );
}
