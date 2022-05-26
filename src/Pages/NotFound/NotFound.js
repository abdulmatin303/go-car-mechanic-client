import React from 'react';
import notFound from '../../icons/NotFound.jpg';
const NotFound = () => {
    return (
        <div className='mt-5 flex justify-center justify-items-center'>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={notFound} alt="Shoes" /></figure>

            </div>
        </div>
    );
};

export default NotFound;