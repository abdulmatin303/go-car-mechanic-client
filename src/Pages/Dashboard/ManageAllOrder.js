
import React, { useEffect, useState } from 'react';



const ManageAllOrder = () => {

    const [orders, setOrders] = useState([]);
    const [approved, setApproved] = useState(false);

    // console.log(user.email);

    useEffect(() => {
        fetch(`http://localhost:5000/allOrder`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(orders);

            });
    }, [approved])



    const handleDelete= id => {

        const proceed = window.confirm('Are You want to cancel order? Confirm ?')
        if (proceed) {
            const url = `http://localhost:5000/allOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Cancel the order successfully')
                        const remainingUsers = orders.filter(user => user._id !== id);
                        setOrders(remainingUsers)
                        console.log(remainingUsers);

                    }
                })
        }

    }


     // update the status pending to approved
  const handleApproved = (order) => {
    const newOrder = { ...order };
    console.log(order)

    newOrder.status = "Shipped";
    delete newOrder._id;
    const url = `http://localhost:5000/allOrder/${order._id}`;
    fetch(url, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newOrder),
    })
        .then((res) => res.json())
        .then((result) => {
            if (result.acknowledged) {
                alert("Update Order Successfully");
                setApproved(!approved);
            }
        });
};





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
                            {/* <th>Address</th> */}
                            <th>Product</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Admin</th>
                            <th>Delete Order</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            orders.map((singleOrder, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{singleOrder.orderName}</td>
                                <td>{singleOrder.orderDate}</td>
                                {/* <td>{singleOrder.orderAddress}</td> */}
                                <td>{singleOrder.orderProduct}</td>
                                <td>
                                    {((singleOrder.orderPrice * singleOrder.orderMinimum) && !singleOrder.paid) && <p><span className='text-red-500 text-xl'>Not Paid</span> </p> }


                                    {((singleOrder.orderPrice * singleOrder.orderMinimum) && singleOrder.paid) && <div>
                                        <p><span className='text-success text-xl'>Paid</span> </p>
                                        <p>Transaction Id: <span className='text-success'>{singleOrder.transactionId}</span></p>
                                    </div>}
                                </td>

                                <td><span className='bg-blue-500  rounded'>{singleOrder.status}</span></td>

                                <td> {
                                    singleOrder.transactionId &&  <button class="btn btn-secondary btn-xs" onClick={()=> handleApproved(singleOrder)}>ADD</button>}
                                </td>


                                {
                                    !singleOrder.transactionId && <td><button class="btn btn-xs" onClick={()=> handleDelete(singleOrder._id)}>Remove Order</button></td>
                                }

                            </tr>)
                        }

{/* -------------------  not paid show on payment  ---------------- -------------------- ------------- ------ */}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrder;