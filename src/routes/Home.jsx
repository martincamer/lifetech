import { Contacto } from "../home/components/Contacto";
import { Empresas } from "../home/components/Empresas";
import { Intro } from "../home/components/Intro";
import { Mensaje } from "../home/components/Mensaje";
import { QueHacemos } from "../home/components/QueHacemos";

export const Home = () => {
  return (
    <main>
      <Intro />
      <QueHacemos />
      <Contacto />
      <Empresas />
      <Mensaje />
    </main>
  );
};
