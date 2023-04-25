import React, { useState } from 'react';
import { genres } from '../MovieTile/genres';

export const GenreSelect = ({ selectedGenre, onSelect }) => {
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
                className={`text-white font-normal uppercase px-8 py-4 ${
                    genre === selected ? 'font-semibold' : ''
                }`}
            >
              {genre}
            </button>
        ))}
      </div>
  );
};

export default GenreSelect;
