import FAQSection from "../components/trabajamos/FAQSection";
import ITProjectOutsourcing from "../components/trabajamos/ITProjectOutsourcing";
import OurTeamSection from "../components/trabajamos/OurTeamSection";
import { Contacto } from "../home/components/Contacto";

export const ComoTrabajamos = () => {
  return (
    <main>
      <ITProjectOutsourcing />
      <OurTeamSection />
      <FAQSection />
      <Contacto />
    </main>
  );
};
