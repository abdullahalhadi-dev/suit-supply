import React from 'react';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Service from '../Service/Service';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Service />
            <Gallery />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;