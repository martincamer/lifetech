import { ContactoButton } from "../../components/ui/ContactoButton";

export const Intro = () => {
  return (
    <section className="py-32 bg-[#F9F9F9] max-md:py-12">
      <div className="grid grid-cols-2 gap-5 container mx-auto max-md:justify-center max-md:items-center max-md:grid-cols-1 max-md:px-5 max-md:gap-0">
        <div className="flex flex-col gap-5 max-md:gap-2">
          <div className="w-96 h-auto bg-[#2F2E41] pb-1 py-1 pr-1 mb-5 max-md:w-full">
            {" "}
            <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-4 py-2 px-4 bg-[#D06D6A] items-center text-white text-center text-2xl font-medium max-md:text-xl max-md:py-1 max-md:px-2">
              ¿Qué es la tecnología sin creatividad?
            </div>{" "}
          </div>

          <div className="text-4xl text-center mx-10 mb-6 md:mx-0 md:text-left md:text-6xl max-md:mx-2">
            Soluciones de software con{" "}
            <span className="text-[#D06D6A] font-extrabold">
              talento humano
            </span>{" "}
          </div>

          <div>
            {" "}
            <p className="md:text-2xl md:text-left md:mx-0 max-md:text-center">
              Somos un equipo de mentes curiosas que buscan ir siempre un paso
              más allá.
            </p>{" "}
          </div>
          <div className="mt-8 max-md:mb-5 max-md:text-center">
            <ContactoButton />
          </div>
        </div>
        <article>
          <img className="w-full" src={"/intro_2.svg"} />
        </article>
      </div>
      <div class="mb-8 md:row-start-6 md:row-span-2 md:col-span-2 max-md:text-sm max-md:mt-12 max-md:mb-0">
        {" "}
        <p class="text-center font-semibold text-xl text-[#6946B3] mx-10 md:text-3xl md:mx-36 md:my-10">
          Combinamos talentos y capacidades para desarrollar soluciones de
          software que superen las expectativas de nuestros clientes.
        </p>{" "}
      </div>
    </section>
  );
};
