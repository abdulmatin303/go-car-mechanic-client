import { format } from 'date-fns';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { DateContext } from './Tools';
const ToolsDetails = () => {
    const { toolsId } = useParams();
    const [toolDetail, setToolDetail] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setToolDetail(data))
    }, [])
    const orderDetails = toolDetail.find(singleTool => singleTool._id === Number(toolsId))
    //  console.log(orderDetails);


    const minimumRef = useRef('');
    const [user, loading, error] = useAuthState(auth);


    const handleOrderDetails = event => {
        event.preventDefault();
        
        const minimum = minimumRef.current.value;
        const date = event.target.date.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;

        console.log(minimum,date,name,email,address);

        const order = {
            orderId: orderDetails?._id,
            orderName: name,
            orderEmail: email,
            orderAddress: address,
            orderDate: date,
            orderProduct: orderDetails?.name
        }

        console.log(order.orderName);

        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    // const myDate = useContext(DateContext);

    
    


    return (
        <div className='flex '>

            <div>
                <div class="card w-96 bg-base-100 shadow-xl">

                    <figure><img src={orderDetails?.img} alt="Shoes" /></figure>
                    <div class="card-body">


                        <h2 className="card-title text-violet-700">{orderDetails?.name}</h2>
                        <p>${orderDetails?.price} per piece</p>
                        <p>Minimum {orderDetails?.minimum} pieces order</p>
                        <p>{orderDetails?.available} pieces Available</p>
                        <p>{orderDetails?.description}</p>

                    </div>
                </div>
            </div>
            <div>
                <form onSubmit={handleOrderDetails} className='grid grid-cols-1 gap-3'>
                    <h3 className='text-3xl'>Order For <span className='text-violet-700'>{orderDetails?.name}</span> </h3>


                    <input type="text" name='name' defaultValue={user.displayName} disabled placeholder="Your Name" class="input input-bordered w-full max-w-xs" />

                    <input type="text" name='email' defaultValue={user.email} disabled placeholder="Your Email" class="input input-bordered w-full max-w-xs" />


                    <input type="number" name='minimum' ref={minimumRef} defaultValue={orderDetails?.minimum}  placeholder="Your minimum order" class="input input-bordered w-full max-w-xs" />

                    <input type="text" name='phone' placeholder="Your Phone Number" class="input input-bordered w-full max-w-xs" />

                    <input type="text" name="address" placeholder="Your Address" class="input input-bordered w-full max-w-xs" />

                    <input type="date" name="date" placeholder="Select when you need this order" class="input input-bordered w-full max-w-xs" />

                    <input type="submit" value="submit" placeholder="Type here" class="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};
export default ToolsDetails;