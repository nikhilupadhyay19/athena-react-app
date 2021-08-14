import React from "react";
import "./ExpenseForm.component.styles.css";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

import { Wrap } from "../../../Wrap/Wrap.component";

export const ExpenseForm = () => {
  const ExpenseFormSubmitHandler = (event) => {
    event.preventDefault();
    window.history.back();
  };

  return (
    <Wrap className="expense__form">
      <div className="expense__ui-wrap">
        <Container fluid>
          <Row>
            <Col md={12}>
              <h1 className="mb-4 expense__form-title">Add New Expense</h1>
            </Col>
            <Col md={12}>
              <Form className="row">
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="text"
                      placeholder="Enter Title"
                      className="mb-4"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="text"
                      placeholder="Enter Amount"
                      className="mb-4"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input type="date" name="date" className="mb-4" />
                  </FormGroup>
                </Col>
                <Col className="text-right">
                  <Input
                    type="submit"
                    className="btn btn-warning expense__form-submit"
                    onSubmit={ExpenseFormSubmitHandler}
                    value="Add Expense"
                  />
                </Col>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Wrap>
  );
};
