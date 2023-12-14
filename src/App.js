//import App.css, React, MovieList and AddMovieForm, bootstrap.min.css,
import "./App.css";
import React, { useState } from "react";
import MovieList from "./MovieList";
import AddMovieForm from "./AddMovieForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

//import BrowserRouter as Router, Route, Switch and Link
import { Routes, Route } from "react-router-dom";

//import MovieDetails
import MovieDetails from "./MovieDetails";
import Movies from "./Movies";

//main App function to be rendered by the App component
const App = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Movies movies={movies} addMovie={addMovie} />}
      />
      <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
    </Routes>
  );
};

export default App;
