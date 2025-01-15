import { useApiContext } from "@/context/ApiContext";
import React, { useState, useCallback } from "react";
import { LuMapPin } from "react-icons/lu";

export const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { getSuggestions } = useApiContext();

  const fetchSuggestions = useCallback(
    async (searchTerm: string) => {
      if (searchTerm) {
        try {
          const response = await getSuggestions();
          setSuggestions(response);
        } catch (error) {
          console.error("Erro ao buscar sugestões:", error);
        }
      } else {
        setSuggestions([]);
      }
    },
    [getSuggestions]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    fetchSuggestions(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: any) => {
    setQuery(suggestion.name);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full text-left max-w-md">
      <label className="flex items-center text-sm text-gray-600">
        <LuMapPin className="w-25 h-25 mr-1 text-primaryColor" />
        Destino
      </label>
      <input
        type="text"
        id="destination"
        placeholder="Digite o destino"
        value={query}
        onChange={handleInputChange}
        className="mt-1 p-2 rounded-md focus:outline-none w-full"
      />
      {showSuggestions && suggestions.length > 0 && (
        <div
          className="absolute z-10 w-full mt-4 bg-white border rounded-md shadow-lg overflow-y-auto"
          style={{ maxHeight: "200px" }}
        >
          {(suggestions as { name: string; region: string }[]).map(
            (suggestion, index) => (
              <div
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer flex items-center space-x-4"
              >
                <div className="w-25 h-25 text-primaryColor flex items-center justify-center">
                  <LuMapPin />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">{suggestion.name}</span>
                  <span className="text-sm text-gray-600">
                    {suggestion.region}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};
