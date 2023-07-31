import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getMovies from "../../Utils/utilities";
import ImageContainer from "../../Atoms/ImageContainer";
import './style.css';

const GetMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const movies = await getMovies();
      setLoading(false);
      setMovies(movies.results);
    })();
  }, []);

  if (loading) {
    return <h1>Loading movies...</h1>;
  }

  const handleImageClick = (movieId) => {
    console.log("Image clicked! Movie ID:", movieId);
  };

  return (
    <div id="body">
      <h1 id="all">All</h1>
      <div className="container">
        {movies && !loading && movies.length > 0 && movies.map((item) => (
          <div key={item.id}>
            <Link to={`/MovieDetail/${item.id}`}>
              <ImageContainer props={item} onClick={() => handleImageClick(item.id)} />
            </Link>
          </div>
        ))}
        {movies && !loading && movies.length === 0 && (<h1>No movies</h1>)}
      </div>
    </div>
  );
};

export default GetMovies;
