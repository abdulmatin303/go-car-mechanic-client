import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faScrewdriverWrench, faMessage } from '@fortawesome/free-solid-svg-icons';


const BusinessSummary = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-center text-3xl font-bold text-emerald-400'>Business Summary</h1>

            <div>
                <div className='px-12 mt-11 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div class="card card-compact w-96 bg-base-200 shadow-xl p-4">
                        <FontAwesomeIcon className='mt-4' icon={faUsers} size="3x"></FontAwesomeIcon>
                        <div class="card-body flex justify-center items-center">

                            <div class="stat-value text-white-400">100<small>K+</small></div>
                            <h2 class="card-title text-orange-700">Customers</h2>
                        </div>
                    </div>

                    <div class="card card-compact w-96 bg-base-200 shadow-xl p-4">
                        <FontAwesomeIcon className='mt-4' icon={faMessage} size="3x"></FontAwesomeIcon>
                        <div class="card-body flex justify-center items-center">

                            <div class="stat-value text-white-400">33<small>K+</small></div>
                            <h2 class="card-title text-orange-700">Reviews</h2>
                        </div>
                    </div>

                    <div class="card card-compact w-96 bg-base-200 shadow-xl p-4">
                        <FontAwesomeIcon className='mt-4' icon={faScrewdriverWrench} size="3x"></FontAwesomeIcon>
                        <div class="card-body flex justify-center items-center">

                            <div class="stat-value text-white-400">50<small>K+</small></div>
                            <h2 class="card-title text-orange-700">Tools</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;