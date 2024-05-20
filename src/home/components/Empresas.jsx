import React from "react";

export const Empresas = () => {
  return (
    <section className="flex flex-col justify-between pt-12 md:p-24">
      <p className="text-center font-bold text-2xl text-[#6946B3] mx-10 md:text-left md:text-3xl xsm:text-4xl xsm:mx-20 xsm:text-left">
        Algunas empresas a las que acompañamos
      </p>
      <div className="grid grid-cols-2 mx-12 py-4 md:grid-cols-6 md:gap-10 md:mt-10 md:items-center xsm:grid-cols-5">
        <div className="flex justify-center">
          <img
            src="https://www.viviendastecnohouse.com.ar/storage/img/logo.png"
            alt="marca2"
            width="127"
            height="85"
            loading="lazy"
            decoding="async"
            className="max-md:w-18 max-md:h-16 object-contain"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-1/295310223_1592719611122848_387851066445742258_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vdVQL6Xd-04Q7kNvgGQpSj7&_nc_ht=scontent.fros2-1.fna&oh=00_AYDsTbcMguxiV1H6WJRTyPOEbhWr6MGo6OA-XER_rk15vw&oe=665066C9"
            alt="marca2"
            width="127"
            height="85"
            loading="lazy"
            decoding="async"
            className="rounded-xl max-md:w-16 max-md:h-16 object-contain"
          />
        </div>
      </div>
    </section>
  );
};
