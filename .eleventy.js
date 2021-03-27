const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
 
  eleventyConfig.addWatchTarget('./_tmp/index.css')
 
  eleventyConfig.addPassthroughCopy({ './_tmp/index.css': './index.css' })
  eleventyConfig.addPassthroughCopy({ './node_modules/alpinejs/dist/alpine.js': './js/alpine.js' })
 
  eleventyConfig.addShortcode('version', function () {
    return now
  })
};
