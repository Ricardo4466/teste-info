import { SearchBar } from "@/components/SearchBar";
import { CiLogin } from "react-icons/ci";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-xl font-poppins font-bold text-textColor">
          infotravel
        </h1>
        <a
          href="#"
          className="text-sm flex items-center text-textColor hover:underline"
        >
          <CiLogin className="mr-1" /> Iniciar Sessão
        </a>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center ">
        <h2 className="text-3xl sm:text-4xl font-poppins font-semibold text-gray-900">
          Os melhores <span className="text-primaryColor">Hoteis</span> e{" "}
          <span className="text-primaryColor">Destinos</span>
          <br /> para sua viagem
        </h2>

        <SearchBar />
      </main>
    </div>
  );
}
