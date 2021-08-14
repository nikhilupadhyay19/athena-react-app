import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// Pages imported here

import HomePage from "../../pages/HomePage/HomePage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import { AboutusPage } from "../../pages/AboutUsPage/AboutUsPage";
import ExpenseTrackerPage from "../../pages/ExpenseTrackerPage/ExpenseTrackerPage";

import "./Main.styles.css";
import { Wrap } from "../../components/Wrap/Wrap.component";

export const Main = () => {
  return (
    <Wrap className="app__main" id="app_main">
      <Container>
        <Row>
          <Col md={12}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/products" component={ProductPage} />
              <Route exact path="/about-us" component={AboutusPage} />
              <Route
                exact
                path="/expense-tracker"
                component={ExpenseTrackerPage}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Wrap>
  );
};
