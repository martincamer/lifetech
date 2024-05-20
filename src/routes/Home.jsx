import { NuestrosServicios } from "../components/servicios/NuestrosServicios";
import { Contacto } from "../home/components/Contacto";
import { Intro } from "../home/components/Intro";
import { Mensaje } from "../home/components/Mensaje";
import { QueHacemos } from "../home/components/QueHacemos";

export const Home = () => {
  return (
    <main>
      <Intro />
      <QueHacemos />
      <Contacto />
      <NuestrosServicios />
      <Mensaje />
    </main>
  );
};
