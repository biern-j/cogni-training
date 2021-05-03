import React, { useEffect, useState } from "react";

import { useFormik } from "formik";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Target } from "../../interfaces/target";

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
    <form onSubmit={formik.handleSubmit}>
      {trial ? (
        target.target
      ) : (
        <>
          <Input
            label="Response"
            name="response"
            value={formik.values.response}
            onChange={formik.handleChange}
          />
          <Button type="submit">Zatwierdź</Button>
        </>
      )}
    </form>
  );
};
