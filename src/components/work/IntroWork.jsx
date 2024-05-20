import React from "react";

export const IntroWork = () => {
  return (
    <section>
      <div className="flex flex-col justify-between items-center pt-8 shadow-md bg-gradient-to-b from-white to-[#F1FFDE] md:pt-16 md:pb-14 xsm:px-28">
        <div className="w-72 h-auto bg-[#2F2E41] items-center block mb-8 md:mb-12">
          <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 bg-[#D06D6A] items-center text-slate-50 text-center text-xl py-3 px-3">
            ¡Te estamos buscando!
          </div>
        </div>
        <div className="text-4xl text-center mx-10 mb-6 md:mb-14">
          <h1 className="text-5xl text-[#D06D6A] font-bold md:text-7xl">
            Conviértete en un Lifenerdo
          </h1>
        </div>
        <div className="mb-8 md:w-[900px] md:mb-16">
          <p className="text-center mx-10 text-lg md:text-2xl">
            En Lifetech siempre estamos en la búsqueda de nuevos talentos que
            quieran sumarse a un equipo que está en permanente expansión.
          </p>
        </div>
        <div className="mb-8 md:w-[700px]">
          <p className="text-center font-bold text-xl text-[#6946B3] mx-10 md:text-3xl xsm:text-2xl">
            Si te gusta ir siempre un paso más allá, escríbenos.
          </p>
        </div>
      </div>
    </section>
  );
};
