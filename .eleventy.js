module.exports = function(eleventyConfig) {
    // Copy static assets
    eleventyConfig.addPassthroughCopy("css/styles.css");

    return {
        templateFormats: ["md", "njk"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
