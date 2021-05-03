import React from "react"

type Props = {
    corrects?: number;
    miss?: number
}
export const Results = ({corrects, miss }: Props) => (<div>
    <div>Correct: {corrects}</div>
    <div>Miss: {miss}</div>
</div>)