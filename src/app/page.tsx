import About from "@/components/section/About";
import AskYourSelf from "@/components/section/AskYourSelf";
import ComparisionSection from "@/components/section/ComparisionSection";
import CruasalSeciton from "@/components/section/CruasalSeciton";
import FirstPrinciplesPage from "@/components/section/FirstPrinciplesSection";
import FunctionalitySection from "@/components/section/FunctionalitySection";
import Hero from "@/components/section/Hero";
import StudyMistakes from "@/components/custom/cards/StudyMistakes";
import WhySection from "@/components/section/WhySection";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <FunctionalitySection/>
      <CruasalSeciton/>
      <WhySection/>
      <ComparisionSection/>
      <FirstPrinciplesPage/>
      {/* <StudyMistakes/> */}
      {/* <AskYourSelf/> */}
    </main>
  );
}    