import * as React from "react";
import { targetGenerator } from "../../utils/targetGenerator"


export const Fixation = () => {
    const targets = targetGenerator(3, 5);
    return (<div>{targets.map(target => <div key={target}>{target}</div>)}</div>)
}