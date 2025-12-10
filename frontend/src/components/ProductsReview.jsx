import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { productCategories } from "../data/productData";

export default function Products() {

  const products = productCategories
    .flatMap(cat => cat.items)
    .slice(0, 6);

  return (
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <section id="products" className="py-14 bg-white scroll-mt-8">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((item, i) => (
              <div
                key={i}
                className="border rounded-lg shadow-sm hover:shadow-xl transform hover:scale-105 transition duration-300 p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover rounded mb-4"
                />

                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>

                <Link
                  to={`/contact?product=${encodeURIComponent(item.title || item.name)}`}
                  className="text-red-600 text-sm mt-2 inline-block font-medium"
                >
                  Enquiry Now →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              className="inline-block px-6 py-3 bg-red-700 text-white font-medium rounded-md hover:bg-red-800 transition cursor-pointer"
              to="/products"
            >
              View All Products →
            </Link>
          </div>

        </div>
      </section>
    </motion.h2>
  );
}
