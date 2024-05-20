import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { blog } from "../../data/blog";

export const IntroBlog = () => {
  return (
    <section>
      <div className="flex flex-col justify-between items-center pt-8 shadow-md bg-gradient-to-b from-white to-[#F1FFDE] md:pt-16 md:pb-14 xsm:px-28">
        <div className="w-72 h-auto bg-[#2F2E41] items-center block mb-8 md:mb-12">
          <div className="w-auto h-auto mr-2 mb-2 -ml-2 -mt-2 bg-[#D06D6A] items-center text-slate-50 text-center text-xl py-3 px-3">
            ¡Bienvenido a nuestro blog!
          </div>
        </div>
        <div className="text-4xl text-center mx-10 mb-6 md:mb-14">
          <h1 className="text-5xl text-[#D06D6A] font-bold md:text-7xl">
            Observa nuestros ultimos blogs
          </h1>
        </div>

        <div className="container mx-auto py-5  grid grid-cols-3 max-md:grid-cols-1 max-md:justify-center max-md:items-center max-md:w-full max-md:gap-8 max-md:px-8">
          {blog.map((b) => (
            <div
              key={b.id}
              className="w-72 h-auto bg-[#2F2E41] block pb-[0.5px] pt-[0.6px] md:w-[464px] max-md:w-full"
            >
              <div className="flex flex-col w-auto h-full mr-2 mb-2 -ml-2 -mt-2 px-8 pb-6 bg-white">
                <h2 className="flex justify-start items-center text-[#6946B3] font-semibold text-2xl px-2 mt-10 mb-3">
                  {b.name}
                </h2>
                <ul className="pl-5">
                  <li style={{ listStyle: "disc", color: "#414D58" }}>
                    <p>{b.desc_corto}</p>
                  </li>
                </ul>
                <div className="mt-5 flex">
                  <Link
                    to={`/blog/${b.url}`}
                    className="text-[#6946B3] font-bold text-lg bg-gray-100 py-2 px-6 rounded-full flex gap-2 items-center hover:bg-[#D9F99D] transition-all ease-linear"
                  >
                    Ver blog completo
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
