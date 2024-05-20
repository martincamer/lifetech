import React from "react";
import { Link } from "react-router-dom";

export const Contacto = () => {
  return (
    <section>
      {" "}
      <div className="flex flex-col items-center justify-center h-96 bg-gradient-to-r from-[#7C43BD] to-[#A2FF84]">
        {" "}
        <div className="flex flex-col items-center justify-center w-72 h-72 md:w-[1024px] md:h-auto bg-white border-2 border-black xsm:h-56 xsm:w-[610px]">
          {" "}
          <h2 className="text-left pl-6 pr-6 font-bold text-2xl py-6 md:w-[850px] max-md:text-xl max-md:text-center md:mt-4 md:pb-2 md:text-3xl xsm:mx-10 xsm:pr-10">
            {" "}
            No somos un partner tecnológico: somos parte de tu equipo.
            ¿Hablamos?{" "}
          </h2>{" "}
          <div className="mb-10 md:ml-[640px] xsm:ml-80 xsm:mb-3">
            {" "}
            <button className="font-bold text-base rounded-full text-indigo-900 bg-lime-200 w-44 h-10 border tracking-wide border-indigo-900 align-middle md:w-56 md:h-12 md:text-xl md:mb-5">
              {" "}
              <Link to={"/contacto"}>Contactar</Link>{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
