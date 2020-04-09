import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Filter from '../components/Filter';
import Footer from './Footer';
import throttle from '../helpers/throttle';

let oldYOffsetValue = 0;

const Layout: React.FC<{}> = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/') {
            // scroll to last saved vertical scroll location
            // when user navigates to home
            window.scrollTo(0, oldYOffsetValue);
        } else {
            // scroll to top when user navigates to any post
            window.scrollTo(0, 0);
        }
        const scrollEvent = throttle(() => {
            if (pathname === '/') {
                // save last known vertical scroll position
                oldYOffsetValue = window.scrollY || window.pageYOffset;
            }
        });
        window.addEventListener('scroll', scrollEvent);
        return function () {
            window.removeEventListener('scroll', scrollEvent);
        };
    }, [pathname]);

    return (
        <>
            <div className='flex-1 px-2 lg:px-0'>
                <div className="ml-auto mr-auto max-w-3xl mb-8">
                    <div className='flex items-center justify-between py-8'>
                        <Link to='/' className='bg-black p-1 rounded text-2xl sm:text-3xl font-light text-white'>&lt;/dom&gt;</Link>
                        <div className='w-2/3 sm:w-1/2'>
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
