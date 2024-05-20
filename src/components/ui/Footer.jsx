import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-stone-950 text-center pb-16 pt-3 max-sm:pb-3 max-sm:pt-8">
      <div className="flex flex-col md:flex-row md:justify-start text-left md:px-20 px-10 py-4 xsm:flex-row xsm:justify-around xsm:px-0">
        <div className="mr-0 mt-4 md:mr-24">
          <h1 className="text-lime-200 text-xl items-baseline font-semibold py-3 tracking-normal">
            Conócenos
          </h1>
          <ul>
            <li className="py-3">
              <a
                href="/es/nosotros/"
                className="text-slate-300 font-normal tracking-wide"
              >
                Nosotros
              </a>
            </li>
            <li className="py-3">
              <a
                href="/es/trabaja_con_nosotros/"
                className="text-slate-300 font-normal tracking-wide"
              >
                Trabaja con nosotros
              </a>
            </li>
            <li className="py-3">
              <a
                href="/es/contacto/"
                className="text-slate-300 font-normal tracking-wide"
              >
                Contacto
              </a>
            </li>
            <li className="py-3">
              <a
                href="/es/nosotros/"
                className="text-slate-300 font-normal tracking-wide"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="mr-0 mt-4 md:mr-24">
          <h1 className="text-lime-200 text-xl items-baseline font-semibold py-3 tracking-normal">
            Servicios
          </h1>
          <ul>
            <li className="py-3">
              <a
                href="/es/it_project_outsourcing/"
                className="text-slate-300 font-normal tracking-wide"
              >
                Desarrollo web
              </a>
            </li>
            <li className="py-3">
              <a
                href="/es/staff_augmentation/"
                className="text-slate-300 font-normal tracking-wide"
              >
                Desarrollo de software
              </a>
            </li>
            <li className="py-3">
              <a
                href="/es/staff_augmentation/"
                className="text-slate-300 font-normal tracking-wide"
              >
                Desarrollo de aplicaciónes móviles
              </a>
            </li>
            <li className="py-3">
              <a
                href="/es/staff_augmentation/"
                className="text-slate-300 font-normal tracking-wide"
              >
                Mantenimiento o soluciones
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row -ml-3 mt-6 md:flex-row">
          <div className="px-3 py-3">
            <a
              href="https://www.instagram.com/nerdo.solutions/"
              target="_blank"
              className="text-lime-200 flex align-top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
          <div className="px-3 py-3">
            <a
              href="https://www.linkedin.com/company/nerdo-solutions"
              target="_blank"
              className="text-lime-200 flex align-top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          <div className="px-3 py-3">
            <a
              href="mailto:info@nerdo.solutions"
              target="_blank"
              className="text-lime-200 flex align-top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-left md:px-20 px-10 py-6">
        <hr />
        <p className="text-slate-300 font-semibold pt-12 md:pt-4 tracking-wider pr-20">
          © 2023 Lifetech Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
