import React from 'react';

const Footer: React.FC<{}> = () => {
    return (
        <div className='border-t pt-4 border-gray-400'>
            <div className='ml-auto mr-auto max-w-4xl mb-16 px-2 lg:px-0'>
                <div>
                    <h3 className='text-2xl font-semibold mb-2'>Products</h3>
                    <ul className='flex -ml-1 -mr-1'>
                        <li className='flex-1 px-1'>
                            <a
                                href="https://blur.page"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="BlurPage - a browser extension to hide sensitive element on page"
                            >
                                <div className='font-semibold'>Blur Page</div>
                                <span className='text-gray-600'>a browser extension to hide sensitive element on page</span>
                            </a>
                        </li>
                        <li className='flex-1 px-1'>
                            <a
                                href="https://csslayout.io"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="CSS Layout - a collection of popular layouts and patterns made with CSS"
                            >
                                <div className='font-semibold'>CSS Layout</div>
                                <span className='text-gray-600'>a collection of popular layouts and patterns made with CSS</span>
                            </a>
                        </li>
                        <li className='flex-1 px-1'>
                            <a
                                href="https://formvalidation.io"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="FormValidation - the best validation library for JavaScript"
                            >
                                <div className='font-semibold'>Form Validation</div>
                                <span className='text-gray-600'>the best validation library for JavaScript</span>
                            </a>
                        </li>
                        <li className='flex-1 px-1'>
                            <a
                                href="https://react-pdf-viewer.dev"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="React PDF Viewer - a PDF viewer made for React"
                            >
                                <div className='font-semibold'>React PDF Viewer</div>
                                <span className='text-gray-600'>a PDF viewer made for React</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='mt-6'>
                    <h3 className='text-2xl font-semibold mb-2'>Follow me</h3>
                    <ul className='flex'>
                        <li className='flex-1'>
                            <a
                                href="https://twitter.com/nghuuphuoc"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                            >
                                twitter/nghuuphuoc
                            </a>
                        </li>
                        <li className='flex-1'>
                            <a
                                href="https://dev.to/phuocng"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                            >
                                dev.to/phuocng
                            </a>
                        </li>
                        <li className='flex-1'>
                            <a
                                href="https://github.com/phuoc-ng"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                            >
                                github/phuoc-ng
                            </a>
                        </li>
                        <li className='flex-1' />
                    </ul>
                </div>

                <div className='pt-4'>
                    © 2020 Nguyen Huu Phuoc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
