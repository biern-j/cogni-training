import "core-js";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Banner } from "./src/components/Banner";
import { Results } from "./src/components/Results";

import { Fixation } from "./src/containers/Fixation";

import { targetGenerator } from "./src/utils/targetGenerator";
import { sum } from "./src/utils/fixationResult";
import { Target, Targets } from "./src/interfaces/target";

import "./src/styles/global.scss";

const targetDificulty = 3;

const trainingRepetition = 3;

export const App = () => {

  const [currentTarget, setCurrentTarget] = useState(0);
  const [targets, setTargets] = useState<Targets>();
  const [trainingEnd, setTrainingEnd] = useState(false);

  useEffect(() => {
    const preparedTargets = targetGenerator(targetDificulty, trainingRepetition).reduce(
      (acc, curr, index) => ({ ...acc, [index]: { target: curr, id: index } }),
      {}
    );
    setTargets(preparedTargets);
  }, []);

  const handleNextTarget = (response: string) => {
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

    if (currentTarget + 1 !== trainingRepetition) {
      setCurrentTarget(currentTarget + 1);
    } else {
      setTrainingEnd(true);
  };
}

  const bodyToRender = () => {
    if(targets && !trainingEnd) {
      return <Fixation
          target={targets[currentTarget]}
          nextTargetHandler={handleNextTarget}
        />
    }
    if (targets && trainingEnd) {
      const trainingResult = sum(targets);
      return <Results corrects={trainingResult?.correct} miss={trainingResult?.miss}/>
    }
    return null;
  }

  console.log("targets", targets)

  return (
    <div>
      {bodyToRender()}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
