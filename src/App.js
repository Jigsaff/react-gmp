import MovieTile from './components/MovieTile';
import MovieDetails from './components/MovieDetails';
import SortControl from './components/SortControl';
import { useState } from 'react';

function App() {
  const [sortOrder, setSortOrder] = useState('releaseDate');

  function handleSortChange(newSortOrder) {
    setSortOrder(newSortOrder);
  }

  return (
      <div>
        <p className="text-4xl subpixel-antialiased font-semibold text-center mt-8">React
          Global
          Mentoring Program</p>
        <div
            className="container mx-auto bg-light-black rounded-xl shadow border p-8 m-10">
          <p className="text-2xl text-center text-white">MovieTile</p>
          <div className="mt-8 flex flex-row flex-wrap">

            <MovieTile
                movie={{
                  imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY698_.jpg',
                  movieName: 'Pulp Fiction',
                  releaseYear: 1994,
                  genres: ['Crime', 'Drama'],
                }}
                onClick={() => console.log('Movie clicked')}
            />

            <MovieTile
                movie={{
                  imageUrl: 'https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_FMjpg_UY762_.jpg',
                  movieName: 'Bohemian Rhapsody',
                  releaseYear: 2018,
                  genres: ['Biography', 'Drama', 'Music'],
                }}
                onClick={() => console.log('Movie clicked')}
            />

            <MovieTile
                movie={{
                  imageUrl: 'https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UY859_.jpg',
                  movieName: 'Kill Bill: Vol. 2',
                  releaseYear: 2004,
                  genres: ['Action', 'Crime', 'Thriller'],
                }}
                onClick={() => console.log('Movie clicked')}
            />

            <MovieTile
                movie={{
                  imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
                  movieName: 'Avengers: Infinity War',
                  releaseYear: 2018,
                  genres: ['Action', 'Adventure', 'Sci-Fi'],
                }}
                onClick={() => console.log('Movie clicked')}
            />

            <MovieTile
                movie={{
                  imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTkxOTMyMDI0MV5BMl5BanBnXkFtZTcwODU0OTk1Mw@@._V1_.jpg',
                  movieName: 'Inception',
                  releaseYear: 2010,
                  genres: ['Action', 'Adventure', 'Sci-Fi'],
                }}
                onClick={() => console.log('Movie clicked')}
            />

            <MovieTile
                movie={{
                  imageUrl: 'https://m.media-amazon.com/images/M/MV5BYTE2NDI0ZjgtZmI2Ni00NDI4LTgwZTctN2I3OWIzNjhhYjY1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
                  movieName: 'Reservoir Dogs',
                  releaseYear: 1992,
                  genres: ['Crime', 'Thriller'],
                }}
                onClick={() => console.log('Movie clicked')}
            />

          </div>
        </div>

        <div
            className="container mx-auto bg-light-black rounded-xl shadow border p-8 m-10">
          <p className="text-2xl text-center text-white">MovieDetails</p>
          <div className="mt-8">

            <MovieDetails
                movie={{
                  imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY698_.jpg',
                  name: 'Pulp Fiction',
                  releaseYear: 1994,
                  rating: 8.9,
                  duration: '2h 34min',
                  description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
                }}
            />

          </div>
        </div>

        <div
            className="container mx-auto bg-light-black rounded-xl shadow border p-8 m-10">
          <p className="text-2xl text-center text-white">SortControl</p>
          <div className="mt-8">

            <SortControl currentSelection={sortOrder}
                         onSelectionChange={handleSortChange}/>

          </div>
        </div>

      </div>
  );
}

export default App;
