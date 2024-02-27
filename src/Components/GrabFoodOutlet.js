import React from 'react'
import NavigationTab from './NavigationTab';
import { FaArrowRightLong } from "react-icons/fa6";

const OutletItem = ({ title, text }) => (
  <div className="outlet-item">
    <div className="outlet-title">{title}</div>
    <div className="outlet-text">{text} < FaArrowRightLong /></div>
  </div>
);

const OutletList = () => {
    const outlets = [
        { title: 'Senopati, Petogogan', text: 'Purchase Here' },
        { title: 'Kebun Jeruk / Tanjung Duren', text: 'Purchase Here' },
        { title: 'Food Plaza PIK', text: 'Purchase Here' },
        { title: 'Kuningan - D\'Kanteen', text: 'Purchase Here' },
        { title: 'Bintaro, Thelapan Square', text: 'Purchase Here' },
        { title: 'Gading Serpong', text: 'Purchase Here' },
        { title: 'Cipete', text: 'Purchase Here' },
        { title: 'Menteng', text: 'Purchase Here' },
    ];

    return (
      <div className="outlet-section-container" id="order/grab-food-outlet">
        <div className="outlet-section-text-container">
          <NavigationTab />
          <p className="outlet-header-text">GrabFood Outlet</p>
          <div className="outletLine" />
          <div className="outlet-section-image-container">
            <div className="outlet-list-container">
              {outlets.map((location, index) => (
                <OutletItem
                  key={index}
                  title={location.title}
                  text={location.text}
                />
              ))}
            </div>
            <div className="outlet-text-container">
              <img
                className="outlet-section-image"
                src={"/Assets/outlet.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default OutletList