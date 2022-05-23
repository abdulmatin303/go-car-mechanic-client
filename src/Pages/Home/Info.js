import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../icons/clock.svg';
import marker from '../../icons/marker.svg';
import phone from '../../icons/phone.svg';

const Info = () => {
    return (
        <div className='mt-11 grid grid-cols-1 lg:grid-cols-3 gap-5'>

            <InfoCard bgClass="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" cardTitle="Opening Hours" cardDescription='Our office is open from 9.00am – 5.00pm, Monday to Friday.' img={clock}></InfoCard>

            <InfoCard bgClass="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:to-yellow-500" cardTitle="Our Locations" cardDescription=' Level-4, 34, Awal Centre, Banani, Dhaka' img={marker}></InfoCard>

            <InfoCard bgClass="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" cardTitle="Contact Us" cardDescription="Official : 01308-543768 (Available : 10:00am to 07:00pm)" img={phone}></InfoCard>
        </div>
    );
};

export default Info;