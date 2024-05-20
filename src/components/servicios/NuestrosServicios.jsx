export const NuestrosServicios = () => {
  return (
    <section style={{ backgroundImage: "url('/Vector.svg')" }}>
      <div className="md:flex md:flex-row bg-opacity-50 md:justify-between md:items-stretch h- pt-8 md:container md:mx-auto md:pb-12 xsm:grid xsm:grid-flow-row-dense xsm:grid-rows-2 xsm:grid-cols-2 xsm:items-center">
        {[
          {
            title: "Desarrollo web",
            subtitle:
              "Creamos tu sitio web con pasión y precisión, llevando tus ideas más allá de lo esperado.",
          },
          {
            title: "Desarrollo de software",
            subtitle:
              "Creamos soluciones de software que superan expectativas, siempre buscando la excelencia y la innovación.",
          },
          {
            title: "Desarrollo de aplicaciones web",
            subtitle:
              "Creamos aplicaciones web donde la creatividad es el corazón de cada proyecto, impulsando soluciones innovadoras y funcionales.",
          },
          {
            title: "Desarrollo de aplicaciones móviles",
            subtitle:
              "En nuestro servicio de desarrollo de aplicaciones móviles, nos especializamos en transformar ideas en soluciones digitales innovadoras y funcionales. ",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center h-auto my-10 bg-transparent md:px-5 xsm:w-auto"
          >
            <div className="flex flex-col items-center justify-start w-72 h-auto bg-white border-2 border-black md:justify-start md:w-64 md:h-full xsm:h-80">
              <h2 className="pl-6 pr-6 font-bold text-xl py-6 text-[#D06D6A] md:text-xl flex flex-col gap-2 text-center">
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
        <p className="text-center font-bold text-xl text-[#6946B3] px-10 md:text-3xl md:w-[1000px] xsm:text-3xl">
          Contar con nuestros servicios significa aprovechar nuestra pasión por
          la innovación y el compromiso con resultados excepcionales. Estamos
          aquí para convertir desafíos en oportunidades y hacer avanzar tu
          visión digital hacia el futuro.
        </p>
      </div>
    </section>
  );
};
