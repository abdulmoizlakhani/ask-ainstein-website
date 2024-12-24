import Button from "@/components/Button";
import StartLearningButton from "@/components/Button/StartLearningButton";
import ComparisionTable from "@/components/ServiceComparisonTable";
import FeebackCard from "@/components/Cards/FeedbackCard";
import data from "@/data/landingPage/data.json";
import TopOnePercentCard from "@/components/Cards/TopOnePercentCard";
import BiggestMistakesCard from "@/components/Cards/BiggestMistakes";
import FamousPErsonality from "@/components/Cards/FamousPErsonality";

export default function Home() {
  const { reviewText, highlight, reviewer } = data.carousel.review;
  const personalities = data.personalityCardData.personalities;
  return (
    <div>
      <Button>Login</Button>
      <Button variant="outlined">Login</Button>
      <Button variant="large" shadow={true}>
        Start Learning Today
      </Button>
      <StartLearningButton />
      <ComparisionTable />
      <FeebackCard
        variant="primary"
        review={reviewText}
        highlight={highlight}
        reviewerName={reviewer.name}
        reviewerDetail={reviewer.detail}
        profileImage={reviewer.profileImage}
      />
      <FeebackCard
        variant="secondary"
        review={
          " 17,643 students are using the platform to improve their learning and exam performance using Ask Ainstein platform."
        }
        profileImage={"/assets/review-people.png"}
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
