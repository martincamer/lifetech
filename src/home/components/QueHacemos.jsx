import React from "react";
import { Link } from "react-router-dom";

export const QueHacemos = () => {
  return (
    <div
      className="flex flex-col justify-between items-center pt-12 md:pb-14 bg-repeat bg-opacity-50"
      style={{ backgroundImage: "url('/Vector.svg')" }}
    >
      <div className="w-72 h-auto bg-[#2F2E41] items-center block mb-12 md:items-start md:mb-16 md:-ml-[600px] xsm:w-80">
        <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 bg-white text-[#6946B3] font-bold text-2xl text-left py-3 pl-6 md:text-3xl md:pl-10 md:items-start xsm:text-3xl">
          ¿Qué hacemos?
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-32">
        <div className="w-72 h-auto bg-[#2F2E41] block mb-12 md:w-96 xsm:w-[450px]">
          <div className="flex flex-col mr-2 mb-2 -ml-2 -mt-2 w-72 md:w-96 h-80 md:h-[100%] py-5 xsm:w-[450px] bg-white hover:bg-lime-100 xsm:h-[420px]">
            <Link to="/servicios">
              <h2 className="flex justify-center items-center text-center text-[#6946B3] font-semibold text-xl md:text-2xl mt-5 mb-2 md:m-10 xsm:text-2xl xsm:mt-10 xsm:mb-10">
                Desarrollamos tu Software a medida
              </h2>
              <div className="flex justify-center items-center mb-4 md:-mt-6">
                <img
                  src="/intro.svg"
                  alt="_draw_it"
                  width="220"
                  height="137"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="flex justify-between items-center text-center text-[#6946B3] text-sm md:text-lg px-4 mb-2 xsm:text-xl xsm:px-9">
                Desarrollamos software a medida, sitios web y aplicaciones
                móviles de alta calidad.
              </p>
            </Link>
          </div>
        </div>
        <div className="w-72 h-auto bg-[#2F2E41] block mb-12 md:w-96 xsm:w-[450px]">
          <div className="flex flex-col mr-2 mb-2 -ml-2 -mt-2 w-72 md:w-96 h-80 md:h-[100%] xsm:w-[450px] bg-white hover:bg-lime-100 ">
            <Link to="/servicios">
              <h2 className="flex justify-center items-center text-center text-[#6946B3] font-semibold text-xl md:text-2xl mt-5 mb-7 md:m-10 xsm:text-2xl xsm:mt-10 xsm:mb-10">
                Mantenimiento de aplicaciónes
              </h2>
              <div className="flex justify-center items-center mb-4">
                <img
                  src="/que_hacemos.svg"
                  alt="_draw_staff"
                  width="232"
                  height="111"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="flex justify-between items-center text-center text-[#6946B3] text-sm md:text-lg px-4 mb-2 xsm:text-xl xsm:px-9">
                Expertos especializados y comprometidos en el mantenimiento de
                aplicaciones, fortaleciendo las capacidades de tu equipo
                interno.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
