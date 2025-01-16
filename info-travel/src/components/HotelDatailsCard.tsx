import { useState } from "react";
import Image from "next/image";

import { LuMapPin } from "react-icons/lu";
import { RiCloseCircleLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface Room {
  roomType: {
    name: string;
  };
  price: {
    currency: string;
    amount: number;
  };
  cancellationPolicies: {
    refundable: boolean;
  };
}

interface HotelData {
  hotel: {
    name: string;
    address: string;
    stars: number;
    image: string;
    description: string;
  };
  rooms: Room[];
}

interface HotelDetailsCardProps {
  hotelData: HotelData | null;
}

export const HotelDetailsCard = ({ hotelData }: HotelDetailsCardProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!hotelData) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600">Carregando detalhes do hotel...</p>
      </div>
    );
  }

  const handleReservation = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 4000);
  };

  return (
    <div className="relative">
      {showConfirmation && (
        <div className="fixed inset-0 bg-overlay bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-transparent p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex justify-center items-center">
                <IoMdCheckmarkCircleOutline className="w-6 h-6" />
              </div>
            </div>
            <h2 className="text-5xl font-medium text-white">Obrigado!</h2>
            <p className="text-white mt-2 text-2xl">Reserva realizada com sucesso.</p>
          </div>
        </div>
      )}
      <div className="bg-white shadow-lg rounded-lg mt-6 w-full max-w-5xl">
        <div className="grid grid-cols-3 gap-4 p-6">
          <div className="col-span-1">
            <Image
              src={hotelData.hotel.image}
              alt={hotelData.hotel.name}
              width={400}
              height={400}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="font-poppins col-span-2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-gray-800">
              {hotelData.hotel.name}
            </h1>
            <p className="flex items-center text-sm text-gray-500 mt-2">
              <LuMapPin className="w-5 h-5 mr-1" />
              {hotelData.hotel.address}
            </p>
            <div className="flex items-center mt-2">
              <span className="text-yellow text-lg">
                {"★".repeat(Math.round(hotelData.hotel.stars))}
              </span>
            </div>
            <p className="text-gray-600 text-xs mt-2">
              {hotelData.hotel.description.replace(/<br\/>/g, " ")}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-poppins font-semibold text-gray-800 px-6 pt-4">
            Quartos disponíveis
          </h2>
          <div className="mt-4 px-6 pb-4 space-y-4">
            {hotelData.rooms.map((room, index) => (
              <div
                key={index}
                className="flex font-poppins justify-between items-center p-2 rounded-xl bg-gray-grayLight shadow-sm"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {room.roomType.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    {room.cancellationPolicies.refundable ? (
                      <IoMdCheckmarkCircleOutline className="text-primaryColor  mr-1" />
                    ) : (
                      <RiCloseCircleLine className="text-red mr-1" />
                    )}
                    <p
                      className={`text-sm font-medium ${
                        room.cancellationPolicies.refundable
                          ? "text-primaryColor"
                          : "text-red"
                      }`}
                    >
                      {room.cancellationPolicies.refundable
                        ? "Cancelamento gratuito"
                        : "Sem cancelamento gratuito"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center ">
                  <div className="flex flex-col items-end space-y-1 mr-16">
                    <p className="text-lg font-semibold text-primaryColor">
                      R$ {room.price.amount.toFixed(2)}{" "}
                      <span className="text-sm">/ noite</span>
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                      Pagamento no Hotel
                    </p>
                  </div>
                  <button
                    className="mt-2 mr-5 sm:mt-0 bg-primaryColor text-xs text-white px-6 py-2 rounded-3xl hover:bg-blue-700"
                    onClick={handleReservation}
                  >
                    Reservar Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
