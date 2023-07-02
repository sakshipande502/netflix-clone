import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = 'https://image.tmdb.org/t/p/original';

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setUrl] = useState("");
  const n = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `${n}${fetchUrl}`;
      console.log('API URL:', apiUrl); // Print the API URL
      const response = await axios.get(apiUrl);
      setMovies(response.data.results);
      return response;
    };

    fetchData();
  }, [fetchUrl]); // Include fetchUrl in the dependency array

  const handleClick = (movie) => {
    if (trailerUrl) {
      setUrl("");
    } else {
      movieTrailer(movie?.original_title||movie?.title|| movie?.name||"")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {movies &&
          movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
