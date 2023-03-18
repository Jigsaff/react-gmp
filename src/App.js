import './App.css';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';

function App() {
  const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const selectedGenre = 'All';

  function handleSelectGenre(genre) {
    console.log(`Selected genre: ${genre}`);
  }

  const handleSearch = (query) => {
    console.log(`Searching for "${query}"...`);
  };

  return (
      <div>
        <p className="text-4xl subpixel-antialiased font-semibold text-center mt-8">React
          Global
          Mentoring Program</p>
        <div
            className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
          <p className="text-2xl text-center">Component 1</p>
          <div className="text-center mt-8">
            <Counter initialValue={0}></Counter>
          </div>
        </div>

        <div
            className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
          <p className="text-2xl text-center">Component 2</p>
          <div className="text-center mt-8">
            <SearchForm initialQuery="What do you want to watch?"
                        onSearch={handleSearch}/>
          </div>
        </div>

        <div
            className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
          <p className="text-2xl text-center">Component 3</p>
          <div className="text-center mt-8">
            <GenreSelect genres={genres}
                         selectedGenre={selectedGenre}
                         onSelect={handleSelectGenre}
            />
          </div>
        </div>

      </div>
  );
}

export default App;
