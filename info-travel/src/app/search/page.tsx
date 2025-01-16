"use client";

import { useEffect, useState } from "react";
import { HotelCard } from "@/components/HotelCard";
import { SearchBar } from "@/components/SearchBar";
import { CiLogin } from "react-icons/ci";
import { LuHouse } from "react-icons/lu";
import InfiniteScroll from "react-infinite-scroll-component";
import { useApiContext } from "@/context/ApiContext";
import Link from "next/link";

export interface Hotel {
  id: number;
  price: string;
  name: string;
  stars: number;
  image: string;
}

export default function Search() {
  const { getHotels } = useApiContext();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function fetchHotels() {
      try {
        const data = await getHotels();
        setHotels((prevHotels) => [...prevHotels, ...data]);
        if (data.length === 0) {
          setHasMore(false);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchHotels();
  }, [page, getHotels]);

  const loadMoreHotels = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
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
        {loading ? (
          <p className="mt-8">Carregando hotéis...</p>
        ) : error ? (
          <p className="mt-8 text-red-500">{error}</p>
        ) : (
          <InfiniteScroll
            dataLength={hotels.length}
            next={loadMoreHotels}
            hasMore={hasMore}
            loader={<p>Carregando mais hotéis...</p>}
            endMessage={
              <p className="text-center">Não há mais hotéis para exibir.</p>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </main>
    </div>
  );
}
