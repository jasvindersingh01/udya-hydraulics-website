// src/components/AboutPreview.jsx

export default function AboutPreview() {
  return (
    <section className="py-16 bg-gray-50 scroll-mt-20" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Welcome to Uday Hydraulics
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Uday Hydraulics, founded by <strong>Mr. Rajeev Rawat</strong>, is a trusted 
          name in hydraulic engineering and manufacturing. We deliver reliable and 
          high-performance hydraulic solutions including industrial hydraulics, 
          mobile hydraulics, power packs, cylinders, and custom-built systems 
          tailored to meet specific industry needs.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto mt-4">
          With advanced manufacturing capabilities and strong technical expertise, 
          we focus on quality, precision, and customer satisfaction — helping 
          businesses improve efficiency and productivity.
        </p>

        {/* Read More Button */}
        <div className="text-center mt-6">
          <a
            href="/about"
            className="text-red-600 font-semibold text-lg hover:underline"
          >
            Read More →
          </a>
        </div>

      </div>
    </section>
  );
}
