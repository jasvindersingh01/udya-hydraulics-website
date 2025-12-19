import { useState, useEffect } from "react";
import Logo from "../assets/Logo.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideTopbar, setHideTopbar] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopbar(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`
    fixed w-full z-50 bg-white transition-all duration-300
    top-0
    ${hideTopbar ? "md:top-0 shadow-md" : "md:top-[36px]"}
  `}
    >
      <nav className="mx-auto px-6 py-2 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="UDAY HYDRAULICS"
            className="w-16 h-auto object-contain"
          />
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-lg md:text-xl font-bold text-red-700">
              UDAY HYDRAULICS
            </h1>
          </motion.h2>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link className="hover:text-red-500" to="/">Home</Link>
            <Link className="hover:text-red-500" to="/products">
              <div className="relative group">
                <button className="hover:text-red-500">
                  Products ▾
                </button>

                <div className="
      absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-3 
      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
      transition-all duration-200
    ">
                  <a href="/products?cat=pumps" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Hydraulic Pumps
                  </a>
                  <a href="/products?cat=valves" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Hydraulic Valves
                  </a>
                  <a href="/products?cat=cylinders" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Hydraulic Cylinders
                  </a>
                  <a href="/products?cat=powerpacks" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Power Packs
                  </a>
                </div>
              </div>
            </Link>
            <Link className="hover:text-red-500" to="/industries">Industries</Link>
            <Link className="hover:text-red-500" to="/about">About Us</Link>
            <Link className="hover:text-red-500" to="/contact">Contact</Link>
          </ul>

        </motion.h2>
        <a
          href="tel:7217834397"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition font-medium"
        >
          <FaPhoneAlt className="text-sm" />
          <span>Call: 7217834397</span>
        </a>



        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-3xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      <div
        className={`
    md:hidden bg-white shadow-inner overflow-hidden
    transition-all duration-300
    ${isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"}
  `}
      >
        <ul className="flex flex-col gap-4 px-6 text-gray-700 font-medium">

          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-600 block"
            >
              Home
            </Link>
          </li>

          {/* PRODUCTS DROPDOWN */}
          <li>
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex justify-between items-center w-full hover:text-red-600"
            >
              Products
              <span className="text-lg">{isProductsOpen ? "−" : "+"}</span>
            </button>

            {isProductsOpen && (
              <ul className="mt-3 ml-4 flex flex-col gap-3 text-sm">

                <Link
                  to="/products?cat=pumps"
                  onClick={() => {
                    setIsOpen(false);
                    setIsProductsOpen(false);
                  }}
                  className="hover:text-red-600"
                >
                  Hydraulic Pumps
                </Link>

                <Link
                  to="/products?cat=valves"
                  onClick={() => {
                    setIsOpen(false);
                    setIsProductsOpen(false);
                  }}
                  className="hover:text-red-600"
                >
                  Hydraulic Valves
                </Link>

                <Link
                  to="/products?cat=cylinders"
                  onClick={() => {
                    setIsOpen(false);
                    setIsProductsOpen(false);
                  }}
                  className="hover:text-red-600"
                >
                  Hydraulic Cylinders
                </Link>

                <Link
                  to="/products?cat=powerpacks"
                  onClick={() => {
                    setIsOpen(false);
                    setIsProductsOpen(false);
                  }}
                  className="hover:text-red-600"
                >
                  Power Packs
                </Link>

              </ul>
            )}
          </li>

          <li>
            <Link
              to="/industries"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-600 block"
            >
              Industries
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-600 block"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-600 block"
            >
              Contact
            </Link>
          </li>

          <li>
            <a
              href="tel:7217834397"
              className="mt-2 inline-block w-max px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Call: 7217834397
            </a>
          </li>

        </ul>
      </div>
    </header>
  );
}
