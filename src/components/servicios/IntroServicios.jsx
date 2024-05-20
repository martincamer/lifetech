import React from "react";

const IntroServicios = () => {
  return (
    <section className="pt-8 pb-8 shadow-md bg-[#F9F9F9]">
      <div className="flex flex-col justify-between items-center md:flex-row md:gap-6 px-20 max-md:px-5">
        <div className="md:flex-col md:w-auto md:py-10">
          <div className="text-center mx-7 max-md:mx-1 mb-4 md:text-left">
            <h1 className="text-5xl text-[#D06D6A] font-bold md:text-6xl xsm:text-6xl">
              Conoce nuestros servicios
            </h1>
          </div>
          <div className="mb-8 md:pt-5">
            <p className="text-center mx-7 text-lg md:text-left md:text-2xl md:-mr-10 xsm:text-2xl xsm:text-left">
              Ponte sobre nuestros servicios con conocimiento técnico y
              habilidades humanas para el desarrollo de tus soluciones de
              software.
            </p>
          </div>
        </div>
        <div className="mb-10 md:pt-10 md:w-[1100px] xsm:w-96">
          <img
            src="/intro-3.svg"
            alt="svg"
            width="1100"
            height="666"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="mb-8 xsm:mx-20">
        <p className="text-center font-bold text-xl text-[#6946B3] mx-10 md:text-3xl xsm:text-3xl">
          Conoce mas sobre nuestros servicios.
        </p>
      </div>
    </section>
  );
};

export default IntroServicios;
