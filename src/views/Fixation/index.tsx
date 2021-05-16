import "core-js";
import React, { useEffect, useState } from "react";
import { Results } from "../../components/Results";
import { ContentWrapper } from "../../components/ContentWrapper";

import { FixationTrial } from "../../containers/FixationTrial";

import { targetGenerator } from "../../utils/targetGenerator";
import { sum } from "../../utils/fixationResult";
import { Target, Targets } from "../../interfaces/target";

const targetDificulty = 3;

const trainingRepetition = 3;

export const Fixation = () => {

  const [currentTarget, setCurrentTarget] = useState(0);
  const [targets, setTargets] = useState<Targets>(); 

  const trainingEnd = currentTarget === trainingRepetition;

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
    setCurrentTarget(currentTarget + 1);
}

  const bodyToRender = () => {
    if(targets && trainingEnd === false) {
      console.log("currentTarget", targets[currentTarget]);
      return <FixationTrial
          target={targets[currentTarget]}
          nextTargetHandler={handleNextTarget}
        />
    }
    if (targets && trainingEnd) {
      const trainingResult = sum(targets);
      return <Results targets={targets} corrects={trainingResult?.correct} miss={trainingResult?.miss}/>
    }
    return null;
  }

  console.log("trainingEnd", trainingEnd);

  return (
      <ContentWrapper>
      {bodyToRender()}
      </ContentWrapper>
  );
};
