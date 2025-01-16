"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { AutoComplete } from "./AutoComplete";
import { GuestSelector } from "./GuestSelector";

export const SearchBar = () => {
  const router = useRouter();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSearch = () => {
    router.push(`/search`);
  };

  return (
    <div className="mt-8 bg-white shadow-md rounded-lg h-20 flex flex-col sm:flex-row items-center p-4 space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-5xl">
      <AutoComplete />

      <div className="h-9 border-l-2 border-gray-300"></div>

      <div className="flex flex-col text-left w-full sm:w-auto">
        <label className="flex items-center text-sm text-gray-600">
          <CiCalendar className="w-5 h-5 mr-1 text-primaryColor ml-2" /> Entrada
        </label>
        <input
          type="date"
          className="mt-1 p-2 rounded-md focus:outline-none"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="h-9 border-l-2 border-gray-300"></div>

      <div className="flex flex-col text-left w-full sm:w-auto">
        <label className="flex items-center text-sm text-gray-600">
          <CiCalendar className="w-5 h-5 mr-1 text-primaryColor ml-2" /> Saída
        </label>
        <input
          type="date"
          className="mt-1 p-2 rounded-md focus:outline-none"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <div className="h-9 border-l-2 border-gray-300"></div>

      <GuestSelector />

      <button
        className="mt-2 sm:mt-0 bg-primaryColor text-white px-6 py-2 rounded-3xl hover:bg-blue-700"
        onClick={handleSearch}
      >
        Pesquisar
      </button>
    </div>
  );
};
