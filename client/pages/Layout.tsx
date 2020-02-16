import React, { useEffect } from 'react';

import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='ml-auto mr-auto max-w-4xl px-2 lg:px-0'>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;
