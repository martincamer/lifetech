import React from "react";
import { Link } from "react-router-dom";

const JoinTeamSection = () => {
  return (
    <section>
      <div className="flex flex-col justify-between items-center shadow-md bg-[#F9F9F9] py-20">
        <div className="flex flex-col justify-between items-center">
          <div className="w-80 h-auto bg-[#2F2E41] items-center block mb-6 md:w-96 xsm:w-96">
            <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 bg-[#D06D6A]">
              <h2 className="items-center text-slate-50 text-center text-2xl font-bold py-3 md:tracking-wide">
                ¡Forma parte del equipo!
              </h2>
            </div>
          </div>
          <div className="text-3xl text-center p-6 mb-4 xsm:text-3xl">
            <p>¿Te interesa conocer más sobre la propuesta?</p>
            <p>¿Quieres formar parte del equipo de lifetech?</p>
          </div>
        </div>
        <div className="mb-0 w-80">
          <div className="flex flex-col items-center">
            <Link to="/contacto" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                id="form"
                className="text-base rounded-full text-indigo-900 bg-lime-200 w-52 h-10 border tracking-wide border-indigo-900 align-middle mt-5 font-bold"
              >
                Completar formulario
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
