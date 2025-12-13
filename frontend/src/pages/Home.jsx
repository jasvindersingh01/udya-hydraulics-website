import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Products from "../components/ProductsReview";
import About from "../components/AboutPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import IndustriesPreview from "../components/IndustriesPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products /> 
      <IndustriesPreview />
      <WhyChooseUs />
      <Brands />
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
