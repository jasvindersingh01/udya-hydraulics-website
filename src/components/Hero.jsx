import hero from "../assets/HeroImg.jpg";
export default function Hero() {
  return (
    <section id="home" className="pt-2">
      <div
        className="h-[100vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-black/60 w-full h-full flex items-center px-10">
          <div className="max-w-3xl mt-20 md:mt-0 pt-15">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
              Precision in Motion
            </h1>
            <p className="text-gray-200 mt-4 text-lg tracking-wide mx-1">
              Hydraulic Pumps • Valves • Cylinders • Power Packs • Servo Hydraulics
            </p>

            <div className="mt-6 flex gap-4">
              <a href="#contact" className="bg-red-600 text-white px-6 py-3 rounded-md">
                Get Quote
              </a>
              <a
                href="https://wa.me/7217834397"
                className="bg-green-600 text-white px-6 py-3 rounded-md"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
