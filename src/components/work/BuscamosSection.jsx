import React from "react";

const BuscamosSection = () => {
  return (
    <section>
      <div
        className="flex flex-col bg-opacity-50 justify-between items-center pt-12"
        style={{ backgroundImage: "url('/Vector.svg')" }}
      >
        <div className="w-72 h-auto bg-[#2F2E41] items-center block mb-12 md:items-start md:mb-16 md:-ml-[710px] md:w-[350px] xsm:w-80">
          <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 bg-white items-center text-[#6946B3] font-bold text-2xl text-left py-3 pl-6 md:text-3xl md:pl-10 md:items-start xsm:text-3xl">
            ¿Qué buscamos?
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-32">
          <div className="w-72 h-auto bg-[#2F2E41] block mb-10 md:w-[464px] xsm:w-96">
            <div className="flex flex-col w-auto h-[420px] max-md:h-full mr-2 mb-2 -ml-2 -mt-2 px-8 my-6 bg-white">
              <h2 className="flex justify-start items-center text-[#6946B3] font-semibold text-2xl px-2 mt-10 mb-3">
                {" "}
                Perfiles Front{" "}
              </h2>
              <ul className="pl-5 mb-10">
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Experiencia en JavaScript y frameworks orientados a
                    desarrollo web, preferentemente en React, Angular, Ember,
                    Vue.js, entre otros.
                  </h1>
                </li>
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Conocimientos en frameworks de integración (React + Redux,
                    Flux, AngularJS, etcétera).
                  </h1>
                </li>
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Uso y conocimiento de tecnologías actuales: EcmaScript 6,
                    Node.js, ExpressJS, Webpack, Babel.
                  </h1>
                </li>
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Server-side rendering (deseable).
                  </h1>
                </li>
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    HTML5 y Canvas (deseable).
                  </h1>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-72 h-auto bg-[#2F2E41] block mb-10 md:w-[464px] xsm:w-96">
            <div className="flex flex-col w-auto h-[420px] mr-2 mb-2 -ml-2 -mt-2 px-8 my-6 bg-white max-md:h-full">
              <h2 className="flex justify-start items-center text-[#6946B3] font-semibold text-2xl px-2 mt-10 mb-3">
                {" "}
                Perfiles Back{" "}
              </h2>
              <ul className="pl-5 mb-10">
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Sólidos conocimientos de OOP y patrones de diseño.
                  </h1>
                </li>
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Experiencia mínima deseada +2 años en desarrollo con Java,
                    NodeJS, Express, Nest o similares.
                  </h1>
                </li>
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Experiencia en Hibernate, Postgresql, MongoDB.
                  </h1>
                </li>
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Haberse enfrentado con problemas de volumen, escala y
                    performance (deseable).
                  </h1>
                </li>
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Servicios de Amazon (EB, ES, RDS, S3, SQS, etc.) (deseable).
                  </h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuscamosSection;
