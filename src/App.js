import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage/MovieListPage";
import MovieDetailsWrapper from "../src/components/MovieDetailsWrapper";
import SearchForm from "../src/components/SearchForm";
import AddMovieForm
  from "../src/components/MovieForm/AddMovieForm/AddMovieForm";
import EditMovieForm
  from "../src/components/MovieForm/EditMovieForm/EditMovieForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieListPage />}>
          <Route path="/" element={<SearchForm />}>
            <Route path="new" element={<AddMovieForm />} />
            <Route path="/movies/:movieId/edit" element={<EditMovieForm />} />
          </Route>

          <Route path="movies/:movieId" element={<MovieDetailsWrapper />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;