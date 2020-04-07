import React, { useEffect, useRef } from 'react';

import './ad.css';

const Ad: React.FC<{}> = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const source = 'https://cdn.carbonads.com/carbon.js?serve=CE7I6KQI&placement=htmldomdev';

    useEffect(() => {
        // Ignore if the code is reached in snapping mode
        if (navigator.userAgent === 'ReactSnap') {
            return;
        }
        const container = containerRef.current;
        if (!container) {
            return;
        }

        const script = document.createElement('script');
        script.src = source;
        script.async = true;
        script.id = '_carbonads_js';
        container.appendChild(script);

        return () => {
            container.removeChild(script);
        };
    }, []);

    return (
        <div className='flex justify-center mx-4 my-6'>
            <div ref={containerRef} />
        </div>
    );
};

export default Ad;
