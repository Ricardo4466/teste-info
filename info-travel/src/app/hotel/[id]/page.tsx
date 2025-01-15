"use client";
import { useApiContext } from "@/context/ApiContext";
import { useEffect, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CiLogin } from "react-icons/ci";
import { LuHouse } from "react-icons/lu";

const HotelPage = () => {
  const [hotelId, setHotelId] = useState<string | null>(null);
  const [hotelDetails, setHotelDetails] = useState<any | null>(null);
  const { getHotelById } = useApiContext();

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    setHotelId(id);

    if (id) {
      getHotelById(Number(id))
        .then((data) => {
          setHotelDetails(data);
        })
        .catch((error) => {
          console.error("Error fetching hotel details:", error);
        });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-xl font-poppins font-bold text-textColor">
          infotravel
        </h1>
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-sm flex items-center text-textColor hover:underline"
          >
            <LuHouse className="mr-1" /> Pagina Inicial
          </a>
          <a
            href=""
            className="text-sm flex items-center text-textColor hover:underline"
          >
            <CiLogin className="mr-1" /> Iniciar Sessão
          </a>
        </div>
      </header>

      <main className="flex flex-col items-center justify-start h-full mt-10">
        <SearchBar />
      </main>
    </div>
  );
};

export default HotelPage;
