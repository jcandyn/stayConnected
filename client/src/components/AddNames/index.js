import React from "react";
import { Col, Row, Container } from "../Grid";

function AddNames() {
  return (
    <Container fluid>
        <Row>
        <Col size="md-6 sm-12">
        <div
             style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px"
              }}>

    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate"/>
          <label for="icon_prefix">First Name</label>
        </div>
        </div>
        </form>
        </div>
</Col>
    </Row>
    </Container>
  );
}

export default AddNames;
