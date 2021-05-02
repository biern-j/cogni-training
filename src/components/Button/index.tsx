import React from "react";

type Props = JSX.IntrinsicElements["button"] & {
    children: any,
}

export const Button = ({children, ...restProps}: Props) => {
    return <button {...restProps}>{children}</button>
}