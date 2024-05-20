import React from "react";

export const ContentDos = () => {
  return (
    <section style={{ backgroundImage: "url('/Vector.svg')" }}>
      <div className="md:flex md:flex-row bg-opacity-50 md:justify-between md:items-stretch h- pt-8 md:container md:mx-auto md:pb-12 xsm:grid xsm:grid-flow-row-dense xsm:grid-rows-2 xsm:grid-cols-2 xsm:items-center">
        {[
          {
            title: "Lifetech es un equipo",
            subtitle:
              "de mentes curiosas que buscan ir siempre un paso más allá.",
          },
          {
            title: "Combinamos talentos",
            subtitle:
              "y capacidades para desarrollar soluciones de software que superen las expectativas de nuestros clientes. Porque siempre nos estamos preguntando “¿cómo podemos hacer que esto sea aún mejor?”.",
          },
          {
            title: "Amamos la tecnología",
            subtitle:
              "y prácticamente toda nuestra vida gira alrededor de ella—, pero la concebimos como lo que es: el producto de la creatividad de las personas.",
          },
          {
            title: "El factor humano",
            subtitle:
              "es, siempre, el más importante. De nada sirve nuestro conocimiento técnico si no podemos conectarnos entre nosotros y con nuestros clientes.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center h-auto my-10 bg-transparent md:px-5 xsm:w-auto"
          >
            <div className="flex flex-col items-center justify-start w-72 h-auto bg-white border-2 border-black md:justify-start md:w-64 md:h-full xsm:h-80">
              <h2 className="text-left pl-6 pr-6 font-bold text-xl py-6 text-[#D06D6A] md:text-xl">
                {item.title}{" "}
                <span className="font-normal text-black text-lg md:text-lg">
                  {item.subtitle}
                </span>
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col pb-12 items-center">
        <p className="text-center font-bold text-xl text-[#6946B3] px-10 md:text-3xl md:w-[935px] xsm:text-3xl">
          Nos gusta pensar que estamos aportando al desarrollo tecnológico del
          mundo.
        </p>
        <p className="text-center font-bold text-xl text-[#6946B3] px-10 md:text-3xl md:w-[935px] xsm:text-3xl xsm:px-20">
          Después de todo, nunca se sabe cuándo ni dónde va a surgir la próxima
          revolución.
        </p>
      </div>
    </section>
  );
};
