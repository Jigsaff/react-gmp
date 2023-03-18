import React, { useState } from 'react';

export const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
  const [selected, setSelected] = useState(selectedGenre);

  function handleSelect(genre) {
    setSelected(genre);
    onSelect(genre);
  }

  return (
      <div>
        {genres.map(genre => (
            <button
                key={genre}
                onClick={() => handleSelect(genre)}
                className="font-medium uppercase px-8 py-4"
                style={{
                  fontWeight: genre === selected
                      ? 600
                      : 500,
                }}
            >
              {genre}
            </button>
        ))}
      </div>
  );
};

export default GenreSelect;
