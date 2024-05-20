import React, { useState } from "react";
import logo from "/logo.png";
import { ContactoButton } from "./ContactoButton";
import { LinkButton } from "./LinkButton";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="py-3 px-12 flex justify-between max-md:px-5 max-md:items-center">
      <Link to={"/"}>
        <img className="max-w-60 max-md:w-48" src={logo} />
      </Link>
      <nav className="flex gap-16 items-center max-md:hidden">
        <div className="flex gap-5 items-center">
          <LinkButton href={"nosotros"}>Nosotros</LinkButton>
          <LinkButton href={"como-trabajamos"}>¿Como trabajamos?</LinkButton>
          <LinkButton href={"servicios"}>Conoce nuestros servicios</LinkButton>
          <LinkButton href={"work"}>Trabaja con nosotros</LinkButton>
          <LinkButton href={"blog"}>Blog</LinkButton>
        </div>
        <ContactoButton />
      </nav>

      <div className="max-md:block md:hidden text-indigo-700">
        <Hamburger toggled={isOpen} size={32} toggle={setOpen} rounded />
      </div>

      {isOpen && (
        <div
          className={`${
            isOpen
              ? "bg-gray-100 transition-all ease-linear opacity-100 left-0 top-16 h-full w-full fixed"
              : "opacity-0 h-0 w-0"
          } `}
        >
          <div className="py-10 px-6 flex flex-col gap-4">
            <Link
              onClick={() => setOpen(!isOpen)}
              to={"/nosotros"}
              className="font-bold text-3xl text-black hover:text-violet-400"
            >
              Nosotros
            </Link>
            <Link
              onClick={() => setOpen(!isOpen)}
              to={"/servicios"}
              className="font-bold text-3xl text-black hover:text-violet-400"
            >
              Nuestros servicios
            </Link>
            <Link
              onClick={() => setOpen(!isOpen)}
              to={"/work"}
              className="font-bold text-3xl text-black hover:text-violet-400"
            >
              Trabaja con nosotros
            </Link>{" "}
            <Link
              onClick={() => setOpen(!isOpen)}
              to={"/contacto"}
              className="font-bold text-3xl text-black hover:text-violet-400"
            >
              Contactanos ahora
            </Link>{" "}
            <Link
              onClick={() => setOpen(!isOpen)}
              to={"/como-trabajamos"}
              className="font-bold text-3xl text-black hover:text-violet-400"
            >
              ¿Como trabajamos?
            </Link>
            <Link
              onClick={() => setOpen(!isOpen)}
              to={"/blog"}
              className="font-bold text-3xl text-black hover:text-violet-400"
            >
              Mira nuestro blog y enterate de las novevades actuales
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
