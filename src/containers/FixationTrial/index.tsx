import React, { useEffect, useState } from "react";
import { Input, Button } from '@material-ui/core';

import { useFormik } from "formik";

// import { Input } from "../../components/Input";
// import { Button } from "../../components/Button";

import { Target } from "../../interfaces/target";

import classes from "./fixation-trial.module.scss"

type Props = {
  target: Target;
  nextTargetHandler: (respons: string) => void;
};

export const FixationTrial = ({ target, nextTargetHandler }: Props) => {
  const [trial, usetTrial] = useState(true);

  console.log({trial})
  const formik = useFormik<{ response: string }>({
    initialValues: { response: "" },
    onSubmit: (values) => {
      nextTargetHandler(values.response);
      formik.resetForm({});
    },
  });

  useEffect(() => {
    usetTrial(true);
    const tiralTimeout = setTimeout(() => usetTrial(false), 2000);
    return () => clearTimeout(tiralTimeout);
  }, [target]);

  return (
    <form className={classes.fixationTrial} onSubmit={formik.handleSubmit}>
      {trial ? (
        <div className={classes.fixationTarget}>{target.target}</div>
      ) : (
        <>
          <Input
            // label="Response"
            autoFocus
            placeholder="response"
            name="response"
            value={formik.values.response}
            onChange={formik.handleChange}
          />
          <Button type="submit" variant="contained" color="primary" size="medium">Zatwierdź</Button>
        </>
      )}
    </form>
  );
};
