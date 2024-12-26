import FeebackCard from "@/components/Cards/FeedbackCard";
import FirstPrinciplesCard from "@/components/Cards/FirstPrincipleCard";
import HeroSection from "@/components/HeroSection";
import ServiceComparisonTable from "@/components/ServiceComparisonTable";
import StudyMistakes from "@/components/StudyMistakes";
import TopOnePercentCard from "@/components/TopOnePercentCard";
import landingPageData from "@/data/landingPage/data.json";

export default function LandingPage() {
  const { reviewText, highlight, reviewer } = landingPageData.secondReview;

  return (
    <>
      <HeroSection />
      <div className="px-4">
        <ServiceComparisonTable />
      </div>
      <FirstPrinciplesCard />
      <StudyMistakes />
      <TopOnePercentCard />
      <FeebackCard
        rating={5}
        reviewText={reviewText}
        hightlightedText={highlight}
        reviewer={reviewer}
      />
    </>
  );
}
