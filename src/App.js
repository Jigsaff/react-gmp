import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import MovieDetailsWrapper from './components/MovieDetailsWrapper';
import SearchForm from './components/SearchForm';
import AddMovieForm from './components/MovieForm/AddMovieForm';
import EditMovieForm from './components/MovieForm/EditMovieForm';

const App = () => {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<MovieListPage/>}>
              <Route path="/" element={<SearchForm/>}>
                <Route path="new" element={<AddMovieForm/>}/>
                <Route path="/movies/:movieId/edit" element={<EditMovieForm/>}/>
              </Route>

              <Route path="movies/:movieId" element={<MovieDetailsWrapper/>}/>
            </Route>
          </Routes>
        </Router>
      </>
  );
};

export default App;