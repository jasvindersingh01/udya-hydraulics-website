import pump1 from "../assets/products/pumps.webp";
import pump2 from "../assets/products/motor.webp";
import atos1 from "../assets/products/atos-valves.webp";
import atos2 from "../assets/products/valves.webp";
import moog1 from "../assets/products/servo.webp";
import solenoid from "../assets/products/control-valves.webp";

export default function Products() {
  const products = [
    { title: "Hydraulic Pump", image: pump1 },
    { title: "A2FM 16/ 61W-VBB030 Hydraulic Motor", image: pump2 },
    { title: "Atos Proportional Valves", image: atos1 },
    { title: "Atos Directional Valve", image: atos2 },
    { title: "Hydraulic Servo Valve", image: moog1 },
    { title: "Solenoid Valve Coil", image: solenoid },
  ];

  return (
    <section id="products" className="py-14 bg-white scroll-mt-8">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, i) => (
            <div 
              key={i} 
              className="border rounded-lg shadow-sm hover:shadow-lg transition p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover rounded mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>

              <a
                href="#contact"
                className="text-red-600 text-sm mt-2 inline-block font-medium"
              >
                Send Enquiry →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
