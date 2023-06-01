export const formatMovieData = data => {
  return {
    title: data.title || 'New Added Movie',
    poster_path: data.poster_path || 'https://via.placeholder.com/150',
    release_date: data.release_date || '2001-01-01',
    vote_average: data.vote_average ? parseFloat(data.vote_average) : 0,
    runtime: data.runtime ? parseInt(data.runtime, 10) : 0,
    genres: [data.genres || 'Other'],
    overview: data.overview || 'No overview',
  };
};

export const editMovieData = (id, data) => {
  const newGenres = Array.isArray(data.genres) ? data.genres : [data.genres];
  return {
    id: parseInt(id),
    title: data.title,
    tagline: data.tagline,
    vote_average: parseFloat(data.vote_average),
    vote_count: parseInt(data.vote_count),
    release_date: data.release_date,
    poster_path: data.poster_path,
    overview: data.overview,
    budget: parseInt(data.budget),
    revenue: parseInt(data.revenue),
    runtime: parseInt(data.runtime),
    genres: newGenres,
  };
};
