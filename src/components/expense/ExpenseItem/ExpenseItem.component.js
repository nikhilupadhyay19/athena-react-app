import React from "react";
import "./ExpenseItem.component.styles.css";

import { Container, Row, Col } from "reactstrap";

import { Wrap } from "../../Wrap/Wrap.component";

export const ExpenseItem = (props) => {
  const { title, amount, date } = props;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const expenseDay = date.toLocaleDateString(undefined, options);
  return (
    <Wrap className="expense__item">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={3}>
            <span className="expense__item-date__day">{expenseDay}</span>
          </Col>
          <Col>
            <p className="expense__item-title">{title}</p>
          </Col>
          <Col md={2}>
            <span className="expense__item-amount">{amount}</span>
          </Col>
        </Row>
      </Container>
    </Wrap>
  );
};
