import { useEffect, useState } from "react";

import Rexroth from "../assets/brands/Rexroth.png";
import Parker from "../assets/brands/Parker.png";
import Yuken from "../assets/brands/Yuken.png";
import Moog from "../assets/brands/Moog.png";
import Vickers from "../assets/brands/Vickers.png";
import Atos from "../assets/brands/Atos.png";

const CARD_WIDTH = 140; 
const GAP = 22;         
const STEP = CARD_WIDTH + GAP;

export default function Brands() {
  const brands = [Rexroth, Parker, Yuken, Moog, Vickers, Atos];

  const logos = [...brands, ...brands, ...brands];

  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const maxShift = -STEP * brands.length;

        if (prev <= maxShift) {
          return 0;
        }

        return prev - STEP;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-14 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Brands We Deal In
      </h2>

      <div className="mx-auto overflow-hidden" style={{ maxWidth: "800px" }}>
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              style={{ minWidth: `${CARD_WIDTH}px`, marginRight: `${GAP}px` }}
              className="bg-white p-4 rounded-lg shadow flex items-center justify-center"
            >
              <img
                src={logo}
                className="
                  w-34 h-auto object-contain
                  grayscale opacity-60
                  hover:grayscale-0 hover:opacity-100
                  transition
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
