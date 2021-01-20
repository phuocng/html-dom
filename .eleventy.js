const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginSyntaxHighlight);

    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('dist');

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
