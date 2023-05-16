import "./Style.css";
import img2 from "./images/login-image.jpg";
import { MESSAGES } from "../../../../common/constants";
import {
  fetchReview,
  fetchMovieImage,
  fetchReviewOnSearch,
} from "../../../../api/services";
import { useState, useEffect } from "react";

function MyReviews() {
  const [reviewList, setReviewList] = useState([]);
  const [movieImages, setMovieImages] = useState({});
  const [isAdminSearch, setIsAdminSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSearchClick() {
    fetchReviewOnSearch(query)
      .then((data) => {
        setQuery("");
        setError("");
        setReviewList(data.reviews);
        if (query.toLowerCase() === "admin") {
          setIsAdminSearch(false);
        } else {
          setIsAdminSearch(true);
        }
      })
      .catch((err) => {
        setError(err?.error || "ERROR");
      });
  }

  function getReviews() {
    fetchReview()
      .then((data) => {
        setReviewList(data.reviews);
        setIsAdminSearch(false);
        setError("");
      })
      .catch((err) => {
        setError(err?.error || "ERROR");
      });
  }

  useEffect(() => {
    const fetchImages = async () => {
      const images = {};
      await Promise.all(
        reviewList.map(async (review) => {
          const image = await fetchMovieImage(review.movie);
          images[review.movie] = image;
        })
      );
      setMovieImages(images);
    };
    fetchImages();
  }, [reviewList]);

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <section className="main-container" name="main-id" id="main-id">
      <div className="container">
        <div className="upper-image">
          <div className="image">
            <div className="overlay">
              <h1>Movie-Maven</h1>
              <p>Reviews</p>
            </div>
          </div>
        </div>
        <div className="lower-background">
          <div className="search-container">
            <input
              type="text"
              placeholder="Enter reviewer name..."
              value={query}
              onChange={handleQueryChange}
            />
            <button type="button" onClick={handleSearchClick}>
              Search
            </button>
          </div>
          {error && (
            <span className="span-error">
              {" "}
              {MESSAGES[error] || MESSAGES.default}
            </span>
          )}
          <div className="review-card-list">
            {!isAdminSearch && (
              <div className="review-card">
                <div className="image-container">
                  <img src={img2} alt="movie maven" />
                  <div className="reviewer-info">
                    <div className="rating-container">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h2 className="reviewer-name">Admin</h2>
                  </div>
                </div>
                <div className="review-container">
                  <h2 className="movie-to-review">Movie Maven</h2>
                  <p className="my-review">
                    MovieMaven is an excellent website for movie lovers,
                    providing a database of movies along with ratings, plot
                    summaries, and more. The ability to rate and comment on
                    movies makes it a unique and engaging platform, and the
                    user-friendly interface ensures that it is accessible to
                    everyone.
                  </p>
                </div>
              </div>
            )}
            {reviewList.map((review) => (
              <div className="review-card" key={review.id}>
                <div className="image-container">
                  <img src={movieImages[review.movie]} alt="Movie poster" />
                  <div className="reviewer-info">
                    <div className="rating-container">
                      {[...Array(parseInt(review.rating))].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <h2 className="reviewer-name">{review.reviewer}</h2>
                  </div>
                </div>
                <div className="review-container">
                  <h2 className="movie-to-review">{review.movie}</h2>
                  <p className="my-review">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyReviews;
