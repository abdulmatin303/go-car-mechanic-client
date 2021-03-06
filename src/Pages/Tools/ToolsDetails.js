import { format } from 'date-fns';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { DateContext } from './Tools';
const ToolsDetails = () => {
    const { toolsId } = useParams();
    // console.log('tools: ',toolsId);
    const [toolDetail, setToolDetail] = useState([])
    useEffect(() => {
        fetch('https://frozen-anchorage-94808.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setToolDetail(data))
    }, [])
    const orderDetails = toolDetail.find(singleTool => singleTool._id === (toolsId))
    //  console.log(orderDetails);


    const minimumRef = useRef('');
    const [user, loading, error] = useAuthState(auth);


    const handleOrderDetails = event => {
        event.preventDefault();

        const minimum = minimumRef.current.value;
        // if(minimum<495){
        //     alert("not possible");
        // }
        const date = event.target.date.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;

        // console.log(minimum, date, name, email, address);

        const order = {
            orderId: orderDetails?._id,
            orderName: name,
            orderEmail: email,
            orderAddress: address,
            orderDate: date,
            orderProduct: orderDetails?.name,
            orderPrice: orderDetails?.price,
            orderMinimum: minimum,
        }

        console.log(order.orderName);

        fetch('https://frozen-anchorage-94808.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.insertedId){
                    toast.success('Order Added in Database');
                    
                }
                else {
                    toast.error('Order Failed');
                }
            })
    }

    // const myDate = useContext(DateContext);

    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:flex justify-center gap-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img className='' src={orderDetails?.img} alt="tools" /></figure>
                <div class="p-6">
                    <h2 className="text-violet-700 text-2xl">
                        {orderDetails?.name}</h2>
                    <p>${orderDetails?.price} per piece</p>
                    <p>Minimum {orderDetails?.minimum} pieces order</p>
                    <p>{orderDetails?.available} pieces Available</p>
                    <p>{orderDetails?.description}</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div className='card-body mt-6'>
                    <form onSubmit={handleOrderDetails} className='grid grid-cols-1 gap-3'>
                        <h3 className='text-3xl'>Order for <span className='text-violet-700'>{orderDetails?.name}</span> </h3>


                        <input  type="text" name='name' defaultValue={user.displayName} disabled placeholder="Your Name" class="input input-bordered w-full max-w-xs" />

                        <input type="text" name='email' defaultValue={user.email} disabled placeholder="Your Email" class="input input-bordered w-full max-w-xs" />


                        <input required type="number" name='minimum' ref={minimumRef<495 ? 'not possible' : minimumRef} defaultValue={orderDetails?.minimum} placeholder="Your minimum order" class="input input-bordered w-full max-w-xs" />

                        <input required type="text" name='phone' placeholder="Your Phone Number" class="input input-bordered w-full max-w-xs" />

                        <input required type="text" name="address" placeholder="Your Address" class="input input-bordered w-full max-w-xs" />

                        <input required type="date" name="date" placeholder="Select when you need this order" class="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Place Order" placeholder="Type here" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ToolsDetails;