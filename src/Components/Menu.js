import React, { useState } from 'react';
import Card from './Produk/Card';
import Popup from './Produk/Popup';

const sampleMenu = [
  {
    name: "Ayam Rica",
    image: "/Assets/rica.png",
    price: "Rp. 45,000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Cumi Hitam",
    image: "/Assets/cumi.png",
    price: "Rp. 40,000",
    desc: "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
  },
  {
    name: "Cakalang Tinorasak",
    image: '/Assets/tinorasak.png',
    price: "Rp. 45,000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Perkedel Jagung",
    image: "/Assets/perkedel.png",
    price: "Rp. 35,000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Ayam Woku",
    image: "/Assets/woku.png",
    price: "Rp. 45,000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lauk Frozen",
    image: '/Assets/lauk.png',
    price: "Rp. 35,000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Cakalang Rabe",
    image: "/Assets/rica.png",
    price: "Rp. 45,000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handlePopupClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className='menu-section-container'>
        <div className='menu-section-text-container'>
            <div>
                <p className='primary-subheading'>Our Menu</p>
                <div className='dividerLine'></div>
                <div className="menu-row">
                    {sampleMenu.slice(0, 4).map((item, index) => (
                        <Card key={index} item={item} onClick={() => handleCardClick(item)} />
                    ))}
                </div>
                <div className="menu-row">
                    {sampleMenu.slice(4).map((item, index) => (
                    <Card key={index + 4} item={item} onClick={() => handleCardClick(item)} />
                    ))}
                </div>
                <Popup isOpen={selectedItem !== null} item={selectedItem} onClose={handlePopupClose} />
            </div>
            <div className='menu-button-container'>
                <a href='/order'>
                    <button className="menu-button">
                        Order Now
                    </button>
                </a>
            </div>
        </div>
    </div>
  );
}

export default Menu;