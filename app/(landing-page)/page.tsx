import Button from "@/components/Button";
import StartLearningButton from "@/components/Button/StartLearningButton";
import FeedbackCard from "@/components/Cards/FeedbackCard";
import RatingCard from "@/components/Cards/RatingCard";
import ComparisionTable from "@/components/ServiceComparisonTable";
import data from "@/data/landingPage/data.json";
import TopOnePercentCard from "@/components/Cards/TopOnePercentCard";
import BiggestMistakesCard from "@/components/Cards/BiggestMistakes";
import FamousPErsonality from "@/components/Cards/FamousPErsonality";

export default function Home() {
  const { reviewText, highlight, reviewer } = data.carousel.review;
  const personalities = data.personalityCardData.personalities;
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
      <BiggestMistakesCard />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem]">
        {personalities.map((person, index) => (
          <FamousPErsonality key={index} person={person} />
        ))}
      </div>
    </div>
  );
}
