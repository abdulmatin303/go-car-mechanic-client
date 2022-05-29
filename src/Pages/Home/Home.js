import React from 'react';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import CarBenifits from './CarBenifits';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <CarBenifits></CarBenifits>
            <Info></Info>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;