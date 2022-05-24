import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Review></Review>
            <Info></Info>
            <Footer></Footer>
        </div>
    );
};

export default Home;