import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Industries from "./pages/Industries";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/industries" element={<Industries />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}
