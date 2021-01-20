module.exports = function (eleventyConfig) {
    return {
        templateFormats: [
            'md',
            'njk',
            'html',
            'liquid'
        ],
        dir: {
            input: '.',
            includes: '_includes',
            data: '_data',
            output: '_site'
        },
    };
};
