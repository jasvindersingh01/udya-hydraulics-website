import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Products from "../components/ProductsReview";
import About from "../components/AboutPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import IndustriesPreview from "../components/IndustriesPreview";
import { YtVideos } from "../components/ytvideos";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products /> 
      <IndustriesPreview />
      <WhyChooseUs />
      <Brands />
      <YtVideos />
    </>
  );
}
