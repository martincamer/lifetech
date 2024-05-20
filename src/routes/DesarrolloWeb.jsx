import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import { Contacto } from "../home/components/Contacto";
import { Mensaje } from "../home/components/Mensaje";

export const DesarrolloWeb = () => {
  return (
    <main>
      <section>
        <div className="flex flex-col justify-between items-center pt-8 shadow-md bg-gradient-to-b from-white to-[#F1FFDE] md:pt-16 md:pb-14 xsm:px-28">
          <div className="w-72 h-auto bg-[#2F2E41] items-center block mb-8 md:mb-12">
            <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 bg-[#D06D6A] items-center text-slate-50 text-center text-xl py-3 px-3">
              ¡Binvenido al servicio de!
            </div>
          </div>
          <div className="text-4xl text-center mx-10 mb-6 md:mb-14">
            <h1 className="text-5xl text-[#D06D6A] font-bold md:text-7xl">
              Desarrollo de paginas web
            </h1>
          </div>
          <div className="mb-8 md:w-[900px] md:mb-16">
            <p className="text-center mx-10 text-lg md:text-2xl">
              En Lifetech desarrollamos tu sitio web desde cero, asegurando que
              cada detalle sea diseñado y construido según tus necesidades y
              objetivos. Nuestro equipo de expertos combina creatividad y
              tecnología de punta para crear sitios web que no solo impresionan,
              sino que también ofrecen una experiencia de usuario excepcional.
            </p>
          </div>
          <div className="mb-8 md:w-[700px] flex flex-col justify-center items-center gap-3">
            <p className="text-center font-bold text-xl text-[#6946B3] mx-10 md:text-3xl xsm:text-2xl">
              Observa nuestro servicio de desarollo web
            </p>
            <p>
              <IoMdArrowDown className="text-6xl text-[#6946B3] animate-bounce duration-1000" />
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div>
          <p className="font-semibold text-4xl text-center text-[#6946B3]">
            Como es la etapa de creación del diseño web o un ecommerce
          </p>
        </div>
        <div className="flex flex-row items-start justify-center align-middle md:m-6">
          <div className="md:flex md:flex-row md:gap-10">
            <div className="flex flex-col items-center justify-center w-72 h-auto my-6 bg-white border-2 border-black md:h-full md:w-80 md:align-top md:items-start md:justify-start md:m-4 xsm:w-[620px]">
              <h2 className="text-left pl-6 pr-6 font-bold text-xl py-6 text-[#D06D6A] md:m-3 xsm:m-7 flex flex-col w-full">
                Parte 01: Reunión Inicial
                <span className="font-normal text-black text-lg">
                  En esta etapa, nos reunimos contigo para entender tus
                  necesidades y objetivos. Discutimos tus ideas, requerimientos
                  específicos y cualquier referencia que tengas en mente. Esta
                  fase es crucial para asegurar que estamos alineados y que
                  entendemos completamente tu visión.
                </span>
              </h2>
            </div>
          </div>

          <div className="md:flex md:flex-row md:gap-10">
            <div className="flex flex-col items-center justify-center w-72 h-auto my-6 bg-white border-2 border-black md:h-full md:w-80 md:align-top md:items-start md:justify-start md:m-4 xsm:w-[620px]">
              <h2 className="text-left pl-6 pr-6 font-bold text-xl py-6 text-[#D06D6A] md:m-3 xsm:m-7 flex flex-col w-full">
                Parte 02: Creación de Wireframes
                <span className="font-normal text-black text-lg">
                  En esta fase, creamos wireframes o esquemas básicos de la
                  estructura de tu sitio web. Estos wireframes nos permiten
                  visualizar la disposición de los elementos y la navegación
                  antes de pasar al diseño detallado. Es una herramienta
                  esencial para asegurar que la arquitectura de la información
                  está bien definida.
                </span>
              </h2>
            </div>
          </div>

          <div className="md:flex md:flex-row md:gap-10">
            <div className="flex flex-col items-center justify-center w-72 h-auto my-6 bg-white border-2 border-black md:h-full md:w-80 md:align-top md:items-start md:justify-start md:m-4 xsm:w-[620px]">
              <h2 className="text-left pl-6 pr-6 font-bold text-xl py-6 text-[#D06D6A] md:m-3 xsm:m-7 flex flex-col w-full">
                Parte 03: Diseño del Sitio
                <span className="font-normal text-black text-lg">
                  En esta etapa, transformamos los wireframes en diseños
                  visuales atractivos. Nuestro equipo de diseñadores trabaja en
                  la creación de una apariencia visual que represente tu marca y
                  atraiga a tus usuarios. Cada elemento se diseña cuidadosamente
                  para garantizar una experiencia de usuario óptima.
                </span>
              </h2>
            </div>
          </div>

          <div className="md:flex md:flex-row md:gap-10">
            <div className="flex flex-col items-center justify-center w-72 h-auto my-6 bg-white border-2 border-black md:h-full md:w-80 md:align-top md:items-start md:justify-start md:m-4 xsm:w-[620px]">
              <h2 className="text-left pl-6 pr-6 font-bold text-xl py-6 text-[#D06D6A] md:m-3 xsm:m-7 flex flex-col w-full">
                Parte 04: Pruebas y Despliegue
                <span className="font-normal text-black text-lg">
                  Antes del lanzamiento, realizamos pruebas exhaustivas para
                  asegurar que todo funcione correctamente. Esto incluye pruebas
                  de funcionalidad, compatibilidad y rendimiento. Una vez
                  completadas las pruebas, desplegamos el sitio web,
                  asegurándonos de que esté listo para el público y optimizado
                  para los motores de búsqueda.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* funcionamiento  */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-10 text-[#D06D6A]">
            Funcionamiento de un Sitio Web
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 border">
              <img
                src="/pexels-photo-7310202.jpeg"
                alt="Planeación"
                className="w-full h-40 object-cover mb-6 rounded-xl"
              />
              <h3 className="text-xl font-semibold mb-2">Planeación</h3>
              <p className="text-gray-700">
                Todo comienza con una planificación detallada. Identificamos
                objetivos, audiencias y definimos el alcance del proyecto para
                asegurar que todas las expectativas sean claras.
              </p>
            </div>

            <div className="bg-white p-6 border">
              <img
                src="/pexels-photo-7309483.webp"
                alt="Planeación"
                className="w-full h-40 object-cover mb-6 rounded-xl"
              />
              <h3 className="text-xl font-semibold mb-2">Diseño</h3>
              <p className="text-gray-700">
                En esta fase, creamos wireframes y diseños visuales. Nos
                enfocamos en la apariencia y la usabilidad del sitio, asegurando
                que sea atractivo y fácil de usar.
              </p>
            </div>

            <div className="bg-white p-6 border">
              <img
                src="/pexels-photo-1181263.webp"
                alt="Planeación"
                className="w-full h-40 object-cover mb-6 rounded-xl"
              />
              <h3 className="text-xl font-semibold mb-2">Desarrollo</h3>
              <p className="text-gray-700">
                Durante el desarrollo, codificamos el sitio web usando las
                últimas tecnologías y prácticas. Creamos el frontend y backend,
                asegurando funcionalidad y rendimiento.
              </p>
            </div>

            <div className="bg-white p-6 border">
              <img
                src="/pexels-photo-3862630.jpeg"
                alt="Planeación"
                className="w-full h-40 object-cover mb-6 rounded-xl"
              />
              <h3 className="text-xl font-semibold mb-2">Pruebas</h3>
              <p className="text-gray-700">
                Realizamos pruebas exhaustivas para identificar y corregir
                errores. Aseguramos que el sitio web funcione correctamente en
                todos los navegadores y dispositivos.
              </p>
            </div>

            <div className="bg-white p-6 border">
              <img
                src="/pexels-photo-3811082.jpeg"
                alt="Planeación"
                className="w-full h-40 object-cover mb-6 rounded-xl"
              />
              <h3 className="text-xl font-semibold mb-2">Lanzamiento</h3>
              <p className="text-gray-700">
                Una vez que todo está aprobado, lanzamos el sitio web. Nos
                aseguramos de que todo esté optimizado para los motores de
                búsqueda y listo para recibir tráfico.
              </p>
            </div>

            <div className="bg-white p-6 border">
              <img
                src="/pexels-photo-257736.webp"
                alt="Planeación"
                className="w-full h-40 object-cover mb-6 rounded-xl"
              />
              <h3 className="text-xl font-semibold mb-2">Mantenimiento</h3>
              <p className="text-gray-700">
                Después del lanzamiento, proporcionamos mantenimiento continuo.
                Actualizamos el sitio, agregamos nuevas funciones y aseguramos
                su buen funcionamiento.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contacto />
      <Mensaje />
    </main>
  );
};
