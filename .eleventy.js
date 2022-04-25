const markdownIt = require('markdown-it')
const kebabCase = require('lodash.kebabcase')
const svgContents = require('eleventy-plugin-svg-contents')
const now = String(Date.now())

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(svgContents)
  eleventyConfig.addShortcode('version', () => now)
  eleventyConfig.addFilter('kebabCase', (v) => kebabCase(v))

  const md = markdownIt({ html: true }).use(require('markdown-it-anchor'))
  eleventyConfig.setLibrary('md', md)

  return {
    dir: { input: 'src' },
    htmlTemplateEngine: 'njk',
  }
}
