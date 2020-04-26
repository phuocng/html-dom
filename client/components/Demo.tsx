import React from 'react';

import Spinner from './Spinner';

interface DemoProps {
    src?: string;
}

const Demo: React.FC<DemoProps> = ({ src }) => {
    const [loaded, setLoaded] = React.useState(false);
    const iframeRef = React.useRef<HTMLIFrameElement | null>(null);

    const onLoad = (e: React.SyntheticEvent) => {
        setLoaded(true);

        const iframe = e.target as HTMLFrameElement;
        const body = iframe.contentDocument.body;
        const maxHeightStyle = iframe.contentWindow.getComputedStyle(body).maxHeight;
        const maxHeight = maxHeightStyle && maxHeightStyle !== 'none' ? maxHeightStyle : '';
        iframe.classList.remove('opacity-0');
        iframe.style.height = maxHeight || `${body.scrollHeight}px`;
        body.style.width = `${iframe.scrollWidth}px`;
    };

    return (
        <div className='my-4'>
            <div className='inline-flex px-2 py-1 bg-gray-400'>
                <div className='mr-2'>Demo</div>
                (<a
                    className='underline'
                    href={`https://github.com/phuoc-ng/html-dom/blob/master${src}`}
                    target='_blank'
                >
                    source
                </a>)
            </div>
            <div className='border border-gray-400 relative'>
                {
                    !loaded && (
                        <div className='absolute top-0 left-0 h-full w-full'>
                            <Spinner />
                        </div>
                    )
                }
                <iframe ref={iframeRef} className='border-none w-full opacity-0' src={src} onLoad={onLoad} />
            </div>
        </div>
    );
};

export default Demo;
