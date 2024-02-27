import React from 'react';
import BuyGet from '../Assets/b2g1.jpg'
import Diskon from '../Assets/discount.jpg'
import Bundle from '../Assets/bundle.jpg'

const PromotionItem = ({ image, title, description }) => {
  return (
    <div className="promotion-item">
      <img src={image} alt='' />
      <h3 className='promotion-name'>{title}</h3>
      <p className="promotion-description">{description}</p>
    </div>
  );
};

const PromotionList = ({ items }) => {
  return (
    <div className="promotion-list">
      {items.map((item, index) => (
        <PromotionItem key={index} {...item} />
      ))}
    </div>
  );
};

const Promotion = () => {
  const promotionItems = [
    {
      image: BuyGet,
      title: "Buy 2 Get 1",
      description: "Buy 2 and get 1 free, applicable to select variants.",
    },
    {
      image: Diskon,
      title: "Discount 20%",
      description:
        "Get a 20% discount on all purchases this weekend. Minimum purchase Rp. 50,000",
    },
    {
      image: Bundle,
      title: "Bundle Deal",
      description:
        "Purchase Ayam Woku and Ayam Rica can save 30% on the total cost.",
    },
  ];

  return (
    <div className="promotion-section-container">
        <div>
            <p className='primary-subheading'>Promotion</p>
            <div className='promoDivLine'></div>
        </div>
        <PromotionList items={promotionItems} />
    </div>
  );
};

export default Promotion;