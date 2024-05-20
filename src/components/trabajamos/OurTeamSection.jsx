import React from "react";

const OurTeamSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center align-middle md:m-6">
        <div className="m-4 xsm:mt-10">
          <img
            src="/estrellas.svg"
            alt="stars"
            width="184"
            height="84"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="md:flex md:flex-row md:gap-10">
          <div className="flex flex-col items-center justify-center w-72 h-auto my-6 bg-white border-2 border-black md:h-full md:w-80 md:align-top md:items-start md:justify-start md:m-4 xsm:w-[620px]">
            <h2 className="text-left pl-6 pr-6 font-bold text-xl py-6 text-[#D06D6A] md:m-3 xsm:m-7">
              Brindamos un equipo externo
              <span className="font-normal text-black text-lg">
                {" "}
                de talentos especializados para llevar adelante el desarrollo de
                soluciones de software a medida de las necesidades de nuestros
                clientes.
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center w-72 h-auto my-6 bg-white border-2 border-black md:h-full md:w-80 md:align-top md:items-start md:justify-start md:m-4 xsm:w-[620px]">
            <h2 className="text-left pl-6 pr-6 font-bold text-xl py-6 text-[#D06D6A] md:m-3 xsm:m-7">
              <span className="font-normal text-black text-lg">
                Nuestro equipo se destaca por sus conocimientos técnicos, pero
                también por sus{" "}
              </span>
              habilidades humanas.
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center w-72 h-auto my-6 bg-white border-2 border-black md:h-full md:w-80 md:align-top md:items-start md:justify-start md:m-4 xsm:w-[620px]">
            <h2 className="text-left pl-6 pr-6 font-bold text-xl py-6 text-[#D06D6A] md:m-3 xsm:m-7">
              <span className="font-normal text-black text-lg">La </span>
              comunicación constante
              <span className="font-normal text-black text-lg">
                {" "}
                con el cliente, la transparencia y la honestidad son
                fundamentales en todos nuestros vínculos. Porque la tecnología
                puede llevarnos muy lejos, pero nunca va a reemplazar la
                experiencia humana.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
