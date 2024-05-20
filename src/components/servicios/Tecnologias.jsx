import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaMobile,
  FaJava,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiNestjs, SiPostgresql } from "react-icons/si";

export const Tecnologias = () => {
  return (
    <section className="w-full flex justify-center items-center py-20 bg-gradient-to-r from-[#7C43BD] to-[#A2FF84] flex-col">
      <div className="w-72 h-auto bg-[#2F2E41] items-center block mb-10 md:w-96 xsm:w-[430px]">
        <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 bg-[#ffff] items-center align-middle text-[#7C43BD] text-center py-3 px-3 font-medium text-xl md:text-3xl md:py-5 xsm:text-3xl xsm:py-5">
          Tecnologías con las que trabajamos
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5 max-md:grid-cols-2">
        <div className="bg-white px-8 py-3 rounded-2xl shadow-md flex flex-col gap-1 justify-center items-center">
          <FaHtml5 className="text-violet-600" size={40} />
          <span
            className="
          font-bold"
          >
            Html
          </span>
        </div>

        <div className="bg-white px-8 py-3 rounded-2xl shadow-md flex flex-col gap-1 justify-center items-center">
          <FaCss3 className="text-violet-600" size={40} />
          <span
            className="
          font-bold"
          >
            Css
          </span>
        </div>

        <div className="bg-white px-8 py-3 rounded-2xl shadow-md flex flex-col gap-1 justify-center items-center">
          <RiTailwindCssFill className="text-violet-600" size={40} />
          <span
            className="
          font-bold"
          >
            Tailwind css
          </span>
        </div>

        <div className="bg-white px-8 py-3 rounded-2xl shadow-md flex flex-col gap-1 justify-center items-center">
          <IoLogoJavascript className="text-violet-600" size={40} />
          <span
            className="
          font-bold"
          >
            Javascript
          </span>
        </div>

        <div className="bg-white px-8 py-3 rounded-2xl shadow-md flex flex-col gap-1 justify-center items-center">
          <FaReact className="text-violet-600" size={40} />
          <span
            className="
          font-bold"
          >
            React js
          </span>
        </div>

        <div className="bg-white px-8 py-3 rounded-2xl shadow-md flex flex-col gap-1 justify-center items-center">
          <FaNodeJs className="text-violet-600" size={40} />
          <span
            className="
          font-bold"
          >
            Node js
          </span>
        </div>

        <div className="bg-white px-8 py-3 rounded-2xl shadow-md flex flex-col gap-1 justify-center items-center">
          <SiExpress className="text-violet-600" size={40} />
          <span
            className="
          font-bold"
          >
            Express js
          </span>
        </div>

        <div className="bg-white px-8 py-3 rounded-2xl shadow-md flex flex-col gap-1 justify-center items-center">
          <SiNestjs className="text-violet-600" size={40} />
          <span
            className="
          font-bold"
          >
            Nest js
          </span>
        </div>

        <div className="bg-white px-8 py-3 rounded-2xl shadow-md flex flex-col gap-1 justify-center items-center relative">
          <FaMobile className="text-violet-600" size={40} />
          <FaReact
            className="text-violet-600 absolute right-3 top-2"
            size={30}
          />
          <span
            className="
          font-bold"
          >
            React Native
          </span>
        </div>

        <div className="bg-white px-8 py-3 rounded-2xl shadow-md flex flex-col gap-1 justify-center items-center">
          <FaJava className="text-violet-600" size={40} />
          <span
            className="
          font-bold"
          >
            Java
          </span>
        </div>

        <div className="bg-white px-8 py-3 rounded-2xl shadow-md flex flex-col gap-1 justify-center items-center">
          <SiMongodb className="text-violet-600" size={40} />
          <span
            className="
          font-bold"
          >
            Mongo db
          </span>
        </div>

        <div className="bg-white px-8 py-3 rounded-2xl shadow-md flex flex-col gap-1 justify-center items-center">
          <SiPostgresql className="text-violet-600" size={40} />
          <span
            className="
          font-bold"
          >
            Postgresql
          </span>
        </div>
      </div>
    </section>
  );
};
