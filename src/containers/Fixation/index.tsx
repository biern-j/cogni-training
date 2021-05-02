import React, { useEffect, useState } from "react";

import { useFormik } from "formik";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Target } from "../../interfaces/target";

type Props = {
  target: Target;
  nextTargetHandler: (respons: string) => void;
};

export const Fixation = ({ target, nextTargetHandler }: Props) => {
  const formik = useFormik<{ response: string }>({
    initialValues: { response: "" },
    onSubmit: (values) => {
        console.log("values", values);
        nextTargetHandler(values.response)
        formik.resetForm({})    
    },
  });

  console.log("target", target.target);

  return (
    <form onSubmit={formik.handleSubmit}>
      {target.target}
      <Input
        label="Response"
        name="response"
        value={formik.values.response}
        onChange={formik.handleChange}
      />
      <Button type="submit">Zatwierdź</Button>
    </form>
  );
};
