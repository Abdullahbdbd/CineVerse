import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-25'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
             <ToastContainer />
        </div>
    );
};

export default Root;