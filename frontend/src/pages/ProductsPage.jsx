import { useState, useMemo } from "react";
import { productCategories } from "../data/productData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import banner from "../assets/banner/banner1.jpg";

const ITEMS_PER_PAGE = 9;

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortOrder, setSortOrder] = useState("az");
  const [page, setPage] = useState(1);

  const allProducts = productCategories.flatMap(cat =>
    cat.items.map(item => ({
      ...item,
      category: cat.category,
      brand: cat.brand,
    }))
  );

  const categories = ["All", ...new Set(productCategories.map(c => c.category))];
  const brands = ["All", ...new Set(productCategories.map(c => c.brand))];

  // FILTER + SEARCH + SORT
  const filtered = useMemo(() => {
    let data = allProducts;

    if (selectedCategory !== "All")
      data = data.filter(p => p.category === selectedCategory);

    if (selectedBrand !== "All")
      data = data.filter(p => p.brand === selectedBrand);

    if (search.trim() !== "")
      data = data.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );

    // Sorting
    if (sortOrder === "az") data = data.sort((a, b) => a.name.localeCompare(b.name));
    if (sortOrder === "za") data = data.sort((a, b) => b.name.localeCompare(a.name));

    return data;
  }, [search, selectedCategory, selectedBrand, sortOrder]);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const handleEnquiry = (productName) => {
    const enquiryUrl = `/contact?product=${encodeURIComponent(productName)}`;
    window.location.href = enquiryUrl;
  };

  return (
    <>
      <div className="w-full h-[24vh] md:h-[34vh] relative">
        <img src={banner} className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Products
          </h1>
        </div>
      </div>

      <div className="mx-auto py-25 px-6 grid md:grid-cols-4 gap-10">
        <div className="bg-white p-5 rounded-xl shadow-md h-fit">
          <h3 className="font-bold mb-4 text-lg">Filters</h3>

          <h4 className="font-semibold mt-4 mb-2">Category</h4>
          {categories.map((c, i) => (
            <p
              key={i}
              onClick={() => { setSelectedCategory(c); setPage(1); }}
              className={`cursor-pointer py-1 ${selectedCategory === c ? "text-red-600 font-bold" : "text-gray-700"}`}
            >
              {c}
            </p>
          ))}
        </div>

        {/* PRODUCT LIST */}
        <div className="md:col-span-3">

          {/* Search + Sorting */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="p-3 border rounded-lg w-full md:w-1/2 shadow"
            />

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="p-3 border rounded-lg shadow"
            >
              <option value="az">Sort A → Z</option>
              <option value="za">Sort Z → A</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginated.map((item, i) => (
              <motion.div
                key={i}
                className="border rounded-xl shadow-lg p-4 bg-white"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.image}
                  className="w-full h-60 object-cover rounded mb-4"
                  alt={item.name}
                />

                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.shortDesc}</p>

                <button>
                  <Link
                    to={`/contact?product=${encodeURIComponent(item.title || item.name)}`}
                    className="text-red-600 text-sm mt-2 inline-block font-medium"
                  >
                    Enquiry Now →
                  </Link>
                </button>
              </motion.div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded-md border ${page === i + 1 ? "bg-red-600 text-white" : "bg-white"
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
