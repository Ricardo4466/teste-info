"use client";
import { useApiContext } from "@/context/ApiContext";
import { useEffect, useState } from "react";
import { CiLogin } from "react-icons/ci";
import { SearchBar } from "@/components/SearchBar";
import { LuHouse } from "react-icons/lu";
import { HotelDetailsCard } from "@/components/HotelDatailsCard";
import Link from "next/link";

interface Hotel {
  hotel: {
    id: number;
    name: string;
    image: string;
    description: string;
    location: string;
  };
  rooms: {
   
    id: number;
    type: string;
    capacity: number;
    price: number;
  }[];

  lowestPrice: {
    amount: number;
  };
  stars: number;

}

const HotelPage = () => {
  const [hotelDetails, setHotelDetails] = useState<Hotel | null>(null);
  const { getHotelById } = useApiContext();

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];

    if (id) {
      fetchHotelDetails(Number(id));
    }
  }, []);

  const fetchHotelDetails = async (id: number) => {
    try {
      const response = await getHotelById(id);
      setHotelDetails(response);
    } catch (error) {
      console.error("Error fetching hotel details:", error);
    }
  };

  return (
    <div className="font-poppins min-h-screen flex flex-col bg-gray-grayLight">
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-xl font-poppins font-bold text-textColor">
          infotravel
        </h1>
        <div className="flex space-x-4">
          <Link
            href="/"
            className="text-sm flex items-center text-textColor hover:underline"
          >
            <LuHouse className="mr-1" /> Pagina Inicial
          </Link>
          <Link
            href=""
            className="text-sm flex items-center text-textColor hover:underline"
          >
            <CiLogin className="mr-1" /> Iniciar Sessão
          </Link>
        </div>
      </header>

      <main className="flex flex-col items-center justify-start h-full mt-10">
        <SearchBar />
        {hotelDetails && <HotelDetailsCard hotelData={hotelDetails} />}
      </main>
    </div>
  );
};

export default HotelPage;
