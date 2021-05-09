import React, { ReactNode } from "react"

import clsx from "clsx"

import classes from "./content-wrapper.module.scss"

type Props = {
    children: ReactNode
}

export const ContentWrapper = ({children}: Props) => {

    const containerWrapperClsx = clsx({[classes.containerWrapper]: true});
    return (
        <div className={containerWrapperClsx}>
            {children}
        </div>
    )
}