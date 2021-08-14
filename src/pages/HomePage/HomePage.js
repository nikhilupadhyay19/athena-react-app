import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "reactstrap";

import "./HomePage.styles.css";

const regions = [
  { name: "Asia", imgUrl: "", linkUrl: "products" },
  { name: "Europe", imgUrl: "", linkUrl: "products" },
  { name: "Africa", imgUrl: "", linkUrl: "products" },
  { name: "Oceania", imgUrl: "", linkUrl: "products" },
  { name: "Americas", imgUrl: "", linkUrl: "products" },
  { name: "Polar", imgUrl: "", linkUrl: "products" },
  { name: "No Region", imgUrl: "", linkUrl: "about-us" },
  { name: "Expense Tracker", imgUrl: "", linkUrl: "expense-tracker" },
];

const HomePage = (props) => {
  console.log(props);
  const { history, match } = props;

  return (
    <div className="home__page" id="home_page">
      <Container>
        <Row>
          {regions.map((elem) => {
            return (
              <Col md={4} className="m-bt-1p5" key={elem.name}>
                <Jumbotron
                  className={"region__card-" + elem.name}
                  onClick={() => history.push(`${match.url}${elem.linkUrl}`)}
                >
                  <h1 className="display-5">{elem.name}</h1>
                </Jumbotron>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default withRouter(HomePage);
