import React from "react";

import clsx from "clsx";

import { Targets } from "../../interfaces/target";

import { Img } from "../Img";

import classes from "./results.module.scss";

type Props = {
  targets: Targets;
  corrects?: number;
  miss?: number;
};
export const Results = ({ targets, corrects, miss }: Props) => {
  const ResultClsx = clsx({ [classes.result]: true });

  console.log("targets", targets);

  return (
    <>
      <ul className={ResultClsx}>
        {Object.values(targets).map((target) => (
          <li
            key={target.id}
            className={target.correct ? classes.correctResult : classes.missResult}
          >
            {target.target} - {target.correct === false ? target.response : "good answer"}
          </li>
        ))}
      </ul>
      <div className={classes.resultSummap}>
        <div>Correct: {corrects}</div>
        <div>Miss: {miss}</div>
      </div>
      <Img/>
    </>
  );
};
