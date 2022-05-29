import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHandHoldingDollar, faGear } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

const CarBenifits = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-center text-3xl font-bold text-emerald-400'>Car Tools Benefits</h1>

      <div>
        <div className='px-12 mt-11 grid grid-cols-1 lg:grid-cols-3 gap-5'>
          <div class="card card-compact w-96 bg-base-100 shadow-xl p-4">
            <FontAwesomeIcon className='mt-4' icon={faLocationDot} size="3x"></FontAwesomeIcon>
            <div class="card-body">
              <h2 class="card-title">Free DoorStep Pick-up and Drop</h2>
              <p> We can easily reach your product within short time. </p>
            </div>
          </div>

          <div class="card card-compact w-96 bg-base-100 shadow-xl p-4">
            <FontAwesomeIcon className='mt-4' icon={faHandHoldingDollar} size="3x"></FontAwesomeIcon>
            <div class="card-body">
              <h2 class="card-title">Upfront & Competitive Pricing </h2>
              <p>We provide 6 month free installment facilities.</p>
            </div>
          </div>

          <div class="card card-compact w-96 bg-base-100 shadow-xl p-4">
            <FontAwesomeIcon className='mt-4' icon={faGear} size="3x"></FontAwesomeIcon>
            <div class="card-body">
              <h2 class="card-title">100% Genuine Spare Parts </h2>
              <p>We are the first importer in Bangladesh who provide warranty and genuine products.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CarBenifits;