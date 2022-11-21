import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../ShareComponents/Footer';
import Header from '../ShareComponents/Header';

const Main = () => {
    return (
        <div className='min-h-screen relative'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;