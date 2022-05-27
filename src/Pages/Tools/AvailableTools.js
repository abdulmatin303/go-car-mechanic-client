import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import Service from './Service';
import { DateContext } from './Tools';

const AvailableTools = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const myDate = useContext(DateContext);

    return (
        <div className='px-12 mt-12'>


            <h2 className="text-3xl font-bold text-center text-emerald-400">Available Car Tools</h2>
            <h4 className='text-xl text-center  text-teal-600'>Order what you need</h4>


            {/* <h2 className='text-center text-3xl text-teal-300 pt-5'>Available Tools on {format(myDate, 'PP')}</h2> */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div >
    );
};

export default AvailableTools;