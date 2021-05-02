import React from "react";

type Props = JSX.IntrinsicElements["input"] & {
  label?: string;
  placeholder?: string;
  id?: string;
};

export const Input = ({ ...restProps }: Props) => (
  <>
    <label htmlFor={restProps.id}>{restProps.label}</label>
    <input id={restProps.id} {...restProps} />
  </>
);
