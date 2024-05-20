import CapabilitiesSection from "../components/nosotros/CapabilitiesSection";
import { ContentDos } from "../components/nosotros/ContentDos";
import { Intro } from "../components/nosotros/Intro";
import PurposeSection from "../components/nosotros/PurposeSection";
import { Contacto } from "../home/components/Contacto";

export const Nosotros = () => {
  return (
    <main>
      <Intro />
      <ContentDos />
      <Contacto />
      <PurposeSection />
      <CapabilitiesSection />
    </main>
  );
};
