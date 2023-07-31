const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export const getMoviesById = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/3/movie/${movieId}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch movie data');
    }

    const movie = await response.json();
    return movie;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
};

export default getMoviesById;
