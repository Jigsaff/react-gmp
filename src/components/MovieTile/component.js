import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const MovieTile = ({ movie, onClick }) => {
  const navigate = useNavigate();

  const { title, release_date, genres, poster_path } = movie;
  const [showContextMenu, setShowContextMenu] = useState(false);

  const toggleContextMenu = e => {
    e.stopPropagation();
    setShowContextMenu(prevShowContextMenu => !prevShowContextMenu);
  };

  const handleEdit = () => {
    navigate(`/movies/${movie.id}/edit`, { state: { movie } });
  };

  const handleDelete = () => {
    console.log('Delete action for movie:', movie);
  };

  const handleTileClick = async () => {
    if (onClick) {
      onClick(movie);
    }
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (showContextMenu) {
        setShowContextMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showContextMenu]);

  return (
      <div
          className="relative flex flex-col p-4 cursor-pointer">
        <button onClick={handleTileClick}>
          <img
              className="mb-2"
              src={`https://image.tmdb.org/t/p/w185${poster_path}`}
              alt={title}
          />
          <div className="flex justify-between">
            <span className="font-medium text-lg text-white opacity-70">{title}</span>
            <span className="font-medium text-sm border rounded border-slate-400/50 py-1 px-2 text-white opacity-70">{release_date.slice(
                0, 4)}</span>
          </div>
          <p className="font-medium text-sm text-white opacity-50 text-left">
            {genres ? genres.join(', ') : ''}
          </p>
        </button>

        <div className="absolute top-8 right-8 flex flex-col items-end">
          <button
              className="text-white bg-transparent border-none text-2xl cursor-pointer rotate-90"
              aria-label="context menu"
              onClick={toggleContextMenu}
          >
            &#x2026;
          </button>
          {showContextMenu && (
              <div
                  className="absolute top-2 right-0 flex flex-col bg-dark-gray rounded-md z-10">
                <button
                    className="text-white border-none py-2 px-4 cursor-pointer"
                    onClick={handleEdit}
                >
                  Edit
                </button>
                <button
                    className="text-white border-none py-2 px-4 cursor-pointer"
                    onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
          )}
        </div>
      </div>
  );
};