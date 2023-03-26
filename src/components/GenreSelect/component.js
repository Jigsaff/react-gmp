import React, { useState } from 'react';

export const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
  const [selected, setSelected] = useState(selectedGenre);

  function handleSelect(genre) {
    setSelected(genre);
    onSelect(genre);
  }

  return (
      <div data-testid="genre-select">
        {genres.map(genre => (
            <button
                key={genre}
                onClick={() => handleSelect(genre)}
                className={`font-medium uppercase px-8 py-4 ${
                    genre === selected ? 'font-semibold' : 'font-medium'
                }`}
            >
              {genre}
            </button>
        ))}
      </div>
  );
};

export default GenreSelect;
