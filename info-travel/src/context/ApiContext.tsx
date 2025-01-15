"use client";
import { createContext, useContext, ReactNode } from "react";

interface ApiContextType {
  getHotels: () => Promise<any[]>;
  getSuggestions: () => Promise<any>;
  getHotelById: (id: number) => Promise<any>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const PORT = "http://localhost:3333";

  const getHotels = async () => {
    const response = await fetch(`${PORT}/hotels`);
    return response.json();
  };

  const getSuggestions = async () => {
    const response = await fetch(`${PORT}/suggestions`);
    return response.json();
  };

  const getHotelById = async (id: number) => {
    const response = await fetch(`${PORT}/hotels/${id}`);
    return response.json();
  };

  return (
    <ApiContext.Provider value={{ getHotels, getSuggestions, getHotelById }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within an ApiProvider");
  }
  return context;
};
