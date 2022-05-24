import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const reviews = [
        {
            _id: 1,
            name: "Elon Musk",
            description: 'Lorem ipsum dolor sit amet.',
            img: 'https://i.ibb.co/Fz1ckfc/elon-musk.jpg'
        },
        {
            _id: 2,
            name: "Mark Zuckerberg",
            description: 'Lorem ipsum dolor sit amet.',
            img: 'https://i.ibb.co/S3hXtjT/mark.jpg'
        },
        {
            _id: 3,
            name: "Steve Jobs",
            description: 'Lorem ipsum dolor sit amet.',
            img: 'https://i.ibb.co/pKhyTKD/stevejobs.jpg'
        }
    ]
    return (
        <section className='my-28 px-12'>

            <div>
                <div className='text-center'>
                    <h2 className="text-3xl font-bold text-emerald-400">Reviews</h2>
                    <h4 className='text-xl text-teal-600'>What our Clients says</h4>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {
                        reviews.map(review => <ReviewCard key={reviews._id}
                            review={review}></ReviewCard>
                        )
                    }

                </div>

                
            </div>
            
            
        </section>
    );
};

export default Review;