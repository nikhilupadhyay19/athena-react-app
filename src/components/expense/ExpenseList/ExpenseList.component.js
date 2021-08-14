import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem.component";

import "./ExpenseListcomponent.styles.css";

import { Wrap } from "../../Wrap/Wrap.component";

export const ExpenseList = (props) => {
  const { expenses } = props;

  return (
    <Wrap className="expense__list expense__ui-wrap">
      <Container fluid>
        <Row>
          {expenses.map((elem) => {
            return (
              <Col md={12} key={elem.id}>
                <ExpenseItem
                  title={elem.title}
                  amount={elem.amount}
                  date={elem.date}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Wrap>
  );
};
