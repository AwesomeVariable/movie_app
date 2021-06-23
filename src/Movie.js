import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, rating, genres }) {
  return (
    <div className="movies__movie">
      <img src={poster} alt={title} title={title} />

      <div className="movies__data">
        <h3 className="movie__title">{title}</h3>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary.slice(0, 200)}...</p>
        <h4 className="movie__rating">Rating: {rating}</h4>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
