export const MovieDetails = ({ movie }) => {
  const { imageUrl, name, releaseYear, rating, duration, description } = movie;

  return (
      <div className="flex flex-row">
        <div className="basis-1/4">
          <img src={imageUrl} alt={`${name} poster`}
               className="w-[323px] h-[486px]"/>
        </div>
        <div className="basis-3/4">
          <div className="flex flex-row">
            <h2 className="font-light text-5xl uppercase mr-6 text-white">{name}</h2>
            <p className="font-light text-xl border border-white rounded-full w-12 h-12 flex justify-center items-center text-white">{rating}</p>
          </div>
          <div className="flex flex-row my-12">
            <p className="font-light text-2xl text-pink-red mr-12">{releaseYear}</p>
            <p className="font-light text-2xl text-pink-red">{duration}</p>
          </div>
          <p className="text-white opacity-50">{description}</p>
        </div>
      </div>
  );
};

export default MovieDetails;
