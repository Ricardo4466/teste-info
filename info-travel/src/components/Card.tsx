import { useEffect, useState } from "react";
import Image from "next/image";

export const HotelCard = ({ hotel }: { hotel: any }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const handleViewMore = () => {
    if (hotel?.id) {
 
      window.location.href = `/hotel/${hotel.id}`;
    } else {
      console.error("Hotel ID is undefined:", hotel); 
    }
  };

  if (!isClient) return null; 

  return (
    <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden font-sans">
      <div className="relative h-44">
        <Image
          src={hotel.hotel.image}
          alt={hotel.hotel.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent rounded-xl"></div>
        <p className="absolute bottom-2 left-2 text-white text-xl font-semibold">
          R$ {hotel.lowestPrice.amount}
          <span className="text-sm font-normal">/ noite</span>
        </p>
      </div>
      <div className="p-4">
        <h3 className="text-lg text-gray-800 font-bold mb-2">
          {hotel.hotel.name}
        </h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">
                ★
              </span>
            ))}
          </div>
          <button
            onClick={handleViewMore} 
            className="w-32 bg-blue-500 text-white py-2 rounded-full shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105 text-sm font-medium"
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
};
