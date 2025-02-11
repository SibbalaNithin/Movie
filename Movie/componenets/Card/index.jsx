import "./index.css";

const MovieCard = ({ children }) => {
  return <div className="movie-card">{children}</div>;
};

MovieCard.Poster = ({ src, alt }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <img
      onClick={() => navigate}
      src={`${IMAGE_BASE_URL}${src}`}
      alt={alt}
      className="movie-poster"
    />
  );
};

MovieCard.Title = ({ children }) => {
  return <h2 className="movie-title">{children}</h2>;
};

MovieCard.Year = ({ children }) => <p className="movie-year">{children}</p>;

MovieCard.Description = ({ children }) => (
  <p className="movie-description">{children}...</p>
);

MovieCard.Rating = ({ children }) => (
  <div className="movie-rating">
    <strong>Rating: </strong>
    {children}/10
  </div>
);

export default MovieCard;