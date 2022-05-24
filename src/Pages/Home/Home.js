import React from 'react';
import Banner from './Banner';
import Info from './Info';
import InfoCard from './InfoCard';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Review></Review>
            <Info></Info>
        </div>
    );
};

export default Home;