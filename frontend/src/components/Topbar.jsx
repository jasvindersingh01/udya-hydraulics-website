import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

        {/* LEFT */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-red-500" /> 7217834397
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope className="text-red-500" /> udayhydraulics@gmail.com
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-red-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-red-500"><FaInstagram /></a>
          <a href="#" className="hover:text-red-500"><FaYoutube /></a>
        </div>

      </div>
    </div>
  );
}