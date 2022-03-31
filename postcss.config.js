const purgecss = require('@fullhuman/postcss-purgecss')

const aosWhitelist = ["aos-init", "aos-animate", "data-aos-delay", "data-aos-offset", "data-aos-once", "data-aos-duration", "fade-up", "fade-left"]

module.exports = {
  plugins: [
    require('autoprefixer')({ grid: 'autoplace' }),
    require('cssnano')({
      preset: ['advanced', { zindex: false, discardComments: { removeAll: true } }]
    }),
    purgecss({
      content: ['**/*.html', '**/*.vue'],
      safelist: [...aosWhitelist]
    })
  ]
};
