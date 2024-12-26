import FeebackCard from "@/components/Cards/FeedbackCard";
import FirstPrinciplesCard from "@/components/Cards/FirstPrincipleCard";
import FamousPersonality from "@/components/FamousPersonality";
import HeroSection from "@/components/HeroSection";
import ServiceComparisonTable from "@/components/ServiceComparisonTable";
import StudyMistakes from "@/components/StudyMistakes";
import TopOnePercentCard from "@/components/TopOnePercentCard";
import landingPageData from "@/data/landingPage/data.json";

export default function LandingPage() {
  const { review: carouselReview } = landingPageData.carousel;
  const { secondReview } = landingPageData;

  return (
    <>
      <HeroSection />
      <div className="px-4">
        <ServiceComparisonTable />
      </div>
      <FirstPrinciplesCard />
      <FamousPersonality />
      <StudyMistakes />
      <TopOnePercentCard />
      <FeebackCard
        rating={secondReview.rating}
        reviewText={secondReview.reviewText}
        hightlightedText={secondReview.highlight}
        reviewer={secondReview.reviewer}
      />
    </>
  );
}
