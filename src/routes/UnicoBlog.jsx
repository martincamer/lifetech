import { useParams } from "react-router-dom";
import { blog } from "../data/blog";

export const UnicoBlog = () => {
  const params = useParams();
  console.log(params);
  return (
    <main>
      {blog.map(
        (b) =>
          b.url === params.url && (
            <section className="bg-gradient-to-b from-white to-[#F1FFDE] py-12">
              <div className="container mx-auto grid grid-cols-2 max-md:w-full gap-5 max-md:grid-cols-1 max-md:gap-2">
                <div className="md:flex-col md:w-auto md:py-10">
                  <div className="text-center mx-7 max-md:mx-1 mb-4 md:text-left">
                    <h1 className="text-5xl text-[#D06D6A] font-bold md:text-6xl xsm:text-6xl">
                      {b.name}
                    </h1>
                  </div>
                  <div className="mb-8 md:pt-5">
                    <p className="text-center mx-7 text-lg md:text-left md:text-2xl md:-mr-10 xsm:text-2xl xsm:text-left">
                      {b.desc}
                    </p>
                  </div>
                </div>
                <img className="w-full h-auto" src={b.image} alt="" />
              </div>
            </section>
          )
      )}
    </main>
  );
};
