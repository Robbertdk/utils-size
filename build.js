const postcss = require('postcss');
const bemLinter = require('postcss-bem-linter');
const reporter = require('postcss-reporter');

module.exports = {
  use: [
    "postcss-import",
    "postcss-calc",
    "postcss-custom-media",
    "autoprefixer",
    "postcss-reporter"
  ],
  "postcss-import": {
    transform(css) {
      return postcss([bemLinter, reporter]).process(css).css;
    }
  },
  "postcss-reporter": {
    clearMessages: true
  }
};
