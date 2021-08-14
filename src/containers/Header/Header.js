import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Wrap } from "../../components/Wrap/Wrap.component";

import "./Header.styles.css";

import { Navbar } from "../../components/Navbar/Navbar.component";

export const Header = () => {
  return (
    <Wrap className="app__header">
      <Container fluid>
        <Row>
          <Col md={12}>
            <Row>
              <div className="app__social-media text-center">
                <h3>Header</h3>
              </div>
            </Row>
          </Col>
          <Col md={12}>
            <Navbar />
          </Col>
        </Row>
      </Container>
    </Wrap>
  );
};
