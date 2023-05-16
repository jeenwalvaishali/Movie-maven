import { useState, useEffect } from "react";

import "./App.css";
import { LOGIN_STATUS, CLIENT, SERVER } from "./common/constants";
import { fetchSession, fetchLogin, fetchLogout } from "./api/services.js";

import Login from "./components/Login/Login";
import Loading from "./components/Loading";
import Home from "./components/Home/Main/Pages/Home";


function App() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [loginStatus, setLoginStatus] = useState(LOGIN_STATUS.PENDING);
  const [isLoading, setIsLoading] = useState(false);

  function onLogin(username) {
    setIsLoading(true);
    fetchLogin(username)
      .then(() => {
        setError("");
        setUsername(username);
        setIsLoading(false);
      })
      .then(() => {
        setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err?.error || "ERROR");
      });
  }

  function onLogout() {
    setError('');
    setUsername('');
    setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    fetchLogout()
    .catch( err => {
      setError(err?.error || 'ERROR');
    });
  }

  function checkForSession() {
    setIsLoading(true);
    fetchSession()
      .then((session) => {
        setUsername(session.username);
        setError("");
        setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err?.error === SERVER.AUTH_MISSING) {
          setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
          return Promise.reject({ error: CLIENT.NO_SESSION });
        } else if (err?.error) {
          setError(err.error);
        }
        return Promise.reject(err);
      });
  }

  useEffect(() => {
    checkForSession();
  }, []);

  useEffect(() => {
    if (isLoading) {
      setError("");
    }
  }, [isLoading]);

  return (
    <div className="app">
      <main className="main">
        {loginStatus === LOGIN_STATUS.PENDING && (
          <Loading className="login__waiting">Loading user...</Loading>
        )}
        {loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && (
          <Login onLogin={onLogin} error={error} setError={setError} />
        )}
        {loginStatus === LOGIN_STATUS.IS_LOGGED_IN && (
          <Home username={username} onLogout={onLogout}/>
        )}
      </main>
    </div>
  );
}

export default App;
