export function fetchSession() {
  return fetch('/api/session', {
    method: 'GET',
  })
    .catch(() => Promise.reject({ error: 'networkError' }))
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return response.json()
        .catch(error => Promise.reject({ error }))
        .then(err => Promise.reject(err));
    });
}

export function fetchLogin(username) {
  return fetch('/api/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({ username }),
  })
    .catch(() => Promise.reject({ error: 'networkError' }))
    .then(response => {
      if (response.ok) {
        return response;
      }
      return response.json()
        .catch(error => Promise.reject(
          { error }
        ))
        .then(err => Promise.reject(err));
    });
}

export function fetchLogout() {
  return fetch('/api/session', {
    method: 'DELETE',
  })
    .catch(() => Promise.reject({ error: 'networkError' }))
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return response.json()
        .catch(error => Promise.reject({ error }))
        .then(err => Promise.reject(err));
    });
}

export function fetchMovies() {
  const apiKey = process.env.REACT_APP_API_KEY;

  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, {
    method: 'GET',
  })
    .catch(() => Promise.reject({ error: 'networkError' }))
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return response.json()
        .catch(error => Promise.reject({ error }))
        .then(err => Promise.reject(err));
    });
}

export async function fetchMovieImage(title) {
  const apiKey = process.env.REACT_APP_API_KEY;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`
    );
    const data = await response.json();
    const posterPath = data.results[0].poster_path;
    const imageUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;
    return imageUrl;
  } catch (error) {
    console.log(error);
  }
}

export function fetchPostReview(rating, review, reviewer, movie) {
  return fetch('/api/review', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      rating,
      review,
      reviewer,
      movie
    })
  })
    .catch(() => Promise.reject({ error: 'networkError' }))
    .then(response => {
      if (response.ok) {
        return response;
      }
      return response.json()
        .catch(error => Promise.reject(
          { error }
        ))
        .then(err => Promise.reject(err));
    });
}

export function fetchReview() {
  return fetch('/api/review', {
    method: 'GET',
  })
    .catch(() => Promise.reject({ error: 'networkError' }))
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return response.json()
        .catch(error => Promise.reject({ error }))
        .then(err => Promise.reject(err));
    });
}

export function fetchReviewOnSearch(query) {
  return fetch(`/api/reviews/search?reviewer=${query}`, {
    method: 'GET',
  })
    .catch(() => Promise.reject({ error: 'networkError' }))
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return response.json()
        .catch(error => Promise.reject({ error }))
        .then(err => Promise.reject(err));
    });
}
