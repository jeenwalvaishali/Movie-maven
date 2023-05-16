export const LOGIN_STATUS = {
    PENDING: 'pending',
    NOT_LOGGED_IN: 'notLoggedIn',
    IS_LOGGED_IN: 'loggedIn',
  };

  export const SERVER = {
    AUTH_MISSING: 'auth-missing',
    AUTH_INSUFFICIENT: 'auth-insufficient',
    REQUIRED_USERNAME: 'required-username',
    REQUIRED_REVIEW: 'required-review',
    REQUIRED_REVIEWER: 'required-reviewer',
    REQUIRED_SEARCH: 'required-search',
    INVALID_REVIEWER: 'invalid-reviewer',
    REQUIRED_MOVIE: 'required-movie',
    INVALID_RATING: 'invalid-rating', 
  };
  
  export const CLIENT = {
    NETWORK_ERROR: 'networkError',
    NO_SESSION: 'noSession',
  };
  
  export const MESSAGES = {
    [CLIENT.NETWORK_ERROR]: 'Trouble connecting to the network.  Please try again',
    [SERVER.AUTH_INSUFFICIENT]: 'Username can not be dog, please enter valid username and try again.',
    [SERVER.REQUIRED_USERNAME]: 'Please enter a username and it must contains letter only. Try again. !',
    [SERVER.REQUIRED_REVIEW]: 'Please enter the movie review and it should be 400 words !',
    [SERVER.REQUIRED_REVIEWER]: 'Please enter your name',
    [SERVER.REQUIRED_SEARCH]: 'Please enter reviewer name',
    [SERVER.INVALID_REVIEWER]: 'The reviewer you are looking for does not exist. Please try with correct reviewer name!',
    [SERVER.REQUIRED_MOVIE]: 'Please enter the movie name',
    [SERVER.INVALID_RATING]: 'Sorry, This are not valid rating! Please Select from the dropdown',
    default: 'Something went wrong.  Please try again',
  };
  
  