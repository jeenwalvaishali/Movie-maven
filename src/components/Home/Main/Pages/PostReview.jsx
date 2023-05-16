import { fetchPostReview, fetchMovies } from "../../../../api/services";
import { useState, useEffect } from "react";
import { MESSAGES } from "../../../../common/constants";
import "./Style.css";

function PostReview() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [reviewerError, setReviewerError] = useState("");
  const [reviewError, setReviewError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    movie: "",
    review: "",
    rating: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    let errorText = " ";
    switch (name) {
      case "name":
        errorText = value.length < 2  ? "Please enter valid reviewer name" : "";
        setReviewerError(errorText);
        break;
      case "review":
        errorText = value.length > 300 ? "Review can not be more than 300 characters" : "";
        setReviewError(errorText);
        break;
      default:
        break;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function onSubmit(e) {
    e.preventDefault();
    fetchPostReview(
      formData.rating,
      formData.review,
      formData.name,
      formData.movie
    )
      .then((response) => {
        setError("")
        setFormData({
          name: "",
          movie: "",
          review: "",
          rating: "",
        });
      })
      .catch((err) => {
        setError(err?.error || "ERROR");
      });
  }

  useEffect(() => {
    fetchMovies()
      .then((data) => {
        setMovies(data.results);
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
              <p>Lets Write</p>
            </div>
          </div>
        </div>
        <div className="lower-background">
          <div className="form-content">
            <div className="form-container">
              <div className="form-row">
                <div className="form-content-para">
                  <h3 className="form-content-head">Share Your Movie Review</h3>
                  <p>
                    We welcome movie enthusiasts to contribute their thoughts
                    and reviews on their favorite films. If you have a passion
                    for cinema and love to write, we invite you to join our team
                    of contributors. We're currently accepting pitches for movie
                    reviews, analysis, and essays on film culture. Please submit
                    your pitches or inquiries to contact@moviemaven.com, along
                    with a brief bio and relevant experience.
                  </p>
                  <br></br>
                  <p>
                    Our reviews aim to provide honest and insightful analysis on
                    films, while catering to the tastes and interests of our
                    diverse audience. From indie gems to blockbuster hits, we
                    cover it all. Our goal is to provide a platform for film
                    lovers to connect, discuss and explore the world of cinema.
                  </p>
                  <br></br>
                  <p>
                    Explore movie maven for a wide range of movie reviews,
                    recommendations, and curated lists. Whether you're in the
                    mood for a classic or the latest release, we have something
                    for everyone. Join our community of film lovers and share
                    your thoughts on your favorite movies. Contact us at{" "}
                    <a href="mailto:info@moviemaven.com">info@moviemaven.com</a>{" "}
                    to get started.
                  </p>
                </div>
                <div className="column">
                  <div className="form-box">
                    <h3 className="form-box-head">
                      Here You Can Add Movie Review
                    </h3>
                    <form
                      className="form-review"
                      action="/api/review"
                      method="POST"
                      onSubmit={onSubmit}
                    >
                      <div className="form-box-row">
                        <div className="column form-group">
                          <label className="col-form-label">
                            <span className="mandotary-field">*</span>Reviewer
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                          />
                          {reviewerError && (
                            <span className="span-error">{reviewerError}</span>
                          )}
                        </div>
                        <div className="column form-group">
                          <label className="col-form-label">
                            <span className="mandotary-field">*</span>Movie to
                            Review
                          </label>
                          <select
                            className="custom-select"
                            id="movie"
                            name="movie"
                            value={formData.movie}
                            onChange={handleInputChange}
                          >
                            <option defaultValue="">Select a movie..</option>
                            {movies.map((movie) => (
                              <option key={movie.id} value={movie.title}>
                                {movie.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-box-row">
                        <div className="column form-group">
                          <label className="col-form-label">
                            <span className="mandotary-field">*</span>Review
                          </label>
                          <textarea
                            className="form-text-control"
                            name="review"
                            id="review"
                            value={formData.review}
                            onChange={handleInputChange}
                            cols={4}
                            rows={6}
                          ></textarea>
                          {reviewError && (
                            <span className="span-error">{reviewError}</span>
                          )}
                        </div>
                      </div>
                      <div className="form-box-row">
                        <div className="column form-group">
                          <label className="col-form-label">
                            <span className="mandotary-field">*</span>Rating
                          </label>
                          <select
                            className="custom-select"
                            id="rating_select"
                            name="rating"
                            value={formData.rating}
                            onChange={handleInputChange}
                          >
                            <option defaultValue="">Select a rating..</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-check">
                        <div>
                          <p className="mandotary-notice">
                            <span className="mandotary-field">*</span> Indicates
                            field required
                          </p>
                        </div>
                      </div>
                      <div className="form-submit">
                        <input
                         type="submit"
                         name="submit"
                         id="submit"
                         className="submit"
                         value="Send"
                          disabled={
                            (formData.review.length > 300) || !formData.name
                          }
                        />
                      </div>
                    </form>
                    {error && (
                      <span className="span-error">
                        {" "}
                        {MESSAGES[error] || MESSAGES.default}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostReview;
