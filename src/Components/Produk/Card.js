import React from 'react';
import '../Produk/Card.css';

const Card = ({ item, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={item.image} alt='' className="card-image" />
      <div className="card-content">
        <h3>{item.name}</h3>
      </div>
    </div>
  );
};

export default Card;