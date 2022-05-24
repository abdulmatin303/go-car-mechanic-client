import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">

        <p>{review.description}</p>
        
        <div class="card-actions flex items-center justify-evenly">
          
          {/* avatar  */}
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>
          
          {/* review name  */}
          <div>
            <h2 class="card-title">{review.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;