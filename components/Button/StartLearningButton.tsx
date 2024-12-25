import React from "react";

import Button from ".";

const StartLearningButton = () => {
  return (
    <div className="flex w-fit flex-col gap-2">
      <Button variant="large" shadow={true}>
        Start Learning Today
      </Button>
      <p className="text-end lg:text-base text-[0.625rem] text-secondary-100">
        Free for limited time
      </p>
    </div>
  );
};

export default StartLearningButton;
