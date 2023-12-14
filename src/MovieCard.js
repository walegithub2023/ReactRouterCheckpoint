//import React, bootstrap.min.css, Row and Col
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

//import Link
import { Link } from "react-router-dom";

//function to display movie postal, title, description and rating
const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.title}`}>
      <Row id="movieCardDiv" style={{ margin: "10px", padding: "15px" }}>
        <Row
          id="movieCardDiv"
          style={{ border: "1px solid #ccc", margin: "10px", padding: "15px" }}
        >
          <Col md={3}>
            <img
              src={movie.posterURL}
              alt={movie.title}
              style={{ maxWidth: "200px" }}
            />
          </Col>

          <Col md={8}>
            <h3>{movie.title}</h3>
            <p style={{ textAlign: "justify", lineHeight: "30px" }}>
              {movie.description}
            </p>
            <h6 style={{ marginTop: "20px" }}>Rating: {movie.rating}</h6>
          </Col>
        </Row>
      </Row>
    </Link>
  );
};

export default MovieCard;
