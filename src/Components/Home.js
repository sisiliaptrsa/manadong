import React from 'react';
import Navbar from './Navbar';
import Banner from '../Assets/banner.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container" id='home'>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">Manadong</h1>
          <p className="primary-txt1">
            is a Manado dish with a spicy and appetizing flavour.
          </p>
          <h2 className="primary-txt2">#NikmatnyaGaPakeRibet</h2>
          <Link to='/order'>
            <button className="secondary-button">
              Order Now
            </button>
          </Link>
        </div>
        <img src={Banner} alt="" className="home-image-container" />
      </div>
    </div>
  );
}

export default Home;