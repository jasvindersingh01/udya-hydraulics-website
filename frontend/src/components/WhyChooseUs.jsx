import { FaTools, FaCertificate, FaUserCog, FaShippingFast } from "react-icons/fa";
import whyImg from "../assets/about/whychoose.avif"; // <-- apni image ka path daalo

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white scroll-mt-20" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE — TEXT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Choose Us?
          </h2>

          <div className="space-y-8">

            <div className="flex gap-4 items-start">
              <FaCertificate className="text-red-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Premium Quality</h3>
                <p className="text-gray-600">
                  We supply hydraulic products from Rexroth, Parker, Moog, Vickers,
                  Yuken & Atos ensuring long-term durability.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaUserCog className="text-red-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Technical Expertise</h3>
                <p className="text-gray-600">
                  Strong engineering knowledge ensures accurate guidance & efficient hydraulic solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaShippingFast className="text-red-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Quick Delivery</h3>
                <p className="text-gray-600">
                  We stock pumps, valves & cylinders for fast dispatch and reduced downtime.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaTools className="text-red-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Custom Solutions</h3>
                <p className="text-gray-600">
                  We design custom-built hydraulic systems tailored to your industry needs.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div>
          <img
            src={whyImg}
            alt="Why Choose Us"
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
          />
        </div>

      </div>
    </section>
  );
}
