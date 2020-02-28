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
        <div className='my-4'>
            <div className='inline-flex px-2 py-1 bg-gray-400'>
                <div className='mr-2'>Demo</div>
                (<a
                    className='underline'
                    href={`https://github.com/phuoc-ng/html-dom/blob/master/demo/${src}`}
                    target='_blank'
                >
                    source
                </a>)
            </div>
            <div className='border border-gray-400'>
                <iframe className='border-none w-full' src={`demo/${src}`} onLoad={onLoad} />
            </div>
        </div>
    );
};

export default Demo;
