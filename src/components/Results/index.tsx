import React from "react";

import clsx from "clsx";
import { List, ListItem, Typography, Box, Grid } from "@material-ui/core";

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
    <Grid>
      <List className={ResultClsx}>
        {Object.values(targets).map((target) => (
          <ListItem
            key={target.id}
            className={target.correct ? classes.correctResult : classes.missResult}
          >
            {target.target} - {target.correct === false ? target.response : "good answer"}
          </ListItem>
        ))}
      </List>
      <Box className={classes.resultSummap}>
        <Typography>Correct: {corrects}</Typography>
        <Typography>Miss: {miss}</Typography>
      </Box>
      <Img />
    </Grid>
  );
};
