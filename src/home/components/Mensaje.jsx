import { useState } from "react";

export const Mensaje = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries());

    try {
      await fetch("https://getform.io/f/eea12bf0-0dce-4e1b-b2bb-99f738c349bd", {
        method: "POST",
        body: new URLSearchParams(formEntries),
      });
      setIsModalVisible(true);
      form.reset();
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
  };

  return (
    <main>
      <section
        id="contacto"
        className="flex flex-col justify-between items-center shadow-md py-16 md:flex-row bg-[#F9F9F9]"
      >
        <div className="flex flex-col justify-between items-center md:flex-col-reverse md:w-1/2 md:ml-44 md:mb-10 xsm:flex-col-reverse xsm:items-start">
          <div className="w-72 h-auto bg-[#2F2E41] items-center block mb-6 md:w-96 md:ml-20 md:mt-3 xsm:ml-20 xsm:w-[400px] xsm:mb-12">
            <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 bg-[#D06D6A]">
              <h2 className="items-center text-slate-50 text-center text-2xl font-bold py-3 md:tracking-wide">
                ¡Esperamos tu mensaje!
              </h2>
            </div>
          </div>
          <div className="text-4xl text-center p-6 mb-4 md:text-left md:mr-20 font-semibold">
            Nos gustaría saber cómo podemos ayudarte a potenciar tu equipo y tus
            soluciones.
          </div>
        </div>
        <div className="mb-8 w-80 md:w-1/3 md:mr-44 md:mt-20 md:mb-20 xsm:w-[670px]">
          <form onSubmit={handleSubmit}>
            <p>
              <label className="flex flex-col text-xs text-[#D06D6A] tracking-wider mb-6">
                Nombre
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  required
                  className="border rounded-md p-3 mt-2 text-sm border-[#C3C9CA] text-[#2F2E41] outline-none"
                />
              </label>
            </p>
            <p>
              <label className="flex flex-col text-xs text-[#D06D6A] tracking-wider mb-6">
                Telefono
                <input
                  type="text"
                  name="telefono"
                  placeholder="Tu telefono"
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
              <div
                className="g-recaptcha"
                data-sitekey="6LdPDFopAAAAABGJlE8W-lDEEr1dQG7CWIcqHkl_"
              >
                {/* Aquí iría el reCaptcha */}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <button
                // type="submit"
                className="text-base rounded-full text-indigo-900 bg-lime-200 w-44 h-10 border tracking-wide border-indigo-900 align-middle font-bold"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>

      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">¡Enviado correctamente!</h2>
            <p>Nos pondremos en contacto contigo.</p>
            <button
              onClick={() => setIsModalVisible(false)}
              className="mt-4 px-4 py-2 bg-indigo-900 text-white rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
