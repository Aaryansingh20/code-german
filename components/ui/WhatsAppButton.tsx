import React from 'react';
import Image from 'next/image';
import whatsapp from "@/public/whatsapp.png"

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9667984165', '_blank');
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <Image
      src={whatsapp}
      alt=''
      height={250}
      width={250}
      className='w-full h-full object-contain'
      />
    </div>
  );
};

export default WhatsAppButton;
