import Logo from "../assets/Logo.webp";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <img src={Logo} alt="Uday Hydraulics" className="w-12 h-12 object-contain" />
          <h3 className="text-lg font-semibold text-white">Uday Hydraulics</h3>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-red-500">Home</a>
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#products" className="hover:text-red-500">Products</a>
          <a href="#services" className="hover:text-red-500">Services</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} | Designed & Developed by <span className="text-red-500">Right Ads -Jasvinder</span>
        </p>
      </div>
    </footer>
  );
}
