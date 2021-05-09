
import React from "react";

import clsx from "clsx";

import { Fixation } from "./src/views/Fixation";

import classes from "./app.module.scss"

export const App = () => {

    const appWrapperClsx = clsx({[classes.appContainer]: true});

    return <div className={appWrapperClsx}><Fixation /></div>
  };