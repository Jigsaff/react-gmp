import { useNavigate } from 'react-router-dom';

export const MovieTile = ({ movie }) => {
  const navigate = useNavigate();
  const { poster_path, title, release_date, genres } = movie;

  const handleTileClick = () => {
    navigate(`movies/${movie.id}`);
  };

  return (
      <div className="basis-1/3 my-4 flex justify-center"
           data-testid="movie-tile" onClick={handleTileClick}>
        <div className="w-[323px]">
          <img className="w-[323px] h-[486px] mb-2" src={poster_path}
               alt={title}/>
          <div className="flex flex-row justify-between">
            <span
                className="font-medium text-lg text-white opacity-70">{title}</span>
            <div
                className="font-medium text-sm border rounded border-slate-400/50 py-1 px-2 text-white opacity-70">{release_date.slice(
                0, 4)}</div>
          </div>
          <p className="font-medium text-sm text-white opacity-50">{genres.join(
              ', ')}</p>
        </div>
      </div>
  );
};

export default MovieTile;
