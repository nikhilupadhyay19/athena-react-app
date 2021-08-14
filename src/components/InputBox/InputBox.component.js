import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

import "./InputBox.component.styles.css";

export const InputBox = (props) => {
  const {
    labelFor,
    labelClass,
    labelText,
    type,
    name,
    id,
    placeholder,
    inputClass,
    handler,
    value,
  } = props;

  return (
    <FormGroup>
      <Label for={labelFor} className={labelClass}>
        {labelText}
      </Label>
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={inputClass}
        onChange={handler}
        value={value}
      />
    </FormGroup>
  );
};
