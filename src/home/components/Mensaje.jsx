export const Mensaje = () => {
  return (
    <section
      id="contacto"
      className="flex flex-col justify-between items-center shadow-md mt-10 max-md:py-12 md:flex-row md:mt-2 bg-[#F9F9F9]"
    >
      <div className="flex flex-col justify-between items-center md:flex-col-reverse md:w-1/2 md:ml-44 md:mb-10 xsm:flex-col-reverse xsm:items-start">
        <div className="w-72 h-auto bg-[#2F2E41] items-center block mb-6 md:w-96 md:ml-20 md:mt-3 xsm:ml-20 xsm:w-[400px] xsm:mb-12">
          <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 bg-[#D06D6A]">
            <h2 className="items-center text-slate-50 text-center text-2xl font-bold py-3 md:tracking-wide">
              ¡Esperamos tu mensaje!
            </h2>
          </div>
        </div>
        <div className="text-4xl text-center p-6 mb-4 md:text-left md:mr-20 max-md:text-2xl xsm:text-left xsm:mx-12 font-semibold">
          Nos gustaría saber cómo podemos ayudarte a potenciar tu equipo y tus
          soluciones.
        </div>
      </div>
      <div className="mb-8 w-80 md:w-1/3 md:mr-44 md:mt-20 md:mb-20 xsm:w-[670px]">
        <form method="POST">
          <p>
            <label className="flex flex-col text-xs text-[#D06D6A] tracking-wider mb-6">
              Nombre
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                required
                className="border rounded-md p-3 mt-2 text-sm border-[#C3C9CA] text-[#2F2E41] outline-none"
              />
            </label>
          </p>
          <p>
            <label className="flex flex-col text-xs text-[#D06D6A] tracking-wider mb-6">
              Mail
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                required
                className="border rounded-md p-3 mt-2 text-sm border-[#C3C9CA] text-[#2F2E41] outline-none"
              />
            </label>
          </p>
          <p>
            <label className="flex flex-col text-xs text-[#D06D6A] tracking-wider mb-6">
              Consulta
              <textarea
                name="message"
                placeholder="Cuéntanos sobre tu proyecto"
                required
                rows="5"
                style={{ resize: "none" }}
                className="border rounded-md p-3 mt-2 text-sm border-[#C3C9CA] text-[#2F2E41] outline-none"
              ></textarea>
            </label>
          </p>
          <div
            id="reCaptcha"
            className="reCaptcha flex flex-col items-center mb-6"
          >
            {/* Google reCAPTCHA code goes here */}
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="text-base rounded-full text-indigo-900 bg-lime-200 w-44 h-10 border tracking-wide border-indigo-900 align-middle font-bold"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
