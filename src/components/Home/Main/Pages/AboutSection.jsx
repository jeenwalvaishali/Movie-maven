import "./Style.css";
import img from "./images/login-image2.jpg";

function AboutSection(){
  return (
    <section className="main-container" name="main-id" id="main-id">
      <div className="container">
        <div className="upper-image">
          <div className="image">
            <div className="overlay">
              <h1>Movie-Maven</h1>
              <p>About Us</p>
            </div>
          </div>
        </div>
        <div className="lower-background">
          <div className="lower-section-1">
            <div className="lower-section-1a">
              <h2>About Movie-Maven</h2>
              <p className="para1">Best Way to Discover</p>
              <p className="para2">
                MovieMaven is the go-to destination for movie enthusiasts.Our platform is designed to cater to real, everyday
                movie enthusiasts, with a focus on providing genuine information
                and comprehensive details about films. Explore our
                vast database of movies, including popular ones,
                and discover ratings and plot summaries. Share your
                thoughts with other users, and have fun exploring our extensive
                collection. Find plenty of movies and to love on
                MovieMaven!
              </p>
            </div>
            <div className="lower-section-1b">
              <div className="fixed-box">
                <ul>
                  <li>
                    <h3>Extensive Database</h3>
                    <p>
                      MovieMaven has a vast database of movies,
                      including classics and new releases. You can easily search
                      and browse through the collection to find your next
                      favorite watch.
                    </p>
                  </li>
                  <li>
                    <h3>Personalized Recommendations</h3>
                    <p>
                      Based on your watch history and ratings, MovieMaven
                      provides personalized recommendations for movies that you might like. This helps you discover new
                      content that suits your taste.
                    </p>
                  </li>
                  <li>
                    <h3>User Ratings and Comments</h3>
                    <p>
                      MovieMaven allows users to rate movies and
                      add comments to share their thoughts with others. This
                      helps create a community of movie enthusiasts who can
                      exchange opinions and recommendations
                    </p>
                  </li>
                  <li>
                    <h3>Multiple Platforms</h3>
                    <p>
                      MovieMaven is available on multiple platforms, including
                      web and mobile, allowing you to access it from anywhere
                      and at any time.
                    </p>
                  </li>
                  <li>
                    <h3>Easy-to-use Interface</h3>
                    <p>
                      MovieMaven has a user-friendly interface that makes it
                      easy to navigate and find what you're looking for.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lower-section-2">
            <div className="card-wrapper">
              <div className="card-details">
                <h1 className="card-header">OUR MISSION</h1>
                <p className="card-para">
                  At MovieMaven, we are passionate about movies.
                  Our mission is to provide a platform where movie enthusiasts
                  can come together to discover, rate, and discuss movies. 
                  We believe that everyone should have access to quality
                  entertainment, and our website is designed to make that
                  possible.
                </p>
              </div>

              <div className="card-image">
                <img src={img} alt="" />

                <div className="card-info">
                  <h2>Movie Maven</h2>
                  <ul>
                    <li className="card-li">Treasure trove</li>
                    <li className="card-li">Insights</li>
                    <li className="card-li">Collaborative</li>
                    <li className="card-li">Versatile</li>
                    <li className="card-li">Effortless</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
