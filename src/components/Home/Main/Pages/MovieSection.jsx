import "./Style.css";
import { fetchMovies } from "../../../../api/services";
import { useState, useEffect } from "react";
import Status from "../../../Status";
import MoviePopup from "./MoviePopup";


function MovieSection() {
  const imageUrl = "https://image.tmdb.org/t/p/w500/";
  const [error, setError] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleOpenPopup(movie) {
    setIsPopupOpen(true);
    setSelectedMovie(movie);
  }

  function handleClosePopup() {
    setIsPopupOpen(false);
  }

  useEffect(() => {
    fetchMovies()
      .then((data) => {
        setMovieList(data.results);
      })
      .catch((err) => {
        setError(err?.error || "ERROR");
      });
  }, []);

  return (
    <section className="main-container" name="main-id" id="main-id">
      <div className="container">
        <div className="upper-image">
          <div className="image">
            <div className="overlay">
              <h1>Movie-Maven</h1>
              <p>Discover</p>
            </div>
          </div>
        </div>
        <div className="lower-movie-background">
          <div className="movie-container" id="movie-list">
          {error && <Status error={error} />}
            {!error && movieList &&
              movieList.map((movie) => (
                <div key={movie.id} className="box">
                  <div className="box-top">
                    <img
                      className="box-image"
                      src={imageUrl + movie.poster_path}
                      alt={movie.title}
                    />
                    <div className="title-flex">
                      <h3 className="box-title">{movie.title}</h3>
                      <p className="user-follow-info">{movie.release_date}</p>
                    </div>
                    <p className="description">{movie.vote_average}</p>
                  </div>
                  <button className="button" onClick={() => handleOpenPopup(movie)}>
                    View Details
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
      {selectedMovie && isPopupOpen && (
        <MoviePopup
          imagePath={selectedMovie.poster_path}
          title={selectedMovie.title}
          voteCount = {selectedMovie.vote_count}
          popularity = {selectedMovie.popularity}
          releaseDateFormatted={selectedMovie.release_date}
          description={selectedMovie.overview}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
}

export default MovieSection;
