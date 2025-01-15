import { useState } from "react";
import { LuUsers } from "react-icons/lu";

export const GuestSelector = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleIncrease = (set: (value: number) => void, value: number) =>
    set(value + 1);
  const handleDecrease = (set: (value: number) => void, value: number) => {
    if (value > 0) set(value - 1);
  };

  return (
    <div className="relative w-72">
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex flex-col text-left w-full sm:w-auto"
      >
        <label className="flex items-center text-sm text-gray-600">
          <LuUsers className="w-5 h-5 mr-1 text-primaryColor ml-2" /> Hóspedes
        </label>
        <span className="flex text-gray-700 text-sm font-bold space-x-4 mt-1">
          <span className="flex mr-2">{adults} </span>Adultos,
          <span className="flex mr-2">{children} </span>Quartos
        </span>
      </div>

      {isDropdownOpen && (
        <div className="flex-col absolute z-50 mt-6 w-56 bg-white border rounded-lg shadow-lg p-4">
          <div className="flex flex-col mb-4">
            <span className="text-sm font-bold text-gray-700 mb-2 text-left">
              Adultos
            </span>
            <div className="flex items-center justify-between w-full">
              <button
                onClick={() => handleIncrease(setAdults, adults)}
                className="w-8 h-8 flex items-center justify-center text-blue-500 border border-gray-300 rounded-full hover:bg-gray-100"
              >
                +
              </button>
              <span className="text-sm font-bold">{adults}</span>
              <button
                onClick={() => handleDecrease(setAdults, adults)}
                className="w-8 h-8 flex items-center justify-center text-blue-500 border border-gray-300 rounded-full hover:bg-gray-100"
              >
                -
              </button>
            </div>
          </div>

          <div className="border-t border-gray-300 w-full my-4"></div>

          <div className="flex flex-col mb-4">
            <span className="text-sm font-bold text-gray-700 mb-2 text-left">
              Crianças
            </span>
            <div className="flex items-center justify-between w-full">
              <button
                onClick={() => handleIncrease(setChildren, children)}
                className="w-8 h-8 flex items-center justify-center text-blue-500 border border-gray-300 rounded-full hover:bg-gray-100"
              >
                +
              </button>
              <span className="text-sm font-bold">{children}</span>
              <button
                onClick={() => handleDecrease(setChildren, children)}
                className="w-8 h-8 flex items-center justify-center text-blue-500 border border-gray-300 rounded-full hover:bg-gray-100"
              >
                -
              </button>
            </div>
          </div>

          <div className="border-t border-gray-300 w-full my-4"></div>
          <div className="text-right">
            <button
              onClick={() => setIsDropdownOpen(false)}
              className="px-4 py-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-100 text-sm font-medium"
            >
              Aplicar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
