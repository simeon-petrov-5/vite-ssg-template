const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('autoprefixer')({ grid: 'autoplace' }),
    require('cssnano')({
      preset: ['advanced', { zindex: false, discardComments: { removeAll: true } }]
    }),
    purgecss({
      content: ['**/*.html', '**/*.vue']
    })
  ]
};
