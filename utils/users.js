const users = {};
const movies = [];

function isValid(username) {
  let isValid = true;
  isValid = !!username && username.trim();
  isValid = isValid && username.match(/^[A-Za-z]+$/);
  return isValid;
}

function isValidRating(rating) {
  let isValidRating = true;
  isValidRating = !!rating && rating.trim();
  isValidRating = !Number.isInteger(rating) && rating >= 1 && rating <= 5;
  return isValidRating;
}


function getUserData(username) {
  return users[username];
}

function addUserData(username, userData) {
  users[username] = userData;
}

function addReview(username, rating, review, reviewer, movie ) {
  const newReview = { rating, review, reviewer, movie };
  
  movies.push(newReview);
  addUserData(username, { reviews: movies[username] });
}

function getReviews() {
  const reviews = movies;
  return reviews;
}

function getReviewsByReviewer(reviewer) {
  return movies.reduce((accumulator, review) => {
    if (review.reviewer === reviewer) {
      accumulator.push(review);
    }
    return accumulator;
  }, []);
}

module.exports = {
  isValid,
  isValidRating,
  getUserData,
  addReview,
  getReviews,
  getReviewsByReviewer,
  addUserData,
};