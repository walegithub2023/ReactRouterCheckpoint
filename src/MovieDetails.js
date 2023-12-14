//import boostrap.min.css, Container, Row, Col, Navbar and Nav
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const [singleMovies, setSingleMovies] = useState(null);

  const { title } = useParams();

  React.useEffect(() => {
    console.log(movies);
    setSingleMovies(movies.find((item) => item.title === title));
  }, []);

  return (
    <>
      <Container id="container1" fluid>
        {/*   header section */}
        <Row className="bg-primary" id="Row1">
          <Col id=""></Col>
          <Col>
            <Navbar expand="lg" className="bg-body-primary text-center">
              <Container className="text-center">
                <Navbar.Brand
                  href="#home"
                  className="text-light display-4"
                  id="movies"
                >
                  MOVIES
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home" className="text-light">
                      Home
                    </Nav.Link>
                    <Nav.Link href="#link" className="text-light">
                      Contact
                    </Nav.Link>
                    <Nav.Link href="#link" className="text-light">
                      Login
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
          <Col></Col>
        </Row>

        {/* body section */}
        <Row style={{ marginTop: "50px", marginBottom: "10px" }}>
          <Col xl={3}></Col>
          <Col xl={6}>
            <div
              style={{
                border: "1px solid grey",
                padding: "30px",
                margin: "auto",
                borderRadius: "3px",
              }}
            >
              {/* Embed the video trailer link here */}
              <iframe
                style={{ margin: "auto" }}
                title={`${singleMovies?.title} Trailer`}
                width="100%"
                height="450"
                src={singleMovies?.trailerLink}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          <Col xl={2}></Col>
        </Row>
        <Row>
          <Col xl={3}></Col>
          <Col xl={6}>
            <div
              id="newMovieDiv"
              style={{ padding: "50px", textAlign: "justify", margin: "auto" }}
            >
              <h2>{singleMovies?.title}</h2>
              <p>{singleMovies?.description}</p>
              <h6>Rating: {singleMovies?.rating}</h6>

              <Link to="/">Back to Home</Link>
            </div>
          </Col>
          <Col xl={2}></Col>
        </Row>

        {/* footer section */}
      </Container>

      <Row className="bg-primary" id="footer">
        <div>Copyright @ movies 2023</div>
      </Row>
    </>
  );
};

export default MovieDetails;
