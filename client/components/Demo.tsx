import React from 'react';

interface DemoProps {
    src?: string;
}

const Demo: React.FC<DemoProps> = ({ src }) => {
    const iframeRef = React.useRef<HTMLIFrameElement | null>(null);
    const [source, setSource] = React.useState(src);

    React.useEffect(() => {
        const path = window.location.pathname.substr(1);
        setSource(src || `demo/${path}`);
    }, []);

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
                    href={`https://github.com/phuoc-ng/html-dom/blob/master/${source}/index.html`}
                    target='_blank'
                >
                    source
                </a>)
            </div>
            <div className='border border-gray-400'>
                <iframe ref={iframeRef} className='border-none w-full' src={source} onLoad={onLoad} />
            </div>
        </div>
    );
};

export default Demo;
