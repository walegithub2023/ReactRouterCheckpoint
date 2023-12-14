//import React and bootstrap.min.css
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Row, Col and Container

import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

//function to collect user input for filtering by title or rating

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <>
      <Container>
        <Row style={{ marginTop: "15px", paddingBottom: "15px" }}>
          <Col xl={3}>
            <label>Filter by Title:</label>
          </Col>

          <Col xl={3}>
            <input
              style={{ height: "40px" }}
              type="text"
              onChange={(e) => setFilterTitle(e.target.value)}
            />
          </Col>

          <Col xl={3}>
            <label>Filter by Rating:</label>
          </Col>

          <Col xl={3}>
            <input
              style={{ height: "40px" }}
              type="text"
              onChange={(e) => setFilterRating(e.target.value)}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Filter;
