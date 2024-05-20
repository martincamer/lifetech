import React from "react";

const CapabilitiesSection = () => {
  return (
    <section>
      <div className="flex flex-col justify-between items-center pt-10 shadow-md bg-transparent">
        <div className="w-72 h-auto bg-[#2F2E41] items-center block mb-10 md:w-96 xsm:w-[430px]">
          <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 bg-[#D06D6A] items-center align-middle text-white text-center py-3 px-3 font-medium text-xl md:text-3xl md:py-5 xsm:text-3xl xsm:py-5">
            Nuestras capacidades
          </div>
        </div>
        <div className="flex flex-col justify-between items-center mb-12">
          <div className="mb-10 md:w-full md:px-32 xsm:px-20">
            <p className="text-center text-xl mx-10 md:text-left md:text-3xl xsm:text-3xl">
              Somos nerds, pero sabemos que con eso no alcanza.&nbsp;Nuestras
              capacidades incluyen tanto{" "}
              <span className="text-center font-bold text-xl text-[#6946B3] md:text-3xl xsm:text-3xl">
                hard skills
              </span>{" "}
              como{" "}
              <span className="text-center font-bold text-xl text-[#6946B3] md:text-3xl xsm:text-3xl">
                soft skills
              </span>
              .
            </p>
          </div>
          <div className="grid grid-cols-2 mx-12 py-4 gap-8 md:grid-cols-4 align-baseline items-end">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/conocimiento.svg"
                alt="conocimiento"
                width="129"
                height="75"
                loading="lazy"
                decoding="async"
              />
              <span className="text-center font-sans text-lg mx-5 my-2 xsm:text-2xl">
                Conocimiento técnico
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/autonomia.svg"
                alt="autonomia"
                width="80"
                height="110"
                loading="lazy"
                decoding="async"
              />
              <span className="text-center font-sans text-lg mx-5 my-2 xsm:text-2xl">
                Autonomía
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/metodologias.svg"
                alt="agiles"
                width="144"
                height="81"
                loading="lazy"
                decoding="async"
              />
              <span className="text-center font-sans text-lg mx-5 my-2 xsm:text-2xl">
                Metodologías ágiles
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/equipo.svg"
                alt="equipo"
                width="171"
                height="100"
                loading="lazy"
                decoding="async"
              />
              <span className="text-center font-sans text-lg mx-5 my-2 xsm:text-2xl">
                Trabajo en equipo
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/empatia.svg"
                alt="empatia"
                width="148"
                height="103"
                loading="lazy"
                decoding="async"
              />
              <span className="text-center font-sans text-lg mx-5 my-2 xsm:text-2xl">
                Empatía
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/free.svg"
                alt="respycomp"
                width="143"
                height="97"
                loading="lazy"
                decoding="async"
              />
              <span className="text-center font-sans text-lg mx-5 my-2 xsm:text-2xl">
                Responsabilidad y compromiso
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/comunicacion.svg"
                alt="comunicacion"
                width="124"
                height="123"
                loading="lazy"
                decoding="async"
              />
              <span className="text-center font-sans text-lg mx-5 my-2 xsm:text-2xl">
                Comunicación
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/aprendizaje.svg"
                alt="aprendizaje"
                width="143"
                height="85"
                loading="lazy"
                decoding="async"
              />
              <span className="text-center font-sans text-lg mx-5 my-2 xsm:text-2xl">
                Aprendizaje constante
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
