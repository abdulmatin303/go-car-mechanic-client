import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?orderEmail=${user.email}`,{
        mathod: 'GET',
        headers: {
          'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          // console.log("Response::" ,res);
          if(res.status === 401 || res.status === 403){
            signOut(auth);
            localStorage.removeItem('accessToken')
              navigate('/')
          }
          return res.json();
    
        })
        .then(data => setOrders(data))
    }
  }, [user])

  return (
    <div>


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
              orders.map((singleOrder, index) => <tr>
                <th>{index + 1}</th>
                <td>{singleOrder.orderName}</td>
                <td>{singleOrder.orderDate}</td>
                <td>{singleOrder.orderAddress}</td>
                <td>{singleOrder.orderProduct}</td>
              </tr>)
            }




          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;