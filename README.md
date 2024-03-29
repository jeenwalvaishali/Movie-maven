# MovieMaven

MovieMaven is a website designed for movie enthusiasts, providing comprehensive information about movies and a platform to share thoughts and reviews with other users. With a vast database of movies, including popular ones, MovieMaven is your go-to destination for discovering and learning about films.

## How to Use

1. **Login:** Users can sign up using their username on the login page, which is the entry point of the website.
   
2. **Home Page:** After logging in, users will be directed to the home page, which consists of a header, main, and footer section. The header displays user information, and users can log out by clicking on the user icon.
   
3. **About Us:** The "About Us" page provides detailed information about the MovieMaven website, including its purpose and features.
   
4. **Browse Movies:** The "Browse Movies" page lists all the movies available on MovieMaven. Users can scroll through the movie cards and click on "View Details" to access additional information such as ratings, votes, overview, and release date of a particular movie.
   
5. **Write a Review:** The "Write a Review" page allows users to share their thoughts and opinions on movies listed on the "Browse Movies" page. Users can write a review using their name or a friend's name.
   
6. **Movie Reviews:** The "Movie Reviews" page displays all the reviews posted by users. Users can also search for reviews based on the reviewer's name by entering the reviewer's name in the search box.

MovieMaven aims to provide a user-friendly and intuitive interface, allowing users to easily navigate and explore movies, read reviews, and share their own feedback.

## Image Source and Licensing

- The background image used in the website is sourced from the Rawpixel website, which offers free images for use.
- [Image](https://www.rawpixel.com/image/3297074/free-photo-image-cinema-movie-projector)
- [Image](https://www.rawpixel.com/image/868980/free-image-rawpixelcom)
- [License](https://www.rawpixel.com/services/licenses)
- Font Awesome icons are used in the project, which are licensed under the Font Awesome Free License.
- [Font Awesome](https://fontawesome.com/icons)
- [License](https://fontawesome.com/license)

## API Source and Licensing

- MovieMaven uses the TMDb API to fetch movie data. Please refer to the TMDb API documentation for its licensing terms and conditions.
- [TMDb](https://www.themoviedb.org/)

# Structural Requirements

### Project Setup
- The project is an individual effort without group involvement.
- The project directory must run with `npm install`, `npm run build`, and `npm start`.
- The project should not use `react-scripts/create-react-app` to run with `npm start`.
- The `npm start` command should initiate a single `server.js` to run both the static SPA and REST services.

### Front End
- The project uses a React-based front end as a Single Page Application (SPA).
- The project uses `npm` and does not include inappropriate files or libraries.

### Services
- The backend code utilizes express-based NodeJS.
- REST-based service calls are implemented, involving different HTTP methods in a RESTful way.

## Functionality and Creativity
- The project is both useful and interesting.
- The user interface is usable and attractive.
- Input validation is implemented on both the front end and back end.
- Helpful error reporting is incorporated for user feedback.

## Security Requirements
- Users undergo an authentication step, with some cases where authentication is denied.
- The server responds with a token/session id for client authentication/authorization.
- All service calls have some form of authorization.
- Security best practices are followed, including input sanitization on the server side.
- HTTPS is not required.

## Technologies Used
- React
- create-react-app
- Babel
- Webpack
- UUID
- Authentication and Authorization
- Fetch API
- JavaScript (ES6+)
- Session ID
- Cookies

## Getting Started
1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Start the server: `npm start`

## Contributors
- Vaishali Jeenwal



