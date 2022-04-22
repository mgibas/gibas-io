const kebabCase = require('lodash.kebabcase')
const svgContents = require('eleventy-plugin-svg-contents')
const now = String(Date.now())

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(svgContents)
  eleventyConfig.addShortcode('version', () => now)
  eleventyConfig.addFilter('kebabCase', (v) => kebabCase(v))

  return {
    dir: { input: 'src' },
    htmlTemplateEngine: 'njk',
  }
}
