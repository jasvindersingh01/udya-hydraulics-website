import { motion } from "framer-motion";
import Logo from "../assets/Logo.webp";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-black text-gray-300 pt-12 pb-6"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={Logo} alt="Uday Hydraulics" className="w-12 h-12 object-contain" />
            <h3 className="text-xl font-semibold text-white">Uday Hydraulics</h3>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            A trusted name in industrial & mobile hydraulic solutions —
            delivering pumps, valves, cylinders, and custom-built hydraulic systems
            with precision and performance.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-red-500">Home</a></li>
            <li><a href="/about" className="hover:text-red-500">About Us</a></li>
            <li><a href="/products" className="hover:text-red-500">Products</a></li>
            <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
            <li><a href="/brochure.pdf" download className="hover:text-red-500">
              Brochure
            </a>
            </li>

          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Product Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/products?cat=pumps" className="hover:text-red-500">Hydraulic Pumps</a></li>
            <li><a href="/products?cat=valves" className="hover:text-red-500">Hydraulic Valves</a></li>
            <li><a href="/products?cat=cylinders" className="hover:text-red-500">Hydraulic Cylinders</a></li>
            <li><a href="/products?cat=powerpacks" className="hover:text-red-500">Power Packs</a></li>
          </ul>
        </div>
    
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-400">📍 Kota, Rajasthan</li>
            <li className="text-gray-400">📞 +91 7217834397</li>
            <li className="text-gray-400">📞 +91 8800459957</li>
            <li className="text-gray-400">✉️ udayhydraulics@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* ---- Bottom Footer ---- */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Uday Hydraulics — All Rights Reserved
        </p>
      </div>
    </motion.footer>
  );
}
