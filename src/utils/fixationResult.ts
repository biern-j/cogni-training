import { Targets } from "../interfaces/target"

export const sum = (targets: Targets) => Object.values(targets).reduce((acc, curr) => {
    if(curr.correct) {
      return {...acc, correct: acc.correct + 1}
    }
    return {...acc, miss: acc.miss + 1}
  }, {correct: 0, miss: 0});