const now = String(Date.now())

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/alpine.js': './js/alpine.js',
  })
  eleventyConfig.addShortcode('version', () => now)

  return {
    dir: { input: 'src' },
    htmlTemplateEngine: 'njk',
  }
}
