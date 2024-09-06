import Footer from '@/components/my-ui/Footer';
import Navbar from '@/components/my-ui/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex-grow mt-16'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default layout;