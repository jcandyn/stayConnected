import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Main() {
  return (
    <Container fluid>
      <Row>
      <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Need to reach out to!</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🤠
              </span>
            </h1>
          </Jumbotron>
        </Col>
        <Col size="md-6 sm-12">
        <Jumbotron>
            <h1>Already connected with</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
              😊
              </span>
            </h1>
          </Jumbotron>
            </Col>
      </Row>
    </Container>
  );
}

export default Main;
