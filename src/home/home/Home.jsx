import React from 'react';
import Banner from '../banner/Banner';
import Galaries from '../galaries/Galaries';
import Catagories from '../tabByCatagory/Catagories';
import useTitle from '../../customHooks/useTitle';
import ToyComparison from '../toycompare/ToyComparision';

const Home = () => {
    useTitle("Toy Heros")
    return (
        <div>
           <Banner></Banner>
           <Galaries></Galaries>
           <Catagories></Catagories>
           <ToyComparison></ToyComparison>
        </div>
    );
};

export default Home;