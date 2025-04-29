import React, { useEffect, useRef } from 'react';
import { Shield, Lock, FileKey, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  const featureRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );
    
    featureRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => {
      featureRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  
  const features = [
    {
      icon: <Lock className="stroke-2" size={28} />,
      title: "End-to-End Encryption",
      description: "Files are encrypted using Elliptic Curve Integrated Encryption Scheme (ECIES) ensuring only the intended recipient can access the content.",
      delay: 100
    },
    {
      icon: <Shield className="stroke-2" size={28} />,
      title: "Blockchain Security",
      description: "Built on Solana's secure and fast blockchain infrastructure, providing tamper-proof record of all file transfers.",
      delay: 200
    },
    {
      icon: <FileKey className="stroke-2" size={28} />,
      title: "User-Controlled Keys",
      description: "All cryptographic keys are created and managed by users, ensuring complete control over their digital identity and file access.",
      delay: 300
    },
    {
      icon: <Zap className="stroke-2" size={28} />,
      title: "Instant Verification",
      description: "Automatic verification of file integrity and sender authenticity through cryptographic signatures and blockchain records.",
      delay: 400
    }
  ];
  
  return (
    <section className="bg-white" id="features">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Key Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            zkλ combines cutting-edge cryptography with blockchain technology to deliver a secure, private, and user-controlled file transfer experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              ref={featureRefs[index]}
              className={`group bg-white rounded-xl p-8 shadow-lg border border-gray-100 
                opacity-0 translate-y-10 transition-all duration-700 ease-out
                hover:shadow-2xl hover:border-[#feffaf] hover:-translate-y-1
                hover:bg-gradient-to-b hover:from-white hover:to-[#feffaf]/5`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className="w-16 h-16 bg-[#feffaf] rounded-2xl flex items-center justify-center mb-6 
                group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 
                shadow-lg">
                <div className="text-gray-900 transform transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-900 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6 flex items-center justify-end">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center
                  group-hover:bg-[#feffaf] transition-colors">
                  <svg 
                    className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors transform 
                      group-hover:translate-x-1 duration-300"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ready to experience next-level security?
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Join thousands of users who trust zkλ for their secure file transfer needs. 
                Our platform combines the best of blockchain technology with state-of-the-art encryption.
              </p>
              <button className="bg-[#feffaf] text-gray-900 px-8 py-4 rounded-lg 
                hover:bg-white transition-colors duration-300 font-medium
                shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started Now
              </button>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#feffaf] opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#feffaf] opacity-10 rounded-full blur-3xl"></div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 relative z-10">
                <div className="flex items-center mb-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <code className="text-sm font-mono text-gray-300 block">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">secureTransfer</span> = {" "}
                  <span className="text-purple-400">await</span> zkl.send(
                  <br />
                  &nbsp;&nbsp;encryptedFile,
                  <br />
                  &nbsp;&nbsp;recipientPubKey
                  <br />
                  );
                </code>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 border border-gray-700 hover:border-[#feffaf] transition-colors group">
              <h4 className="text-[#feffaf] text-xl font-bold mb-4">For Developers</h4>
              <p className="text-gray-300 mb-6">
                Integrate secure file transfers into your applications with our comprehensive API and SDKs.
              </p>
              <a href="#" className="inline-flex items-center text-[#feffaf] hover:text-white transition-colors">
                View Documentation
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 border border-gray-700 hover:border-[#feffaf] transition-colors group">
              <h4 className="text-[#feffaf] text-xl font-bold mb-4">For Enterprise</h4>
              <p className="text-gray-300 mb-6">
                Custom solutions and dedicated support for businesses requiring secure file sharing at scale.
              </p>
              <a href="#" className="inline-flex items-center text-[#feffaf] hover:text-white transition-colors">
                Contact Sales
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 border border-gray-700 hover:border-[#feffaf] transition-colors group">
              <h4 className="text-[#feffaf] text-xl font-bold mb-4">For Individuals</h4>
              <p className="text-gray-300 mb-6">
                Simple and secure file transfers for personal use with end-to-end encryption built-in.
              </p>
              <a href="#" className="inline-flex items-center text-[#feffaf] hover:text-white transition-colors">
                Get Started
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};