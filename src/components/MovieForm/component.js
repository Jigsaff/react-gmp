import { useState } from 'react';

export const MovieForm = ({ initialMovieInfo = {}, onSubmit }) => {
  const [formData, setFormData] = useState(initialMovieInfo);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleReset = () => {
    setFormData(initialMovieInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({});
  };

  return (
      <div
          className="container mx-auto max-w-[900px] rounded-xl border px-10 py-4 m-10">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="grid grid-cols-3 gap-x-1 gap-y-2 mb-4">
            <div className="col-span-2">
              <label
                  className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase"
                  htmlFor="title">
                Title
              </label>
              <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title || ''}
                  onChange={handleChange}
                  className="max-w-[525px] w-full rounded bg-dark-gray text-white opacity-80 border-0"
              />
            </div>
            <div>
              <label
                  className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase"
                  htmlFor="releaseDate">
                Release Date
              </label>
              <input
                  type="date"
                  name="releaseDate"
                  id="releaseDate"
                  value={formData.releaseDate || ''}
                  onChange={handleChange}
                  className="w-full rounded bg-dark-gray text-white opacity-80 border-0"
              />
            </div>
            <div className="col-span-2">
              <label
                  className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase"
                  htmlFor="movieUrl">
                Movie URL
              </label>
              <input
                  type="url"
                  name="movieUrl"
                  id="movieUrl"
                  value={formData.movieUrl || ''}
                  onChange={handleChange}
                  className="max-w-[525px] w-full rounded bg-dark-gray text-white opacity-80 border-0"
              />
            </div>
            <div>
              <label
                  className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase"
                  htmlFor="rating">
                Rating
              </label>
              <input
                  type="number"
                  name="rating"
                  id="rating"
                  min="0"
                  max="10"
                  step="0.1"
                  value={formData.rating || ''}
                  onChange={handleChange}
                  className="w-full rounded bg-dark-gray text-white opacity-80 border-0"
              />
            </div>
            <div className="col-span-2">
              <label
                  className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase"
                  htmlFor="genre">
                Genre
              </label>
              <input
                  type="text"
                  name="genre"
                  id="genre"
                  value={formData.genre || ''}
                  onChange={handleChange}
                  className="max-w-[525px] w-full rounded bg-dark-gray text-white opacity-80 border-0"
              />
            </div>
            <div>
              <label
                  className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase"
                  htmlFor="duration">
                Duration
              </label>
              <input
                  type="text"
                  name="duration"
                  id="duration"
                  value={formData.duration || ''}
                  onChange={handleChange}
                  className="w-full rounded bg-dark-gray text-white opacity-80 border-0"
              />
            </div>
            <div className="col-span-3">
              <label
                  className="block mb-2 text-[#F65261] opacity-80 font-semibold uppercase"
                  htmlFor="overview">
                Overview
              </label>
              <textarea
                  name="overview"
                  id="overview"
                  value={formData.overview || ''}
                  onChange={handleChange}
                  className="w-full rounded bg-dark-gray text-white opacity-80 border-0 h-32"
              />
            </div>
          </div>
          <div className="flex justify-end mt-14">
            <button type="reset"
                    className="rounded py-2 px-8 border-2 border-[#F65261] text-[#F65261] uppercase font-medium text-xl mr-3">
              Reset
            </button>
            <button type="submit"
                    className="rounded py-2 px-8 border-2 border-[#F65261] bg-[#F65261] text-white uppercase font-medium text-xl">
              Submit
            </button>

          </div>
        </form>
      </div>
  );
};
