import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 opacity-0 translate-y-10 transition-all duration-1000 ease-out overflow-hidden"
      id="hero"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#feffaf] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900 font-semibold">
              Secure File Transfer Protocol
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Secure File Transfers on{' '}
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-900">
                Solana
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#feffaf]"></span>
            </span>{' '}
            Blockchain
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-700 leading-relaxed">
            zkλ provides end-to-end encrypted file transfers using elliptic curve cryptography and Solana's secure infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group bg-black/80 backdrop-blur-sm text-white px-8 py-4 rounded-xl 
              hover:bg-purple-700 transition-all duration-300 text-lg flex items-center justify-center 
              shadow-lg hover:shadow-xl hover:-translate-y-1 border border-black/10">
              Get Started 
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-black/10 px-8 py-4 rounded-xl 
              hover:bg-white/20 transition-all duration-300 text-lg shadow-lg hover:shadow-xl 
              hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 border border-black/5">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2">
              <div className="bg-black/5 backdrop-blur-sm rounded-xl p-6 border border-black/5">
                <div className="h-8 mb-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-sm text-gray-500 font-mono">secure-transfer.ts</div>
                </div>
                <div className="font-mono text-sm text-gray-700 whitespace-pre-wrap">
                  <span className="text-purple-600">// Sender</span>
                  <br />
                  const encryptedFile = <span className="text-blue-600">await</span> zkl.encrypt(
                  <br />
                  &nbsp;&nbsp;file,
                  <br />
                  &nbsp;&nbsp;recipientPubKey
                  <br />
                  );
                  <br />
                  <span className="text-blue-600">await</span> zkl.send(encryptedFile);
                  <br /><br />
                  <span className="text-purple-600">// Recipient</span>
                  <br />
                  const transfer = <span className="text-blue-600">await</span> zkl.getInbox();
                  <br />
                  const file = <span className="text-blue-600">await</span> zkl.decrypt(
                  <br />
                  &nbsp;&nbsp;transfer.file
                  <br />
                  );
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-8">Why Choose zkλ?</h3>
              <div className="space-y-6">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#feffaf]/20 to-purple-200/20 
                    rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-black/5 
                    hover:border-black/10 transition-all duration-300 shadow-sm hover:shadow-md">
                    <span className="text-lg font-medium text-gray-900">End-to-end encryption for maximum privacy</span>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#feffaf]/20 to-purple-200/20 
                    rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-black/5 
                    hover:border-black/10 transition-all duration-300 shadow-sm hover:shadow-md">
                    <span className="text-lg font-medium text-gray-900">Built on Solana's secure blockchain infrastructure</span>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#feffaf]/20 to-purple-200/20 
                    rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-black/5 
                    hover:border-black/10 transition-all duration-300 shadow-sm hover:shadow-md">
                    <span className="text-lg font-medium text-gray-900">User-controlled cryptographic keys</span>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#feffaf]/20 to-purple-200/20 
                    rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-black/5 
                    hover:border-black/10 transition-all duration-300 shadow-sm hover:shadow-md">
                    <span className="text-lg font-medium text-gray-900">Tamper-proof file transfer verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};