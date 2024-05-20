import React from "react";

const OfrecemosSection = () => {
  return (
    <section>
      <div
        className="flex flex-col bg-opacity-50 justify-between items-center pt-12"
        style={{ backgroundImage: "url('/Vector.svg')" }}
      >
        <div className="w-72 h-auto bg-[#2F2E41] items-center block mb-12 md:items-start md:mb-16 md:-ml-[710px] md:w-[350px] xsm:w-80">
          <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 bg-white items-center text-[#6946B3] font-bold text-2xl text-left py-3 pl-6 md:text-3xl md:pl-10 md:items-start xsm:text-3xl">
            ¿Qué te ofrecemos?
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-24">
          <div className="w-72 h-auto bg-[#2F2E41] block mb-10 md:w-72 xsm:w-96">
            <div className="flex flex-col w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 px-8 my-6 bg-white md:h-60">
              <h2 className="flex justify-start items-center text-[#6946B3] font-semibold text-2xl px-2 mt-10 mb-3">
                {" "}
                Modalidades{" "}
              </h2>
              <ul className="pl-5 mb-10">
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Part time
                  </h1>
                </li>
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Full time
                  </h1>
                </li>
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    100% remoto
                  </h1>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-72 h-auto bg-[#2F2E41] block mb-10 md:w-72 xsm:w-96">
            <div className="flex flex-col w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 px-8 my-6 bg-white md:h-60">
              <h2 className="flex justify-start items-center text-[#6946B3] font-semibold text-2xl px-2 mt-10 mb-3">
                {" "}
                Día a día{" "}
              </h2>
              <ul className="pl-5 mb-10">
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Participación en proyectos desafiantes
                  </h1>
                </li>
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Autonomía y respeto por tu trabajo
                  </h1>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-72 h-auto bg-[#2F2E41] block mb-10 md:w-72 xsm:w-96">
            <div className="flex flex-col w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 px-8 my-6 bg-white md:h-60">
              <h2 className="flex justify-start items-center text-[#6946B3] font-semibold text-2xl px-2 mt-10 mb-3">
                {" "}
                Equipo{" "}
              </h2>
              <ul className="pl-5 mb-10">
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Entorno de innovación y aprendizaje
                  </h1>
                </li>
                <li style={{ listStyle: "disc", color: "#414D58" }}>
                  <h1 className="text-[#414D58] text-lg font-light">
                    Un equipo de trabajo humano y empático
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

export default OfrecemosSection;
