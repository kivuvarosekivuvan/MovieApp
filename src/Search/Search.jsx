import React, { useState } from 'react';
import './search.css';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); 

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`${BASE_URL}/3/search/movie?query=${searchTerm}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movie data:', error);
      setMovies([]);
    }
  };

  const handleMovieClick = async (movieId) => {
    try {
      const response = await fetch(`${BASE_URL}/3/movie/${movieId}?api_key=${ACCESS_TOKEN}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }

      const data = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      {movies.length > 0 && searchTerm !== '' ? (
        <ul className="movies-list">
          {movies.map((movie) => (
            <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
              <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
            </li>
          ))}
        </ul>
      ) : null }

      
      {movies.length === 0 && searchTerm !== '' && <p>No movies found.</p>}

      
      {selectedMovie && (
        <div className="modal">
          <button className="close-btn" onClick={() => setSelectedMovie(null)}>Close</button>
          <img src={`https://image.tmdb.org/t/p/w342${selectedMovie.poster_path}`} alt={selectedMovie.title} />
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
