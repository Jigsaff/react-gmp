import React from "react";
import { useState } from 'react';
import { genres } from '../MovieTile/genres';

export const GenreSelect = ({ value, onSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleGenreChange = event => {
    onSelect(event);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
      <div
          className={`relative inline-block w-52 ${isDropdownOpen
              ? 'open'
              : ''}`}
          onClick={toggleDropdown}
      >
        <select
            title="Genres"
            name="genres"
            onChange={handleGenreChange}
            value={value}
            className="bg-dark-gray text-white border-none rounded-md cursor-pointer px-4 py-2 w-full font-medium uppercase"
        >
          <option value="All">All</option>

          {genres.map(genre => (
              <option value={genre} key={genre}>
                {genre}
              </option>
          ))}
        </select>
      </div>
  );
};