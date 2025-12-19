import { motion } from "framer-motion";
import banner from "../assets/banner/banner1.jpg";
import topimage from "../assets/about/topimage.webp"

import office from "../assets/about/office.webp";
import warehouse from "../assets/about/warehouse.webp";

import package1 from "../assets/about/package.webp";
import udyam from "../assets/about/udyam.webp";
import certificate from "../assets/about/certificate.webp";

export default function About() {
  return (
    <>
      <div className="w-full h-[25vh] md:h-[34vh] relative">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            About Us
          </h1>
        </div>
      </div>

      {/* MAIN ABOUT SECTION */}
      <motion.section
        id="about"
        className="py-16 bg-gray-50 scroll-mt-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            About Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="md:col-span-2 space-y-5">
              <p className="text-gray-700 leading-relaxed">
                Uday Hydraulics is a trusted{" "}
                <strong>Wholesaler, Retailer, Trader</strong> and{" "}
                <strong>Distributor</strong> of Hydraulic Pumps, Valves, Power
                Packs & Piston Pumps. Founded in <strong>2024</strong>, we
                supply high-quality hydraulic components for heavy machinery,
                molding, engineering and industrial applications.
              </p>

              <p className="text-gray-700 leading-relaxed">
                With a skilled team and strong ethical business values, we focus
                on delivering <strong>quality-tested products, fast delivery,
                  genuine OEM parts</strong> and <strong>technical guidance</strong>.
                Under the leadership of <strong>Mr. Rajeev Rawat</strong>, we
                continue to grow with reliability and customer trust.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Company Factsheet</h3>
                <div className="mt-6">
                  <a
                    href="/brochure.pdf"
                    download
                    className="text-red-600 font-semibold underline hover:text-red-800 transition"
                  >
                    📄 Download Company Brochure
                  </a>
                </div>


                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 py-6">
                  <div className="space-y-2">
                    <p><strong>CEO:</strong> Rajeev Rawat</p>
                    <p><strong>Firm Type:</strong> Proprietorship</p>
                    <p><strong>Employees:</strong> Up to 10</p>
                    <p><strong>Turnover:</strong> ₹40L – ₹1.5Cr</p>
                  </div>

                  <div className="space-y-2">
                    <p><strong>GST No.:</strong> 06CGMPR8370N1ZG</p>
                    <p><strong>IEC Code:</strong> CGMPR8370N</p>
                    <p><strong>Banker:</strong> HDFC Bank</p>
                    <p><strong>Location:</strong> Faridabad, Haryana</p>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-700 space-y-1">
                  <p><strong>Payment Modes:</strong> Cash, Cheque, Credit Card</p>
                  <p><strong>Shipment:</strong> By Road, Air & Cargo</p>
                </div>
              </div>
            </div>

            <div>
              <img
                src={topimage}
                alt="Hydraulic"
                className="w-full object-cover rounded-lg shadow-lg h-[60vh]"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">Infrastructural Set-Up</h3>
            <p className="text-gray-700">
              Our official working space for daily operations, product handling,
              documentation and client consultations.
            </p>
          </motion.div>

          <motion.img
            src={office}
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={warehouse}
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">Warehouse Unit</h3>
            <p className="text-gray-700">
              An organized storage facility with approx. 800 sq. ft. capacity
              for safe inventory management and faster product dispatch.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-30 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">Packaging & Dispatch</h3>
            <p className="text-gray-700 leading-relaxed">
              We ensure safe, secure and professional packaging for all hydraulic components.
              Each product is sealed, foam-protected and labeled to avoid transit damage.
              Our dispatch workflow is fast, organized and quality-driven.
            </p>
          </motion.div>

          <motion.img
            src={package1}
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">Our Certificates</h3>

          <div className="grid sm:grid-cols-2 gap-20 max-w-4xl mx-auto">

            {[certificate, udyam].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden shadow-xl"
              >
                <img src={img} className="w-full h-80 object-contain" />
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* VIDEO SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">Product Demo Videos</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "https://www.youtube.com/embed/rJum2uuvY_E?si=FLTCgh-uBk6LpWO7",
              "https://www.youtube.com/embed/sB3BAie6d1k?si=lRzccPtPYG5KmdmT",
              "https://www.youtube.com/embed/cbGtX38_2IY?si=GGRgNuqV4PLUGzZ1",
            ].map((url, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-60"
                  src={url}
                  title="Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
