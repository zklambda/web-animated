import React, { useEffect, useRef } from "react";

export const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-900 text-white opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience secure file transfers on Solana?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join our platform today and start sending files with unparalleled
            security and privacy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                window.location.href = "https://docs.zk-lokomotive.xyz";
              }}
              className="bg-[#feffaf] text-gray-900 px-8 py-4 rounded-md hover:bg-white transition-colors text-lg font-medium"
            >
              Learn More
            </button>
            <button
              onClick={() => {
                window.location.href = "mailto:info@zk-lokomotive.xyz";
              }}
              className="border border-white px-8 py-4 rounded-md hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              Schedule a Demo
            </button>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="text-2xl font-bold text-[#feffaf] mb-2">
                Developers
              </div>
              <p className="text-gray-300 mb-4">
                Integrate zkλ technology into your applications with our
                comprehensive API and SDKs.
              </p>
              <a
                href="https://docs.zk-lokomotive.xyz"
                className="text-[#feffaf] hover:underline inline-block mt-2"
              >
                View Documentation →
              </a>
            </div>

            <div className="border border-gray-700 rounded-lg p-6">
              <div className="text-2xl font-bold text-[#feffaf] mb-2">
                Enterprise
              </div>
              <p className="text-gray-300 mb-4">
                Custom solutions for businesses requiring secure file sharing
                with enhanced features.
              </p>
              <a
                href="mailto:info@zk-lokomotive.xyz"
                className="text-[#feffaf] hover:underline inline-block mt-2"
              >
                Contact Sales →
              </a>
            </div>

            <div className="border border-gray-700 rounded-lg p-6">
              <div className="text-2xl font-bold text-[#feffaf] mb-2">
                Individuals
              </div>
              <p className="text-gray-300 mb-4">
                Simple and secure file transfers for personal use with
                end-to-end encryption.
              </p>
              <a
                href="#"
                className="text-[#feffaf] hover:underline inline-block mt-2"
              >
                Coming Soon...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
