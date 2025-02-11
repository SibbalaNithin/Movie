import React from 'react';
import "./index.css";
// import Card from "../../components/card/card";
import MovieCard from "../../componenets/Card/index";
import { Link } from 'react-router-dom';
import Pagination from '../../componenets/Pagination';


const index = ({movies, handleNext, handlePrev, currentPage, totalPages}) => {
 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {movies.map((item, index) => {
        return (
          <section key={index}>
            <MovieCard>
              <Link to={`/movie/${item.id}`}>
                <MovieCard.Poster
                  id={item.id}
                  src={item.poster_path}
                  alt="Movie Title"
                />
              </Link>
              <div className="movie-details">
                <MovieCard.Title>{item.original_title}</MovieCard.Title>
                <MovieCard.Year>{item.release_date}</MovieCard.Year>
                <MovieCard.Description>
                  {item.overview.slice(0, 100)}...
                </MovieCard.Description>
                <MovieCard.Rating>{item.vote_average}</MovieCard.Rating>
              </div>
            </MovieCard>
          </section>
        );
      })}
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        currentPage={currentPage}
        totalPage={totalPages}
      />
    </div>
  );
};


export default index;