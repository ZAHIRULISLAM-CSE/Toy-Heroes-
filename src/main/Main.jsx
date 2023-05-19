import React from 'react';
import NavBar from '../shared/nav/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footers';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;