import loadable, { LoadableComponent } from '@loadable/component';
import React from 'react';

import './spinner.css';

interface PostLoaderProps {
    slug: string;
}

// In order to create a link to another page that is dynamically loaded (via <Link to="...">),
// the page chunks have to be loadable by @loadable.
// We have to add a magic comment /* #__LOADABLE__ */ here
// and the following plugin to Babel's settings (.babelrc):
//  {
//      "plugins": ["@loadable/babel-plugin"],
//  }
const loadDetails = /* #__LOADABLE__ */ (props: PostLoaderProps) => import(`../posts/${props.slug}`);

const PostLoader: LoadableComponent<PostLoaderProps> = loadable(loadDetails, {
    fallback: (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <svg className="spinner" width="64px" height="64px" viewBox="0 0 48 48">
                <circle
                    cx="24"
                    cy="24"
                    fill="none"
                    r="18"
                    stroke="rgba(0, 0, 0, 0.4)"
                    strokeDasharray={Math.PI * 2 * 9}
                    strokeLinecap="round"
                    strokeWidth="2"
                />
            </svg>
        </div>
    ),
});

export default PostLoader;
