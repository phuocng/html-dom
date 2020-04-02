import React from 'react';

import SubscribeForm from '../components/SubscribeForm';

const Footer: React.FC<{}> = () => {
    return (
        <div className='border-t pt-6 pb-16 border-gray-400'>
            <div className='ml-auto mr-auto max-w-3xl px-2 lg:px-0'>
                <SubscribeForm />
                <div>
                    <h3 className='text-xl sm:text-2xl font-semibold mb-2'>其他项目</h3>
                    <ul className='flex flex-wrap -ml-1 -mr-1'>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://blur.page"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="BlurPage - 一个浏览器扩展用来隐藏页面上的敏感元素"
                            >
                                <div className='font-semibold'>Blur Page</div>
                                <span className='text-gray-600'>一个浏览器扩展用来隐藏页面上的敏感元素</span>
                            </a>
                        </li>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://csslayout.io"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="CSS Layout - 一个用CSS制作的流行布局和模式的集合"
                            >
                                <div className='font-semibold'>CSS Layout</div>
                                <span className='text-gray-600'>一个用CSS制作的流行布局和模式的集合</span>
                            </a>
                        </li>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://fakenumbers.io"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="Fake Numbers - 一个用来模拟一些数值的JavaScript库"
                            >
                                <div className='font-semibold'>Fake Numbers</div>
                                <span className='text-gray-600'>一个用来模拟一些数值的JavaScript库</span>
                            </a>
                        </li>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://formvalidation.io"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="FormValidation - JavaScript的最佳验证库"
                            >
                                <div className='font-semibold'>Form Validation</div>
                                <span className='text-gray-600'>JavaScript的最佳验证库</span>
                            </a>
                        </li>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://www.htmldom.cn"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="HTML DOM - 使用原生 JavaScript 管理常见的 HTML DOM 操作"
                            >
                                <div className='font-semibold'>HTML DOM</div>
                                <span className='text-gray-600'>使用原生 JavaScript 管理常见的 HTML DOM 操作</span>
                            </a>
                        </li>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://react-pdf-viewer.dev"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="React PDF Viewer - 一个使用 React 制作的 PDF 查看器"
                            >
                                <div className='font-semibold'>React PDF Viewer</div>
                                <span className='text-gray-600'>一个使用 React 制作的 PDF 查看器</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='mt-6'>
                    <h3 className='text-xl sm:text-2xl font-semibold mb-2'>订阅我 <span className='font-light text-gray-600 ml-2'>我喜欢构建项目!</span></h3>
                    <ul className='flex'>
                        <li className='flex-1'>
                            <a
                                href="https://twitter.com/nghuuphuoc"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                            >
                                <div className='font-semibold'>Twitter</div>
                                <span className='text-gray-600'>@nghuuphuoc</span>
                            </a>
                        </li>
                        <li className='flex-1'>
                            <a
                                href="https://dev.to/phuocng"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                            >
                                <div className='font-semibold'>dev.to</div>
                                <span className='text-gray-600'>@phuocng</span>
                            </a>
                        </li>
                        <li className='flex-1'>
                            <a
                                href="https://github.com/phuoc-ng"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                            >
                                <div className='font-semibold'>GitHub</div>
                                <span className='text-gray-600'>@phuoc-ng</span>
                            </a>
                        </li>
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
