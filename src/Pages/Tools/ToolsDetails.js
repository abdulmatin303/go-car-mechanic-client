import { format } from 'date-fns';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
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


    const handleOrderDetails = event => {
        event.preventDefault();
        const minimum = minimumRef.current.value;
        const date = event.target.date.value;
        console.log(minimum,date);
    }

    // const myDate = useContext(DateContext);
    


    return (
        <div className='flex justify-evenly'>

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


                    <input type="number" ref={minimumRef} defaultValue={orderDetails?.minimum} name='minimum' placeholder="Your minimum order" class="input input-bordered w-full max-w-xs" />


                    <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='email' placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Your Phone Number" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="date" name="date" placeholder="Select when you need this order" class="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="submit" placeholder="Type here" class="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};
export default ToolsDetails;