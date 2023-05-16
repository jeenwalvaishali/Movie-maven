const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const sessions = require('./utils/sessions');
const users = require('./utils/users');

app.use(cookieParser());
app.use(express.static('./build'));
app.use(express.json());


app.get('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  res.json({ username });
});

app.post('/api/session', (req, res) => {
  const { username } = req.body;

  if (!users.isValid(username)) {
    res.status(400).json({ error: 'required-username' });
    return;
  }

  if (username.toLowerCase() === 'dog') {
    res.status(403).json({ error: 'auth-insufficient' });
    return;
  }

  const sid = sessions.addSession(username);
  const existingUserData = users.getUserData(username);

  if (!existingUserData) {
    users.addUserData(username, {});
  }

  res.cookie('sid', sid);
  res.json({ username });
});

app.delete('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if (sid) {
    res.clearCookie('sid');
  }

  if (username) {
    sessions.deleteSession(sid);
  }

  res.json({ username });
});


app.post('/api/review', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if (!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { rating, review, reviewer, movie } = req.body;

  if (!users.isValidRating(rating)) {
    res.status(400).json({ error: 'invalid-rating' });
    return;
  }


  if (!review || review.trim() === '') {
    res.status(400).json({ error: 'required-review' });
    return;
  }

  if (!reviewer || reviewer.trim() === '') {
    res.status(400).json({ error: 'required-reviewer' });
    return;
  }

  if (!movie || movie.trim() === '') {
    res.status(400).json({ error: 'required-movie' });
    return;
  }

  users.addReview(username, rating, review, reviewer.toLowerCase(), movie );

  res.json({ success: true });

});

app.get('/api/review', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if (!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const userReviews = users.getReviews();

  res.json({ reviews: userReviews });
});

app.get('/api/reviews/search', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if (!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { reviewer } = req.query;

  if (!reviewer || reviewer.trim() === '') {
    res.status(400).json({ error: 'required-search' });
    return;
  }
  
  const reviews = users.getReviewsByReviewer(reviewer.toLowerCase());

  if(!reviews || !reviews.length  && reviewer.toLowerCase() != "admin"){
    res.status(400).json({ error: 'invalid-reviewer' });
    return;
  }

  res.json({ reviews });
});


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));