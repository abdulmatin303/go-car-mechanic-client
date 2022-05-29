import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://frozen-anchorage-94808.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <section className='my-28 px-12'>

            <div>
                <div className='text-center'>
                    <h2 className="text-3xl font-bold text-emerald-400">Reviews</h2>
                    <h4 className='text-xl text-teal-600'>What our Clients says</h4>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>

                    {
                        services.map(review => <ReviewCard 
                            review={review}></ReviewCard>
                        )
                    }
                

                </div>

                
            </div>
            
            
        </section>
    );
};

export default Review;