import React from "react";

import "./Wrap.component.styles.css";

export const Wrap = (props) => {
  return <div className={props.className}>{props.children}</div>;
};
