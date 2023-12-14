//import React, useState, bootstrap.min.css, Row and Col
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

//import container
import Container from "react-bootstrap/Container";

//declare state variables
const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [trailerLink, setTrailerLink] = useState("");
  const [rating, setRating] = useState("");

  //function to help users add new movies

  const handleAddMovie = () => {
    const newMovie = {
      title,
      description,
      posterURL,
      rating,
      trailerLink,
    };

    addMovie(newMovie);

    // Clear the form fields after adding a movie
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
    setTrailerLink("");
  };

  //return form to collect user input
  return (
    <>
      <Container>
        <Row>
          <Col xl={3}>
            <label>Title:</label>
          </Col>

          <Col xl={3}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="inputElement"
            />
          </Col>

          <Col xl={3}>
            <label>Description:</label>
          </Col>

          <Col xl={3}>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="inputElement"
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col xl={3}>
            <label>Poster URL:</label>
          </Col>

          <Col xl={3}>
            <input
              type="text"
              value={posterURL}
              onChange={(e) => setPosterURL(e.target.value)}
              id="inputElement"
            />
          </Col>

          <Col xl={3}>
            <label>Rating:</label>
          </Col>

          <Col xl={3}>
            <input
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="inputElement"
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col xl={3}>
            <label>Trailer Link:</label>
          </Col>

          <Col xl={3}>
            <input
              type="text"
              value={trailerLink}
              onChange={(e) => setTrailerLink(e.target.value)}
              id="inputElement"
            />
          </Col>

          <Col xl={3}>
            <button onClick={handleAddMovie} id="addMovie">
              Add movie
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddMovieForm;
