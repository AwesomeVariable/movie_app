import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster, rating }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{id}</h2>
      <h3>{rating}</h3>
      <img src={poster} alt="Movie Poster" />
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
};

export default Movie;
