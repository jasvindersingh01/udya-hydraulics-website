import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Industries from "./pages/Industries";

export default function App() {
  return (
    <BrowserRouter basename="/udyahydraulics/">
    <ScrollToTop />
    <Topbar />
      <Navbar />

      <main className="pt-[72px] md:pt-[100px]">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/industries" element={<Industries />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>

      <Footer />

    </BrowserRouter>
  );
}
