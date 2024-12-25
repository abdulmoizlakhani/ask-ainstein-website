import Button from "@/components/Button";
import StartLearningButton from "@/components/Button/StartLearningButton";
import FeedbackCard from "@/components/Cards/FeedbackCard";
import RatingCard from "@/components/Cards/RatingCard";
import StudyMistakes from "@/components/Cards/StudyMistakes";
import TopOnePercentCard from "@/components/Cards/TopOnePercentCard";
import ComparisionTable from "@/components/ServiceComparisonTable";
import data from "@/data/landingPage/data.json";

export default function Home() {
  const { reviewText, highlight, reviewer } = data.carousel.review;
  return (
    <div className="bg-secondary-bg">
      <Button>Login</Button>
      <Button variant="outlined">Login</Button>
      <Button variant="large" shadow={true}>
        Start Learning Today
      </Button>
      <StartLearningButton />
      <ComparisionTable />
      <RatingCard
        rating={5}
        text="17,643 students are using the platform to improve their learning and exam performance using Ask Ainstein platform."
        image={{
          src: "/assets/review-people.png",
          alt: "Review People",
        }}
      />
      <FeedbackCard
        rating={5}
        reviewText={reviewText}
        hightlightedText={highlight}
        reviewer={reviewer}
      />
      <TopOnePercentCard />
      <StudyMistakes />
    </div>
  );
}
