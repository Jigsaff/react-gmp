import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MovieListPage from './pages/MovieListPage/MovieListPage';
import MovieDetailsWrapper from './components/MovieDetailsWrapper';
import SearchForm from './components/SearchForm';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MovieListPage/>}>
            <Route path="/" element={<SearchForm/>}/>
            <Route path="movies/:movieId" element={<MovieDetailsWrapper/>}/>
          </Route>
        </Routes>
      </Router>
  );
};

export default App;