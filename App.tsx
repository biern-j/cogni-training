import React, { useState } from "react";

import clsx from "clsx";
import { ThemeProvider, createMuiTheme, Button, Grid, Paper } from "@material-ui/core";

import { light, dark } from "./assets/colors";

import { Fixation } from "./src/views/Fixation";

import classes from "./app.module.scss";
type ModeType = "light" | "dark";

export const App = () => {
  const [mode, setMode] = useState<ModeType>("light");
  const appWrapperClsx = clsx({ [classes.appContainer]: true });
  const theme = createMuiTheme(mode === "light" ? light : dark);

  return (
    <ThemeProvider theme={theme}>
      <Paper className={appWrapperClsx}>
        <Button onClick={() => setMode(mode === "light" ? "dark" : "light")}>mode</Button>
        <Fixation />
      </Paper>
    </ThemeProvider>
  );
};
