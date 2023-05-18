import React from 'react';
import Banner from '../banner/Banner';
import Galaries from '../galaries/Galaries';
import Catagories from '../tabByCatagory/Catagories';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Galaries></Galaries>
           <Catagories></Catagories>
        </div>
    );
};

export default Home;