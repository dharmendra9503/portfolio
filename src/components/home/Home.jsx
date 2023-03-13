import React from 'react';
import Data from './Data';
import "./Home.css";
import ScrollDown from './ScrollDown';
import Social from "./Social";

const Home = () => {
  return (
      <div className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            {/* Component */}
            <Social />

            <div className="home__img"></div>

            {/* Component */}
            <Data />

          </div>

          {/* Component */}
          <ScrollDown />

        </div>
      </div>
  )
}

export default Home
