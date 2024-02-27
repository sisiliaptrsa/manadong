import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const RevItem = ({ name, comment }) => {
  return (
    <div className="review-item">
      <FaQuoteRight className="review-item-icon-left" size={25} />
      <div className="review-item-text-container">
        <p className="review-item-name">{name}</p>
        <p className="review-item-comment">{comment}</p>
      </div>
      <FaQuoteLeft className="review-item-icon-right" size={25} />
    </div>
  );
};

const revItems = [
    {
      name: 'Jennifer',
      comment: 'Such a good value for your money. Really good Manadonese food. Well recommended!',
    },
    {
      name: 'A*******a',
      comment: 'Cakalangnya terbaikkkkkkkk, the best cakalang everrrr',
    },
    {
      name: 'Nadia',
      comment: 'Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deh tanggung jawab',
    },
];

const Reviews = () => {
  return (
    <div className='review-section-container'>
      <div className='review-section-text-container'>
        <p className='primary-subheading'>Reviews</p>
        <div className='dividerLine'></div>
        <div className='review-item-container'>
          {revItems.map((item, index) => (
            <RevItem key={index} {...item} />
          ))}
    </div>
      </div>
    </div>
  )
}

export default Reviews