import AboutSection from "./Pages/AboutSection";
import MovieSection from "./Pages/MovieSection";
import MyReviews from "./Pages/MyReviews";
import PostReview from "./Pages/PostReview";


const Main = ({page, username}) => {

  return (
    <main>
          {page === 'About' && <AboutSection/>}
          {page === 'Explore' && <MovieSection/>}
          {page === 'PostReview' && <PostReview/>}
          {page === 'Reviews' && <MyReviews username={username}/>}
    </main>
  )
}

export default Main;