import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./index.css";

const MoviePage = () => {
  const [specificMovie, setSpecificMovie] = useState({});
  const [trailer, setTrailer] = useState([]);
  const { id } = useParams();
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d4d9884b0b5577460799e521d62d96da&language=en-US`
      // `https://api.themoviedb.org/3/movie/${id}?api_key=ab1da08307f82007e9975d4dccf67670&language=en-US`
    )
      .then((res) => res.json())
      .then((d) => setSpecificMovie(d));
  }, [id]);

  function fetchTrailer(id) {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d4d9884b0b5577460799e521d62d96da`
    )
      .then((res) => res.json())
      .then((data) => setTrailer(data.results[0].key));
  }

  return (
    <div className="movie-container">
      <div className="movie-images">
        <img
          src={`${IMAGE_BASE_URL}${specificMovie.backdrop_path}`}
          alt={specificMovie.original_title}
        />
      </div>
      <div className="movie-details">
        <h1>{specificMovie.original_title}</h1>
        <p>{specificMovie.overview}</p>
        <ul>
          <li>
            <strong>Release Date:</strong> {specificMovie.release_date}
          </li>
          <li>
            <strong>Rating:</strong> {specificMovie.vote_average}
          </li>
          <li>
            <strong>Genres:</strong>{" "}
            {specificMovie.genres?.map((genre) => genre.name).join(", ")}
          </li>
          <button onClick={() => fetchTrailer(id)}>Watch Trailer</button>
        </ul>
      </div>
      <div className="movie-trailer">
        <YouTube videoId={trailer} opts={opts} />
      </div>
    </div>
  );
};

export default MoviePage;