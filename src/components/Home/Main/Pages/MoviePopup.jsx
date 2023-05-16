import React from "react";

function MoviePopup({
  imagePath,
  title,
  voteCount,
  popularity,
  releaseDateFormatted,
  description,
  onClose,
}) {
  const imageUrl = "https://image.tmdb.org/t/p/w500/";
  
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-left">
          <img className="popup-left-image" src={imageUrl + imagePath} alt={title} />
        </div>
        <div className="popup-right">
          <div className="popup-right-wrapper">
            <h2 className="popup-header">{title}</h2>
            <div className="popup-detail">
              <div className="popup-container">
                <div className="popup-star">
                  <i className="fas fa-star"></i>
                  <span>{popularity}</span>
                </div>
              </div>
              <p className="popup-votes">
                <span>Votes:</span>
                {voteCount}
              </p>
            </div>
            <div className="popup-date">
              <span>Release Date:</span>
              <p>{releaseDateFormatted}</p>
            </div>
            <div className="popup-overview">
              <span>Overview:</span>
              <p>{description}</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoviePopup;
