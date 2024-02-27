import React from 'react';
import '../Produk/Popup.css';
import { RiCloseFill } from "react-icons/ri";

const Popup = ({ isOpen, content, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="popup" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <RiCloseFill className="popup-close" onClick={onClose} size={35} />
        <img src={item.image} alt={item.name} className="popup-image" />
        <h3 className="popup-name">{item.name}</h3>
        <p className="popup-description">{item.desc}</p>
        <p className="popup-price">{item.price}</p>
      </div>
    </div>
  );
};

export default Popup;