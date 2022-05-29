import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4KmXKC77nsPQZB7h5mqSmarPs26lsXGLttp8Z0JFdPxPcAcKgFZ3aaLLDrLnzi9voTIsoBOakj92aSy4vNuLLX00XYBJvMkg');


const Payment = () => {
    const { id } = useParams();
    const url = `https://frozen-anchorage-94808.herokuapp.com/order/${id}`;

    const { data : order , isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>


            <div class="card w-50 max-w-md bg-base-200 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold text-3xl">Hello, {order?.orderName} </p>
                    <h2 className="card-title">Pay for <span className='text-pink-900'>{order?.orderProduct}</span></h2>
                    <p>Oder Delivery Date: <span className='text-orange-700'>{order?.orderDate}</span></p>
                    <p>Please pay $ {order?.orderPrice * order?.orderMinimum} </p>

                </div>
            </div>



            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}></CheckoutForm>
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;