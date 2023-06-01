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
  return {
    id: parseInt(id, 10),
    title: data.title,
    tagline: data.tagline,
    vote_average: parseFloat(data.vote_average),
    vote_count: parseInt(data.vote_count, 10),
    release_date: data.release_date,
    poster_path: data.poster_path,
    overview: data.overview,
    budget: parseInt(data.budget, 10),
    revenue: parseInt(data.revenue, 10),
    runtime: parseInt(data.runtime, 10),
    genres: [data.genres],
  };
};