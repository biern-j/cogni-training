import React, { ReactNode } from "react"

import clsx from "clsx"
import { Box } from "@material-ui/core"

import classes from "./content-wrapper.module.scss"

type Props = {
    children: ReactNode
}

export const ContentWrapper = ({children}: Props) => {

    const containerWrapperClsx = clsx({[classes.containerWrapper]: true});
    return (
        <Box className={containerWrapperClsx}>
            {children}
        </Box>
    )
}