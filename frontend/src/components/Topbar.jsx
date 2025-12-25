import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope,FaMapMarkerAlt } from "react-icons/fa";

export default function Topbar() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHide(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
    hidden md:block fixed top-0 left-0 w-full z-[60]
    bg-gray-900 text-gray-200 text-sm
    transition-transform duration-300
    ${hide ? "-translate-y-full" : "translate-y-0"}
  `}
    >
      <div className="mx-auto px-6 py-2 flex justify-between items-center">

        {/* LEFT */}
        <div className="flex items-center gap-6 flex-wrap">

           <span className="flex items-center gap-2 max-w-md">
            <FaMapMarkerAlt className="text-red-500 text-base" />
            <span className="truncate">
              H.no 92, Sector 22 Rd, Near Bikaner Misthan Bhandar, Faridabad
            </span>
          </span>

          <span className="flex items-center gap-2">
            <FaEnvelope className="text-red-500 text-base" />
            <a href="mailto:udayhydraulics@gmail.com" className="hover:text-white">
              udayhydraulics@gmail.com
            </a>
          </span>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 text-lg">
            <span className="flex items-center gap-2 text-sm">
            <FaPhoneAlt className="text-red-500 text-base" />
            <a href="tel:7217834397" className="hover:text-white">
             +91 7217834397
            </a>
          </span>
          <a href="#" className="hover:text-red-500 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-red-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-red-500 transition">
            <FaYoutube />
          </a>
        </div>

      </div>
    </div>
  );
}