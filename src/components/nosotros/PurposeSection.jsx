import React from "react";

const PurposeSection = () => {
  return (
    <section>
      <div className="flex flex-col justify-between items-center pt-14 bg-transparent">
        <div className="w-72 h-auto bg-[#2F2E41] items-center block mb-10 md:w-96 xsm:w-[430px]">
          <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 bg-[#D06D6A] items-center align-middle text-white text-center py-3 px-3 font-medium text-xl md:text-3xl md:py-5 xsm:text-3xl xsm:py-5">
            Nuestro propósito
          </div>
        </div>
        <div className="md:flex md:flex-row-reverse md:align-middle md:items-center md:mb-20 xsm:flex xsm:flex-col-reverse xsm:items-center">
          <div className="mb-10 mx-10 md:w-1/2">
            <img
              src="/purpose.svg"
              alt="proposito"
              width="532"
              height="428"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="mb-10 md:w-1/2 md:pl-20 xsm:px-20">
            <p className="text-center text-xl mx-10 md:text-left md:text-3xl xsm:text-3xl">
              Poner nuestra creatividad al servicio de nuestros clientes para{" "}
              <span className="text-center font-bold text-xl text-[#6946B3] md:text-3xl xsm:text-3xl">
                desarrollar soluciones de software que aporten a la concreción
                de sus proyectos, al crecimiento de su empresa
              </span>{" "}
              y a la evolución tecnológica en general.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
