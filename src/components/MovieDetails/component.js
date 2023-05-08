export const formatTime = minutes => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const formattedHours = hours > 0 ? `${hours}h` : '';
  const formattedMinutes = remainingMinutes > 0 ? `${remainingMinutes}m` : '';
  const separator = formattedHours && formattedMinutes ? ' ' : '';
  return formattedHours + separator + formattedMinutes;
};

export const MovieDetails = ({ movie }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    runtime,
    overview,
  } = movie;

  const formattedRuntime = formatTime(runtime);

  return (
      <div className="container mx-auto py-8">
        <div className="flex flex-row">
          <div className="basis-1/4">
            <img src={poster_path} alt={`${title} poster`}
                 className="w-[323px] h-[486px]"/>
          </div>
          <div className="basis-3/4">
            <div className="flex flex-row">
              <h2 className="font-light text-5xl uppercase mr-6 text-white"
                  data-testid="movie-details">{title}</h2>
              <p className="font-light text-xl border border-white rounded-full w-12 h-12 flex justify-center items-center text-white">{vote_average}</p>
            </div>
            <div className="flex flex-row my-12">
              <p className="font-light text-2xl text-pink-red mr-12">{release_date.slice(
                  0, 4)}</p>
              <p className="font-light text-2xl text-pink-red">{formattedRuntime}</p>
            </div>
            <p className="text-white opacity-50">{overview}</p>
          </div>
        </div>
      </div>
  );
};

export default MovieDetails;
