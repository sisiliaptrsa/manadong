import React from 'react'
import NavigationTab from "../Components/NavigationTab";

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
            <img src={"/Assets/grab.png"} alt="" className="order-image" />
            <a href="/order/grab-food-outlet">
              <button className="order-button">Order Now</button>
            </a>
          </div>
          <div className="order-list">
            <img src={"/Assets/gofood.png"} alt="" className="order-image" />
            <a href="">
              <button className="order-button">Order Now</button>
            </a>
          </div>
          <div className="order-list">
            <img src={"/Assets/shopee.png"} alt="" className="order-image" />
            <a href="">
              <button className="order-button">Order Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order