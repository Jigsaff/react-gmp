export const MovieTile = ({ movie, onClick }) => {
  const { imageUrl, movieName, releaseYear, genres } = movie;

  return (
      <div className="basis-1/3 my-4 flex justify-center"
           data-testid="movie-tile" onClick={onClick}>
        <div className="w-[323px]">
          <img className="w-[323px] h-[486px] mb-2" src={imageUrl}
               alt={movieName}/>
          <div className="flex flex-row justify-between">
            <span
                className="font-medium text-lg text-white opacity-70">{movieName}</span>
            <div
                className="font-medium text-sm border rounded border-slate-400/50 py-1 px-2 text-white opacity-70">{releaseYear}</div>
          </div>
          <p className="font-medium text-sm text-white opacity-50">{genres.join(
              ', ')}</p>
        </div>
      </div>
  );
};

export default MovieTile;
