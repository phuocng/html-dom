import loadable, { LoadableComponent } from '@loadable/component';
import React from 'react';

import Spinner from './Spinner';

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
    fallback: <Spinner />,
});

export default PostLoader;
