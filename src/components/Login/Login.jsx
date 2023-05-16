import { useState } from 'react';
import Status from '../Status';
import "./Login.css"

function Login({ onLogin, error  }) {
  const [username, setUsername] = useState('');

  function onChange(e) {
    setUsername(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault(); 
    onLogin(username.toLowerCase()); 
  }

  return (
      <div className="login-container">
      <div className="login-card">
        <div className="login-card-left">
          <div className="left-overlay">
            <div className='left-overlay-content'>
              <h1 className='left-overlay-head'>Movie Maven</h1>
              <p className="left-overlay-para">
                Welcome to Movie-Maven your go-to source for the latest movie reviews, ratings, and plot. 
                Discover the best new releases and browse our extensive library of film reviews to find your next favorite movie
              </p>
            </div>
          </div>
        </div>
        <div className="login-card-right">
          <h2 className='right-overlay-head'>Create Account</h2>
          <form className="login-form" action="/api/session/" method="POST" onSubmit={onSubmit}>
            <div className="login-form-row">
              <div className="login-form-group">
                <label className="form-label"><span className="mandotary-field">*</span>Username</label>
				        <input type="text" className="form-control" value={username} onChange={onChange}/>
              </div>
            </div>
            <div className="form-submit">
              <p className='form-submit-para'>New to Movie Maven? Join now and create your account in less than a minute!</p>
              <button type="submit" className="button-login">Send</button>
            </div>
          </form>
          {error && <Status error={error} />}
        </div>
      </div>
    </div>
  );
}

export default Login;