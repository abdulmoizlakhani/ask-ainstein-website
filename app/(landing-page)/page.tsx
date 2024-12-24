import Button from "@/components/Button";
import StartLearningButton from "@/components/Button/StartLearningButton";
import ComparisionTable from "@/components/ServiceComparisonTable";
import FeebackCard from "@/components/Cards/FeedbackCard";
import data from "@/data/landingPage/data.json";

export default function Home() {
  const { stars, reviewText, highlight, reviewer } = data.carousel.review;
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
    </div>
  );
}
