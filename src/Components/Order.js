import React from 'react'
import Grab from '../Assets/grab.png'
import GoFood from '../Assets/gofood.png'
import Shopee from '../Assets/shopee.png'
import NavigationTab from "../Components/NavigationTab";
import {Link} from 'react-router-dom'

const Order = () => {
  return (
    <div className="order-section-container" id="order">
      <div className="order-section-text-container">
        <NavigationTab />
        <div>
          <p className="order-header-text">Order Now On :</p>
          <div className="orderLine"></div>
        </div>
        <div className="order-list-container">
          <div className="order-list">
            <img src={Grab} alt="" className="order-image" />
            <Link to="/order/grab-food-outlet">
              <button className="order-button">Order Now</button>
            </Link>
          </div>
          <div className="order-list">
            <img src={GoFood} alt="" className="order-image" />
            <Link to="">
              <button className="order-button">Order Now</button>
            </Link>
          </div>
          <div className="order-list">
            <img src={Shopee} alt="" className="order-image" />
            <Link to="">
              <button className="order-button">Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order