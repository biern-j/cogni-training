import "core-js";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Banner } from "./src/components/Banner";
import { Fixation } from "./src/containers/Fixation";

import { targetGenerator } from "./src/utils/targetGenerator";
import { Target } from "./src/interfaces/target";

import "./src/styles/global.scss";

export const App = () => {
  enum TrainingPart {
    target = "TARGET",
    input = "INPUT",
    results = "RESULTS",
  }

  type Targets = { [key: number]: Target };

  const [currentTarget, setCurrentTarget] = useState(0);
  const [targets, setTargets] = useState<Targets>();
  const [result, setResult] = useState(false);

  useEffect(() => {
    const preparedTargets = targetGenerator(3, 5).reduce(
      (acc, curr, index) => ({ ...acc, [index]: { target: curr, id: index } }),
      {}
    );
    console.log("targets prep", preparedTargets);
    setTargets(preparedTargets);
  }, []);

  const handleNextTarget = (response: string) => {
    console.log("response", response);
    if (targets) {
      setTargets({
        ...targets,
        [currentTarget]: {
          ...targets[currentTarget],
          response,
          correct: targets[currentTarget].target === response,
        },
      });
    }

    if (currentTarget !== 5) {
      setCurrentTarget(currentTarget + 1);
    } else {
      setResult(true);
  };
}
  const sum = targets&&Object.values(targets).reduce((acc, curr) => {
    if(curr.correct) {
      return acc + 1
    }
    return acc
  }, 0);

  console.log("sum",sum)

  return (
    <div>
      {targets && (
        <Fixation
          target={targets[currentTarget]}
          nextTargetHandler={handleNextTarget}
        />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
