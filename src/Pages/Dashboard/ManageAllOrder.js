
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';



const ManageAllOrder = () => {

    const [orders, setOrders] = useState([]);
    const [approved, setApproved] = useState(false);

    // console.log(user.email);

    useEffect(() => {
        fetch(`https://frozen-anchorage-94808.herokuapp.com/allOrder`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(orders);

            });
    }, [approved])



    const handleDelete = id => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://frozen-anchorage-94808.herokuapp.com/allOrder/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            // sweet alert 
                            Swal.fire({
                                title: 'Cancel the order successfully',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            })

                            // alert('Cancel the order successfully');
                            const remainingUsers = orders.filter(user => user._id !== id);
                            setOrders(remainingUsers)
                            console.log(remainingUsers);

                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })



    }


    // update the status pending to approved
    const handleApproved = (order) => {
        const newOrder = { ...order };
        console.log(order)

        newOrder.status = "Shipped";
        delete newOrder._id;
        const url = `https://frozen-anchorage-94808.herokuapp.com/allOrder/${order._id}`;
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

            <h2 className="text-3xl font-bold text-center text-emerald-400 mb-4">Manage All Orders</h2>

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
                                    {((singleOrder.orderPrice * singleOrder.orderMinimum) && !singleOrder.paid) && <p><span className='text-red-500 text-xl'>Not Paid</span> </p>}


                                    {((singleOrder.orderPrice * singleOrder.orderMinimum) && singleOrder.paid) && <div>
                                        <p><span className='text-success text-xl'>Paid</span> </p>
                                        <p>Transaction Id: <span className='text-success'>{singleOrder.transactionId}</span></p>
                                    </div>}
                                </td>

                                <td><span className='bg-blue-500  rounded'>{singleOrder.status}</span></td>

                                <td> {
                                    singleOrder.transactionId && <button class="btn btn-secondary btn-xs" onClick={() => handleApproved(singleOrder)}>ADD</button>}
                                </td>


                                {
                                    !singleOrder.transactionId && <td><button class="btn btn-xs" onClick={() => handleDelete(singleOrder._id)}>Remove Order</button></td>
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