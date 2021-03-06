import React from 'react';
import Swal from 'sweetalert2';
import useToolsList from '../../hooks/useToolsList';
const ManageTools = () => {

    const [services, setServices] = useToolsList();

    const handleDelete = id => {
        // console.log('id value: ', id);

        Swal.fire({
            title: 'Are you sure to delete tools?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                const url = `https://frozen-anchorage-94808.herokuapp.com/service/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('data is: ', data);
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);

                    })

                Swal.fire(
                    'Deleted!',
                    'Your Tools has been deleted.',
                    'success'
                )
            }
        })

    }

    return (
        <div className='px-12'>


            <h2 className="text-3xl font-bold text-center text-emerald-400">Manage Car Tools</h2>
            <h4 className='text-xl text-center  text-teal-600'>Manage what you need</h4>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
                {
                    services.map(service => <>
                        <div
                            key={service._id}
                            service={service}

                        >
                            <div class="card w-96 bg-base-100 shadow-xl hover:bg-slate-200 px-12 mt-3">


                                <div class="card-body">
                                    <h2 class="card-title">{service.name}</h2>
                                    <img src={service.img} alt="" className='rounded-xl border' />

                                    <p className='text-lg'>cost per piece ${service.price}</p>
                                    <p className='text-xl'>Availability: {service.available} {service.available > 1 ? 'pieces.' : 'piece.'}  </p>
                                    <p className='text-xl'>Minimum {service.minimum} products need to order.</p>

                                    <p>{service.description.slice(0, 25)}..</p>



                                    <div class="card-actions justify-center">

                                        <button onClick={() => handleDelete(service._id)} class="btn btn-primary text-white"  >
                                            Delete Tools
                                        </button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </>)
                }
            </div>
        </div >
    );
};

export default ManageTools;