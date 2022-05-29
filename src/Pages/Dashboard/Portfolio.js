import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Portfolio = () => {

    const [data, setData] = useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/myPortfolio?email=${user.email}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (
        <section className='my-12 px-12'>

            <div>
                <div className='text-center'>
                    <h2 className="text-2xl font-bold text-emerald-400">My Portfolio</h2>

                    
                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 mt-6'>

                    {
                        data.map(singleData => <>
                            <div class="card lg:card-side bg-base-100 shadow-xl">
                                <figure><img src={singleData.img} alt="Album" /></figure>
                                <div class="card-body hover:bg-gray-200">

                                    <h2 class="card-title text-sky-700 text-3xl">{singleData.name}</h2>
                                    <p> <span className='text-amber-700 font-bold text-xl'> Email:  </span>  <span className='text-rose-500 text-2xl'>{singleData.email}</span></p>

                                    <p> <span className='text-amber-700 font-bold text-xl'>  Last Degree: </span>  <span className='text-rose-500 text-2xl'>{singleData.education}</span></p>

                                    <p> <span className='text-amber-700 font-bold text-xl'> Skills:  </span>  <span className='text-rose-500 text-2xl'>{singleData.skill}</span></p>

                                    <div className='flex justify-evenly rounded bg-slate-500 p-2'>
                                        <a className='bg-red-400 p-2 w-20 rounded hover:bg-green-500 hover:text-white' target='_blank' href={singleData.project1}>Project1</a>

                                        <a className='bg-red-400 p-2 w-20 rounded hover:bg-green-500 hover:text-white' target='_blank' href={singleData.project2}>Project2</a>

                                        <a className='bg-red-400 p-2 w-20 rounded hover:bg-green-500 hover:text-white' target='_blank' href={singleData.project3}>Project3</a>
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

export default Portfolio;