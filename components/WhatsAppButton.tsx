"use client"
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '6282253129334'; 
  // Pesan yang akan otomatis muncul di chat WhatsApp
  const message = `Halo mas saya mau konsultasi tentang`;
  
  const handleClick = () => {
    // Format URL WhatsApp dengan text yang sudah diisi
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Chat WhatsApp"
      >
        {/* Icon WhatsApp dengan badge notifikasi */}
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          
          {/* Badge Notifikasi Merah - di icon */}
          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full h-2.5 w-2.5 animate-pulse"></span>
        </div>
        
        {/* Tooltip (opsional) */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat via WhatsApp
        </span>
      </button>
    </>
  );
}