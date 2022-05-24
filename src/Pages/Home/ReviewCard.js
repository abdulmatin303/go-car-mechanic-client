import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">

        <p>{review.description}</p>
        
        <div className="card-actions flex items-center justify-evenly">
          
          {/* avatar  */}
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>
          
          {/* review name  */}
          <div>
            <h2 className="card-title">{review.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;