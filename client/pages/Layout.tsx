import React, { useEffect } from 'react';

import Filter from '../components/Filter';
import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='flex-1 px-2 lg:px-0'>
                <div className="ml-auto mr-auto max-w-3xl mb-8">
                    <div className='flex justify-end'>
                        <div className='my-4 w-1/2'>
                            <Filter />
                        </div>
                    </div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
