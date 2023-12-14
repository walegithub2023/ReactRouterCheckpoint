import React from "react";
import MovieList from "./MovieList";
import AddMovieForm from "./AddMovieForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

const Movies = ({ movies, addMovie }) => {
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
        <Row>
          <div id="newMovieDiv">
            <h6 className="text-center" id="newMovie">
              NEW MOVIE
            </h6>
          </div>
        </Row>

        <Row>
          <div id="newMovieDiv" style={{ padding: "15px" }}>
            <AddMovieForm addMovie={addMovie} />
          </div>
        </Row>

        <Row>
          <div id="filterMovieDiv">
            <h6 className="text-center" id="filterMovie">
              FILTER MOVIE
            </h6>
            <p></p>
          </div>
        </Row>

        <Row>
          <div id="filterMovieDiv">
            <MovieList movies={movies} />
          </div>
        </Row>

        {/* footer section */}
      </Container>

      <Row className="bg-primary" id="footer">
        <div>Copyright @ movies 2023</div>
      </Row>
    </>
  );
};

export default Movies;
