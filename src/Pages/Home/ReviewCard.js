import React from 'react';
import Rating from 'react-rating';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">

        <div className="card-actions flex items-center justify-evenly">
          <FontAwesomeIcon icon={faUser} size="3x"></FontAwesomeIcon>
          
          {/* avatar  */}
          {/* <div className="avatar">

            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
            </div>
        

          </div> */}

          {/* review name  */}
          <div>
            <h2 className="card-title">{review.name}</h2>
          </div>

        </div>

        <div className='mt-2 pl-36'>
          <p>{review.description}</p>
          <Rating
            initialRating={review.rating}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            readonly
          />
        </div>

      </div>
    </div>
  );
};

export default ReviewCard;