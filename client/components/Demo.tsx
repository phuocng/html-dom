import React from 'react';

interface DemoProps {
    src: string;
}

const Demo: React.FC<DemoProps> = ({ src }) => {
    const onLoad = (e: React.SyntheticEvent) => {
        const iframe = e.target as HTMLFrameElement;
        const body = iframe.contentDocument.body;
        iframe.style.height = `${body.scrollHeight}px`;
        body.style.width = `${iframe.scrollWidth}px`;
    };

    return (
        <div className='border border-gray-400 my-8 relative'>
            <div
                className='absolute top-0 left-0 w-full text-center'
                style={{
                    transform: 'translate(0, -50%)',
                }}
            >
                <h2 className='bg-white inline text-2xl sm:text-3xl p-2'>DEMO</h2>
            </div>
            <iframe className='border-none w-full' src={`demo/${src}`} onLoad={onLoad} />
        </div>
    );
};

export default Demo;
