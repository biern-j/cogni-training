import React from "react";

import { Input, InputProps } from "@material-ui/core";

type Props = InputProps & {
  label?: string;
  placeholder?: string;
  id?: string;
};

export const Inputs = ({ ...restProps }: Props) => (
  <>
    <label htmlFor={restProps.id}>{restProps.label}</label>
    <Input id={restProps.id} {...restProps} />
  </>
);
