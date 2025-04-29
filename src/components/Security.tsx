import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Key, FileCheck, UserCheck } from 'lucide-react';

export const Security: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const securityFeatures = [
    {
      icon: <ShieldCheck className="text-purple-700" size={24} />,
      title: "Robust Encryption",
      description: "Files are encrypted using Elliptic Curve Integrated Encryption Scheme (ECIES), a proven cryptographic standard."
    },
    {
      icon: <Key className="text-purple-700" size={24} />,
      title: "Key Management",
      description: "Private keys are encrypted with a user-chosen password using Argon2id, a state-of-the-art key derivation function."
    },
    {
      icon: <FileCheck className="text-purple-700" size={24} />,
      title: "File Integrity",
      description: "SHA-512 fingerprints verify file integrity throughout the transfer process, preventing tampering."
    },
    {
      icon: <UserCheck className="text-purple-700" size={24} />,
      title: "Sender Verification",
      description: "Cryptographic signatures verify the sender's identity, preventing impersonation attempts."
    }
  ];
  
  return (
    <section 
      ref={sectionRef} 
      id="security" 
      className="py-24 bg-white opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Security & Privacy By Design</h2>
            <p className="text-lg text-gray-600 mb-6">
              zkλ is built with security and privacy as core principles. We combine proven cryptographic techniques with blockchain technology to ensure your files remain private and secure.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Unlike traditional file transfer services that can access your files or metadata, zkλ's end-to-end encryption and user-controlled keys ensure that no one but the intended recipient can access the file contents.
            </p>
            
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Traditional vs. zkλ File Transfer</h3>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <div className="font-medium text-red-600 mb-1">Traditional Services</div>
                  <div className="bg-white p-3 rounded border border-red-100 text-gray-600 text-sm">
                    ❌ Service providers can access file contents<br />
                    ❌ Metadata exposed to third parties<br />
                    ❌ Centralized points of failure<br />
                    ❌ User has limited control over encryption
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="font-medium text-green-600 mb-1">zkλ Approach</div>
                  <div className="bg-white p-3 rounded border border-green-100 text-gray-600 text-sm">
                    ✓ End-to-end encryption prevents third-party access<br />
                    ✓ Minimal metadata stored on blockchain<br />
                    ✓ Decentralized architecture eliminates single points of failure<br />
                    ✓ User controls all cryptographic keys
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-[#feffaf] bg-opacity-30 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Security Features</h3>
              <div className="space-y-6">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4 bg-white p-5 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};