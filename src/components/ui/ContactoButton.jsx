import { Link } from "react-router-dom";

export const ContactoButton = () => {
  return (
    <Link
      to={"/contacto"}
      className="bg-[#D9F99D] border border-[#322F81] text-[#322F81] font-bold rounded-full py-1.5 px-10"
    >
      Contactar
    </Link>
  );
};
