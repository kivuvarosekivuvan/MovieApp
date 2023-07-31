import React, { useState, useEffect } from 'react';
import LatestImage from '../../Atoms/ImageContainer/index';
import './trending.css';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Trending = () => {
  const [trendingMovie, setTrendingMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingMovie = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/3/trending/movie/day `, {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch latest movie data');
        }

        const data = await response.json();
        setTrendingMovie(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching latest movie data:', error);
        setLoading(false);
      }
    };

    fetchTrendingMovie();
  }, []);

  if (loading) {
    return <h1>Loading latest movie...</h1>;
  }

  return (
    <div className="latest-container">
      <h2 className="latest-title">{trendingMovie.title}</h2>
      <div className="latest-image-container">
        <LatestImage props={trendingMovie} className="latest-image" />
        <div className="latest-image-overlay">
          <p className="latest-image-text">Overview: {trendingMovie.overview}</p>
          <p>Release Date: {trendingMovie.release_date}</p>

        </div>
      </div>
    </div>
  );
};

export default Trending;
