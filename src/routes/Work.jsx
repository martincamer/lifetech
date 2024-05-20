import BuscamosSection from "../components/work/BuscamosSection";
import { IntroWork } from "../components/work/IntroWork";
import JoinTeamSection from "../components/work/JoinTeamSection";
import OfrecemosSection from "../components/work/OfrecemosSection";

export const Work = () => {
  return (
    <main>
      <IntroWork />
      <OfrecemosSection />
      <BuscamosSection />
      <JoinTeamSection />
    </main>
  );
};
