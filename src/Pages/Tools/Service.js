import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateContext } from './Tools';

const Service = ({ service }) => {
    const { _id, name, price, img, description, minimum, available } = service;
    const navigate = useNavigate();
    const handleServiceDetail = id => {
        // console.log("ssee id: ",id);
        navigate(`/tools/${_id}`);
    }

    // const myDate = useContext(DateContext);

    return (
        <div class="card w-96 bg-base-100 shadow-xl hover:bg-slate-200 px-12">


            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <img src={img} alt="" className='rounded-xl border' />

                <p className='text-lg'>cost per piece ${price}</p>
                <p className='text-xl'>Availability: {available} {available > 1 ? 'pieces.' : 'piece.'}  </p>
                <p className='text-xl'>Minimum {minimum} products need to order.</p>

                <p>{description.slice(0,25)}..</p>

                {/* <h2 className='text-center text-3xl text-teal-300 pt-5'>Available Tools on {format(myDate, 'PP')}</h2> */}

                <div class="card-actions justify-center">

                    <button onClick={() => handleServiceDetail(_id)} disabled={available < 500} class="btn btn-primary text-white">Order Now</button>

                </div>
            </div>

        </div>
    );
};

export default Service;