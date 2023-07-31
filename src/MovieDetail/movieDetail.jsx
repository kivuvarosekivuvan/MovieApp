// MovieDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMoviesById from "../Utils/utilsDetails";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const movie = await getMoviesById(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [movieId]);

  if (loading) {
    return <h2>Loading movie details...</h2>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>
      {movieDetails.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
      )}
    </div>
  );
};

export default MovieDetails;
