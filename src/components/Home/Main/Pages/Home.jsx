import { useState } from 'react';
import Main from "../Main";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const Home = ({username, onLogout}) => {
  const defaultPage = document.location.hash.replace('#', '');
  const[page, setPage] = useState(defaultPage || 'About');

  return (
    <>
      <Header setPage={setPage} username={username} onLogout={onLogout}/>
      <Main page={page} username={username}/>   
      <Footer setPage={setPage}/>
    </>
  );
};

export default Home;
