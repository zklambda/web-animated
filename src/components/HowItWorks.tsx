import React, { useEffect, useRef } from 'react';
import { Lock, Upload, Download, Shield } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRefs = Array(4).fill(0).map(() => useRef<HTMLDivElement>(null));
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            if (entry.target === sectionRef.current) {
              stepsRefs.forEach((ref, index) => {
                if (ref.current) {
                  setTimeout(() => {
                    ref.current?.classList.add('opacity-100', 'translate-x-0');
                  }, 300 + index * 200);
                }
              });
            }
          }
        });
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
  
  const steps = [
    {
      number: "01",
      icon: <Lock className="w-8 h-8 stroke-2" />,
      title: "Generate Keys",
      description: "Users create an EC keypair client-side and link it to their Solana wallet address, establishing their identity on the platform.",
      code: `const keypair = await zkl.generateKeypair();
await zkl.linkToWallet(keypair, wallet);`
    },
    {
      number: "02",
      icon: <Shield className="w-8 h-8 stroke-2" />,
      title: "Prepare Transfer",
      description: "The sender encrypts the file using ECIES with the recipient's public key, ensuring only they can decrypt it.",
      code: `const encrypted = await zkl.encrypt(
  file,
  recipientPubKey
);`
    },
    {
      number: "03",
      icon: <Upload className="w-8 h-8 stroke-2" />,
      title: "Upload & Notify",
      description: "The encrypted file is uploaded to decentralized storage, and a transfer record is sent to the recipient's inbox on Solana.",
      code: `const transfer = await zkl.upload(encrypted);
await zkl.notify(transfer, recipient);`
    },
    {
      number: "04",
      icon: <Download className="w-8 h-8 stroke-2" />,
      title: "Decrypt & Verify",
      description: "The recipient verifies the sender's identity and file integrity before decrypting it with their private key.",
      code: `const verified = await zkl.verify(transfer);
const file = await zkl.decrypt(verified);`
    }
  ];
  
  return (
    <section 
      id="how-it-works" 
      className="relative py-32 bg-gray-50 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#feffaf] rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 opacity-0 translate-y-10 transition-all duration-1000 ease-out relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            How zkλ Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our secure file transfer protocol combines elliptic curve cryptography with Solana's blockchain infrastructure for maximum security and privacy.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              ref={stepsRefs[index]}
              className={`group flex flex-col md:flex-row gap-8 items-start mb-16 last:mb-0 opacity-0 ${
                index % 2 === 0 ? 'md:-translate-x-10' : 'md:translate-x-10'
              } transition-all duration-700 ease-out`}
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white flex flex-col items-center justify-center 
                shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
                <div className="text-gray-900 mb-1">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-gray-400">{step.number}</div>
              </div>

              <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl 
                transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#feffaf]/0 via-[#feffaf]/5 to-[#feffaf]/0 
                    transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500"></div>
                  <div className="relative z-10">
                    <code className="text-gray-700">{step.code}</code>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block h-20 w-px bg-gray-200 mx-auto mt-8 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[#feffaf]"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-purple-700 
            transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
};