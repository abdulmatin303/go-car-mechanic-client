import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ShowProfile = () => {

    const [data, setData] = useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/myProfile?email=${user.email}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    

    return (
        <section className='my-12 px-12'>

            <div>
                <div className='text-center'>
                    <h2 className="text-3xl font-bold text-emerald-400">My Profile</h2>

                    <h4 className='text-xl text-teal-600'>This is All About me</h4>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 mt-6'>

                    {
                        data.map(singleData => <>
                            <div class="card lg:card-side bg-base-100 shadow-xl">
                                <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                                <div class="card-body hover:bg-gray-200">
                                    
                                    <h2 class="card-title text-sky-700 text-3xl">{singleData.name}</h2>
                                    <p> <span className='text-amber-700 font-bold text-xl'> Email:  </span>  <span className='text-rose-500 text-2xl'>{singleData.email}</span></p>

                                    <p> <span className='text-amber-700 font-bold text-xl'>  Last Degree: </span>  <span className='text-rose-500 text-2xl'>{singleData.education}</span></p>

                                    <p> <span className='text-amber-700 font-bold text-xl'> Address:  </span>  <span className='text-rose-500 text-2xl'>{singleData.location}</span></p>

                                    <p> <span className='text-amber-700 font-bold text-xl'> Contact:  </span>  <span className='text-rose-500 text-2xl'>{singleData.phone}</span></p>

                                    <div class="card-actions justify-end">
                                        <button class="btn btn-primary">Listen</button>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }

                </div>


            </div>


        </section>
    );
};

export default ShowProfile;