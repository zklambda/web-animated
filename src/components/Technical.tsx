import React, { useState, useEffect, useRef } from 'react';

export const Technical: React.FC = () => {
  const [activeTab, setActiveTab] = useState('architecture');
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
  
  const tabs = [
    { id: 'architecture', label: 'Architecture' },
    { id: 'encryption', label: 'Encryption' },
    { id: 'programs', label: 'Solana Programs' },
    { id: 'flow', label: 'User Flow' }
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="technical" 
      className="py-24 bg-gray-50 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delve into the technical architecture powering zkλ's secure file transfer solution.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap border-b border-gray-200 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-purple-700 border-b-2 border-purple-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            {activeTab === 'architecture' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">System Architecture</h3>
                <p className="text-gray-600 mb-6">
                  zkλ utilizes a combination of client-side encryption, decentralized storage, and Solana blockchain programs to create a secure file transfer system.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6 font-mono text-sm leading-relaxed">
                  <div className="font-bold mb-2 text-purple-700">Core Components:</div>
                  <pre className="whitespace-pre-wrap">
{`1. Client Application
   ├── Key Management
   ├── File Encryption/Decryption
   └── Blockchain Interaction

2. Solana Blockchain
   ├── Key Registry Program
   └── Inbox Program

3. Decentralized Storage
   └── Encrypted File Storage`}
                  </pre>
                </div>
                
                <p className="text-gray-600">
                  The architecture ensures that files are encrypted before leaving the user's device, cryptographic keys remain under user control, and blockchain integration provides secure identity verification and transfer notifications.
                </p>
              </div>
            )}
            
            {activeTab === 'encryption' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Encryption Technology</h3>
                <p className="text-gray-600 mb-6">
                  zkλ employs state-of-the-art cryptographic methods to secure files and user identities.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-2">File Encryption (ECIES)</h4>
                    <p className="text-gray-600 mb-3">
                      Elliptic Curve Integrated Encryption Scheme combines the strength of elliptic curve cryptography with symmetric encryption:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                      <ol className="list-decimal pl-4 space-y-2">
                        <li>Generate ephemeral key pair and shared secret using ECDH</li>
                        <li>Derive encryption key using KDF</li>
                        <li>Encrypt file with AES-GCM using derived key</li>
                        <li>Include ephemeral public key with ciphertext</li>
                        <li>Recipient uses private key + ephemeral public key to derive same secret</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-2">Key Protection (Argon2id)</h4>
                    <p className="text-gray-600 mb-3">
                      User's EC private keys are protected using password-based encryption with Argon2id key derivation:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                      <ol className="list-decimal pl-4 space-y-2">
                        <li>User provides password</li>
                        <li>Generate cryptographically secure salt</li>
                        <li>Derive encryption key using Argon2id(password, salt, params)</li>
                        <li>Encrypt EC private key with AES-GCM using derived key</li>
                        <li>Store encrypted key + salt + params (not the password)</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'programs' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Solana Programs</h3>
                <p className="text-gray-600 mb-6">
                  zkλ utilizes two custom Solana programs to manage user identities and secure messaging.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-bold mb-3">Key Registry Program</h4>
                    <p className="text-gray-600 mb-3">
                      The Key Registry program maintains the association between EC keypairs and Solana identities:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
{`struct ZklAccount {
    discriminator: [u8; 8],	// Required by Solana
    authority: Pubkey,
    zkl_data: ZklAccountData,
    bump: u8,
}

struct ZklAccountData {
    ec_pubkey: 	[u8; 33], // compressed EC pubkey
    zkl_sm:  	[u8; 64], // message signed with zkλ
    solana_sm: 	[u8; 64], // message signed with Solana identity
    index: 	u32
}`}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-3">Inbox Program</h4>
                    <p className="text-gray-600 mb-3">
                      The Inbox program manages notifications for incoming file transfers:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
{`struct InboxAccount { 
    recipient_ec_pubkey: [u8, 33], // compressed EC pubkey
    recipient_wallet:    Pubkey,   // recipient's Solana wallet 
    messages:            Vec<FileTxRecord>,
    bump: u8
}

struct FileTxRecord { 
    sender_ec_pubkey: [u8; 33],  // compressed EC pubkey
    encrypted_link:   string,    // E(linkToFileOnDSP)
    ephemeral_pubkey: [u8; 33],  // for decrypting encrypted_link
    timestamp:        i64
}`}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'flow' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">User Flow</h3>
                <p className="text-gray-600 mb-6">
                  The complete process flow for onboarding and file transfers in the zkλ system.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-bold mb-3">User Onboarding</h4>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                      <ol className="list-decimal pl-4 space-y-2">
                        <li>User creates EC keypair client-side</li>
                        <li>User sets application password for key encryption</li>
                        <li>Private key encrypted with password-derived key using Argon2id</li>
                        <li>User links EC keypair to Solana address:
                          <ul className="list-disc pl-6 mt-1">
                            <li>Sign message with EC private key</li>
                            <li>Sign message with Solana wallet</li>
                            <li>Create PDA with signed messages</li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-3">File Transfer</h4>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                      <div className="mb-3"><span className="font-bold">Sender:</span></div>
                      <ol className="list-decimal pl-4 space-y-2">
                        <li>Locate recipient's EC public key via Key Registry</li>
                        <li>Verify recipient's ownership of EC key</li>
                        <li>Encrypt file using ECIES with recipient's public key</li>
                        <li>Upload encrypted file to decentralized storage</li>
                        <li>Encrypt storage link with ECIES</li>
                        <li>Create and sign FileTxRecord</li>
                        <li>Send FileTxRecord to recipient's Inbox PDA</li>
                      </ol>
                      
                      <div className="mt-6 mb-3"><span className="font-bold">Recipient:</span></div>
                      <ol className="list-decimal pl-4 space-y-2">
                        <li>Monitor Inbox PDA for new transfers</li>
                        <li>Verify sender's signature on FileTxRecord</li>
                        <li>Decrypt storage link using EC private key</li>
                        <li>Download encrypted file from storage</li>
                        <li>Decrypt file using EC private key</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};