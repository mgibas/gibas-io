const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
 
  eleventyConfig.addWatchTarget('./_tmp/index.css')
 
  eleventyConfig.addPassthroughCopy({ './_tmp/index.css': './index.css' })
 
  eleventyConfig.addShortcode('version', function () {
    return now
  })
};
