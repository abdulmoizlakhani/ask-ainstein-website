import FeebackCard from "@/components/Cards/FeedbackCard";
import FirstPrinciplesCard from "@/components/Cards/FirstPrincipleCard";
import HeroSection from "@/components/HeroSection";
import StudyMistakes from "@/components/StudyMistakes";
import TopOnePercentCard from "@/components/TopOnePercentCard";
import landingPageData from "@/data/landingPage/data.json";

export default function LandingPage() {
  const { review: carouselReview } = landingPageData.carousel;
  const { secondReview } = landingPageData;

  return (
    <>
      <HeroSection />
      <FeebackCard
        rating={carouselReview.rating}
        reviewText={carouselReview.reviewText}
        hightlightedText={carouselReview.highlight}
        reviewer={carouselReview.reviewer}
      />
      <FirstPrinciplesCard />
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
