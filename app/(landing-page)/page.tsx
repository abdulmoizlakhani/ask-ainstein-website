import Button from "@/components/Button";
import StartLearningButton from "@/components/Button/StartLearningButton";

export default function Home() {
  return (
    <div>
      <Button>Login</Button>
      <Button variant="outlined">Login</Button>
      <Button variant="large" shadow={true}>
        Start Learning Today
      </Button>
      <StartLearningButton />
    </div>
  );
}
