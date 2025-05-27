import React from 'react';
import Navber from '../Shared/Navber';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <div>

            <Navber></Navber>
            <div className='min-h-[calc(100vh-280px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;