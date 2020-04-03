import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import PostList from '../constants/PostList';
import { unslugify } from '../helpers/slugify';
import Layout from './Layout';

class HomePage extends React.Component {
    state = {
        posts: PostList
    }

    selectLevelHandler(selected_level: string) {
        this.setState({
            posts: selected_level !== ""
                ? PostList.filter(post => { if(post.level === selected_level) { return post } })
                : PostList
        })
    }

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>HTML DOM - Common tasks of managing HTML DOM with vanilla JavaScript</title>
                    <meta name='description' content='Common tasks of managing HTML DOM with vanilla JavaScript' />
                </Helmet>
    
                <h1 className='font-bold mt-32 text-center text-2xl sm:text-4xl px-1'>how to manage HTML DOM</h1>
                <h3 className='font-light mb-1 text-2xl sm:text-3xl text-center'>
                    with <span className='bg-blue-200 p-1'>vanilla JavaScript</span> only?
                </h3>
                <h4 className='font-light mb-16 text-xl text-center italic'>for modern browsers and IE 11+</h4>
    
                <div className="mb-12 text-center">
                    <a
                        className="text-2xl bg-gray-400 px-4 py-2"
                        href="https://github.com/phuoc-ng/html-dom"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                        target="_blank"
                    >
                        GitHub
                    </a>
                </div>
    
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-3/4">
                        <label className="block text-teal-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Level :
                        </label>
                    </div>
                    <div className="md:w-1/4">
                    <select onChange={event => this.selectLevelHandler(event.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option value="">All</option>
                        <option value="Basic">Basic</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                    </div>
                </div>

                <div className='ml-auto mr-auto max-w-4xl'>
                    <ul>
                    {
                        this.state.posts.map((post, index) => {
                            const idx = (index < 9) ? `0${index + 1}` : `${index + 1}`;
                            return (
                                <li key={post.slug} className='mb-4'>
                                    <Link
                                        to={`/${post.slug}`}
                                        className='bg-gray-200 px-2 py-1 flex items-center justify-between'
                                    >
                                        <span className='mr-2'>{idx} — {unslugify(post.slug)}</span>
                                        <span
                                            className={`
                                                p-1 text-sm text-white rounded
                                                ${post.level === 'Basic' ? 'bg-gray-600' : ''}
                                                ${post.level === 'Intermediate' ? 'bg-blue-600' : ''}
                                                ${post.level === 'Advanced' ? 'bg-red-600' : ''}
                                            `}
                                        >
                                            {post.level.toLowerCase()}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })
                    }
                    </ul>
                </div>
            </Layout>
        );
    }
};

export default HomePage;
