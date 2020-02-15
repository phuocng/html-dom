module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "src/site",
            includes: "_includes",
            output: "dist",
        },
        templateFormats: ["md", "njk"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
