const path = require('path');

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = withMDX({
    // `true` will transform `/about` to `/about/index.html`
    trailingSlash: false,
    pageExtensions: ['js', 'jsx', 'tsx', 'mdx'],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        return config;
    },
});
