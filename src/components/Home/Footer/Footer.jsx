import './FooterStyle.css';

const Footer = ({setPage}) => {
  return (
    <footer className="footer">
    <div className="footer-section">
      <div className="footer-left">
       <div><i className="footer-icon"></i></div>
       <p className="footer-left-para">Movie Maven</p>
       <p className="footer-left-note"> MovieMaven is a website that provides you with all the information you need about movies.
                You can browse through a vast database of movies and get access to important details such as 
                ratings, cast, plot summaries, and more. In addition, you can rate movies and add comments 
                to share your thoughts with other MovieMaven users!</p>
      </div>
      <ul className="footer-right">
      <li>
          <h2 className='footer-head'>Information</h2>
          <ul className="footer-column">
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.rawpixel.com/services/licenses">Upper Background Image (Rawpixel Ltd)</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://fontawesome.com/license">Font Awesome Icons</a></li>
          </ul>
        </li>
        <li>
          <h2 className='footer-head'>Browse</h2>
          <ul className="footer-column">
            <li><a onClick={()=> setPage('About')} href="#About">About Us</a></li>
            <li><a onClick={()=> setPage('Explore')} href="#Explore">Browse Movies</a> </li>
            <li><a onClick={()=> setPage('Reviews')} href="#Reviews">Movie Reviews</a></li>
          </ul>
        </li>
        <li>
          <h2 className='footer-head'>Rate a Movie</h2>
          <ul className="footer-column">
            <li><a onClick={()=> setPage('PostReview')} href="#PostReview">Write a Review</a></li>
          </ul>
        </li>
      </ul>
      </div>
      <div className="footer-bottom">
        <p>All rights reserved by ©Movie Maven 2023 </p>
      </div>
    </footer>
  );
};

export default Footer;
