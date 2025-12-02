import aboutImg from "../assets/certificate.webp"
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <section id="about" className="py-16 bg-gray-50 scroll-mt-6">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            About Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="md:col-span-2 space-y-5">
              <p className="text-gray-700 leading-relaxed">
                Uday Hydraulics is a trusted <strong>Wholesaler, Retailer, Trader </strong>
                and <strong>Distributor</strong> of Hydraulic Pumps, Valves and Piston Pumps.
                Founded in <strong>2024</strong> in Faridabad, Haryana, we supply genuine
                and high-quality hydraulic components for industries like manufacturing,
                molding, construction, heavy machinery and press machines.
              </p>

              <p className="text-gray-700 leading-relaxed">
                With a skilled team and strong ethical business values, we focus on
                delivering <strong>quality-tested products, fast delivery, genuine OEM parts </strong>
                and <strong>technical guidance</strong> to our customers. Under the leadership of
                <strong> Mr. Rajeev Rawat</strong>, we continue to expand with dedication and trust.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Company Factsheet</h3>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">

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
                src={aboutImg}
                alt="About Uday Hydraulics"
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>
    </motion.h2>
  );
}
