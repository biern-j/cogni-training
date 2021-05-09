import React from "react"

import { Targets } from "../../interfaces/target"

import  classes  from "./results.module.scss";

type Props = {
    targets: Targets;
    corrects?: number;
    miss?: number
}
export const Results = ({ targets, corrects, miss }: Props) => (<div>
    <ul>{Object.values(targets).map(target => <li key={target.id} className={classes.correctResult} >{target.target}</li> )}</ul>
    <div>Correct: {corrects}</div>
    <div>Miss: {miss}</div>
</div>)