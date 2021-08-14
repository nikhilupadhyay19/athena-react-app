import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

import "./SelectBox.component.styles.css";

export const SelectBox = (props) => {
  const { labelFor, labelClass, labelText, id, inputClass, handler, options } =
    props;

  return (
    <FormGroup>
      <Label for={labelFor} className={labelClass}>
        {labelText}
      </Label>
      <Input
        type="select"
        name="select"
        id={id}
        className={inputClass}
        onChange={handler}
      >
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          );
        })}
      </Input>
    </FormGroup>
  );
};
