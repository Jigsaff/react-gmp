import { useEffect } from 'react';
import Button from '../Button/Button';
import GenreSelect from '../GenreSelect/GenreSelect';
import { useForm, Controller } from 'react-hook-form';
import { genres } from '../../genres';

const MovieForm = ({ onSubmit, movie, onReset }) => {
  const defaultValues = {
    id: '',
    title: '',
    tagline: '',
    vote_average: '',
    vote_count: '',
    release_date: '',
    poster_path: '',
    overview: '',
    budget: '',
    revenue: '',
    runtime: '',
    genres: 'All',
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { ...defaultValues, ...movie } });

  useEffect(() => {
    reset(movie);
  }, [movie, reset]);

  const rules = {
    title: { required: true },
    poster_path: { required: true },
    release_date: { required: true },
    rating: { required: true },
    vote_average: { required: true, min: 0 },
    runtime: { required: true, min: 0 },
    genres: { required: true },
    overview: { required: true },
  };

  const onSubmitHandler = data => {
    if (typeof onSubmit === 'function') {
      onSubmit(data);
    }
  };

  const handleReset = e => {
    e.preventDefault();
    reset({ ...defaultValues });
    if (typeof onReset === 'function') {
      onReset();
    }
  };

  return (
      <div
          className="container mx-auto max-w-[900px] rounded-xl border px-10 py-4 m-10">
        <form onSubmit={handleSubmit(onSubmitHandler)} data-testid="movie-form">
          <div className="grid grid-cols-3 gap-x-1 gap-y-2 mb-4">
            <div className="col-span-2">
              <label htmlFor="title"
                     className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase">
                Title
              </label>
              <Controller
                  name="title"
                  control={control}
                  rules={rules.title}
                  render={({ field }) => (
                      <input
                          id="title"
                          type="text"
                          {...field}
                          className="max-w-[525px] w-full rounded bg-dark-gray text-white opacity-80 border-0"
                      />
                  )}
              />
              {errors.title && (
                  <p className="text-red-500">Title is required</p>
              )}
            </div>
            <div>
              <label htmlFor="release_date"
                     className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase">
                Release Date
              </label>
              <Controller
                  name="release_date"
                  control={control}
                  rules={rules.release_date}
                  render={({ field }) => (
                      <input
                          id="release_date"
                          type="date"
                          name="release_date"
                          placeholder="Select date"
                          {...field}
                          className="max-w-[525px] w-full rounded bg-dark-gray text-white opacity-80 border-0"
                      />
                  )}
              />
              {errors.release_date && (
                  <p className="text-red-500">Release date is required</p>
              )}
            </div>
            <div className="col-span-2">
              <label htmlFor="poster_path"
                     className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase">
                Movie URL
              </label>
              <Controller
                  name="poster_path"
                  control={control}
                  rules={rules.poster_path}
                  render={({ field }) => (
                      <input
                          id="poster_path"
                          type="text"
                          name="poster_path"
                          placeholder="Enter URL of poster image"
                          {...field}
                          className="w-full rounded bg-dark-gray text-white opacity-80 border-0"
                      />
                  )}
              />
              {errors.poster_path && (
                  <p className="text-red-500">Poster path is required</p>
              )}
            </div>
            <div>
              <label htmlFor="vote_average"
                     className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase">
                Rating
              </label>
              <Controller
                  name="vote_average"
                  control={control}
                  rules={rules.vote_average}
                  render={({ field }) => (
                      <input
                          id="vote_average"
                          type="text"
                          name="vote_average"
                          {...field}
                          className="w-full rounded bg-dark-gray text-white opacity-80 border-0"
                      />
                  )}
              />
              {errors.vote_average && (
                  <p className="text-red-500">
                    Rating is required and should be more than 0
                  </p>
              )}
            </div>
            <div className="col-span-2">
              <label htmlFor="genres"
                     className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase">
                Genre
              </label>
              <Controller
                  name="genres"
                  control={control}
                  defaultValue={defaultValues.genres || 'All'}
                  render={({ field }) => (
                      <select
                          id="genres"
                          {...field}
                          className="max-w-[525px] w-full rounded bg-dark-gray text-white opacity-80 border-0"
                      >
                        {genres.map(genre => (
                            <option key={genre} value={genre}>
                              {genre}
                            </option>
                        ))}
                      </select>
                  )}
              />
              {errors.genres && (
                  <p className="text-red-500">Genre is required</p>
              )}
            </div>
            <div>
              <label htmlFor="runtime"
                     className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase">
                Runtime
              </label>
              <Controller
                  name="runtime"
                  control={control}
                  rules={rules.runtime}
                  render={({ field }) => (
                      <input
                          id="runtime"
                          type="number"
                          name="runtime"
                          placeholder="minutes"
                          {...field}
                          className="w-full rounded bg-dark-gray text-white opacity-80 border-0"
                      />
                  )}
              />
            </div>
            <div className="col-span-3">
              <label htmlFor="overview"
                     className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase">
                Overview
              </label>
              <Controller
                  name="overview"
                  control={control}
                  rules={rules.overview}
                  render={({ field }) => (
                      <textarea
                          id="overview"
                          name="overview"
                          placeholder="Enter a brief overview of the movie"
                          {...field}
                          className="w-full rounded bg-dark-gray text-white opacity-80 border-0 h-32"
                      />
                  )}
              />
              {errors.overview && (
                  <p className="text-red-500">Overview is required</p>
              )}
            </div>
          </div>
          <div className="flex justify-end mt-14">
            <button
                type="button"
                onClick={handleReset}
                className="rounded py-2 px-8 border-2 border-[#F65261] text-[#F65261] uppercase font-medium text-xl mr-3"
            >
              Reset
            </button>
            <button
                type="submit"
                className="rounded py-2 px-8 border-2 border-[#F65261] bg-[#F65261] text-white uppercase font-medium text-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
  );
};

export default MovieForm;