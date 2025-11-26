import Logo from "../assets/Logo.webp";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="UDAY HYDRAULICS"
          className="w-16 h-auto object-contain"
          />
          <h1 className="text-xl md:text-sm font-bold text-red-700">
            UDAY HYDRAULICS
          </h1>
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-red-600">Home</a></li>
          <li><a href="#services" className="hover:text-red-600">Services</a></li>
          <li><a href="#products" className="hover:text-red-600">Products</a></li>
          <li><a href="#about" className="hover:text-red-600">About Us</a></li>
          <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
        </ul>

        <a
          href="tel:7217834397"
          className="px-4 py-2 bg-red-600 text-white rounded-md hidden md:block hover:bg-red-700 transition"
        >
          Call Now
        </a>
      </nav>
    </header>
  );
}
