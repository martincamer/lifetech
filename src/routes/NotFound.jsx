import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-screen justify-center items-center flex flex-col gap-4 bg-gray-50">
      <p className="font-extrabold text-6xl text-[#D06D6A] max-md:text-4xl text-center">
        PAGINA NO ENCONTRADA ERROR 404
      </p>
      <Link className="text-xl font-semibold text-[#6946B3] underline">
        Volver al inicio
      </Link>
    </div>
  );
};
