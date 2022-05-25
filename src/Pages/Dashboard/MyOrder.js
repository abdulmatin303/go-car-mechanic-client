import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [orders,setOrders] = useState([]);
    const [user] = useAuthState(auth);
    
    useEffect(() => {
        if(user) {
            fetch(`http://localhost:5000/order?orderEmail=${user.email}`)
        .then(res=> res.json())
        .then(data => setOrders(data))
        }
    },[user])

    return (
        <div>
            <h2>This is my Orders {orders.length} </h2>

            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Address</th>
        <th>Product</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}

        {
            orders.map((singleOrder , index)=> <tr>
                <th>{index+1}</th>
                <td>{singleOrder.orderName}</td>
                <td>{singleOrder.orderDate}</td>
                <td>{singleOrder.orderAddress}</td>
                <td>{singleOrder.orderProduct}</td>
              </tr> )
        }

      
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;