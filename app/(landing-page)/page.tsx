import Hero from "@/components/Sections/Hero";
import ServiceComparisonTable from "@/components/ServiceComparisonTable";
// import Button from "@/components/Button";
// import StartLearningButton from "@/components/Button/StartLearningButton";
// import FeedbackCard from "@/components/Cards/FeedbackCard";
// import FirstPrinciplesCard from "@/components/Cards/FirstPrincipleCard";
// import RatingCard from "@/components/Cards/RatingCard";
// import Carousel from "@/components/Carousel";
// import ComparisionTable from "@/components/ServiceComparisonTable";
// import StudyMistakes from "@/components/StudyMistakes";
// import TopOnePercentCard from "@/components/TopOnePercentCard";
// import landingPageData from "@/data/landingPage/data.json";

export default function LandingPage() {
  // const { reviewText, highlight, reviewer } = landingPageData.carousel.review;

  return (
    <div className="bg-secondary-bg">
      <Hero />
      <div className="px-4">
        <ServiceComparisonTable />
      </div>
    </div>
  );
}
