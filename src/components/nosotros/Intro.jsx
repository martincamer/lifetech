import React from "react";

export const Intro = () => {
  return (
    <section>
      <div className="flex flex-col justify-between items-center pt-8 shadow-md bg-gradient-to-b from-white to-[#F1FFDE] md:pt-16 md:pb-16 pb-8">
        <div className="text-4xl text-center mx-14 mb-8 md:text-6xl md:font-normal md:mb-12 md:tracking-wide xsm:text-6xl xsm:mx-28">
          Somos <span className="text-[#D06D6A] font-extrabold">Lifetech</span>,
          un gusto conocerte
        </div>
        <div className="mb-8 md:w-[810px] md:mb-14">
          <p className="text-center mx-10 text-lg md:text-2xl xsm:text-2xl xsm:mx-24">
            Ayudamos a las empresas no tecnológicas a desarrollar soluciones de
            software que cumplan con sus objetivos trabajando con autonomía y
            compromiso.
          </p>
        </div>
        <div className="w-72 h-auto bg-[#2F2E41] items-center block mb-8 md:w-96 xsm:w-[490px]">
          <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 bg-[#D06D6A] items-center align-middle text-slate-50 text-center py-4 px-3 md:text-xl xsm:text-2xl xsm:tracking-wide">
            Así llegamos a nuestras soluciones
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row xsm:flex-row">
          <div className="flex flex-row items-end mt-5 md:gap-10 md:mr-5 xsm:gap-10 xsm:mr-5">
            <div className="mr-3 ml-6">
              <img
                src="/curiosidad.svg"
                alt="curiosidad"
                width="115"
                height="180"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="mx-2 mb-10 md:mb-16 xsm:mb-16">
              <img
                src="/signo-mas.svg"
                alt="mas"
                width="35"
                height="34"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="ml-2 mr-6">
              <img
                src="/codigo.svg"
                alt="creatividad"
                width="128"
                height="147"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="flex flex-row align-middle items-center">
            <div className="m-4 md:-rotate-90 xsm:-rotate-90">
              <img
                src="/arrow-2.svg"
                alt="flechader"
                width="30"
                height="66"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="m-4 md:hidden xsm:hidden">
              <img
                src="/arrow-3.svg"
                alt="flechaizq"
                width="36"
                height="64"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="mb-3 mt-4 md:ml-10 xsm:ml-10">
            <img
              src="/nave.svg"
              alt="innovacion"
              width="185"
              height="195"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
