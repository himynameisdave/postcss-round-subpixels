const parser = require('postcss-value-parser');

//  Check if a given node is a word or not.
function isNodeWord(node) {
  return node.type === 'word';
}

//  Check if given is a pixel value.
function isPixelValue(value) {
  return value && value.unit === 'px';
}

//  Convert the subpixel value to a number and round it.
function roundSubPixelValue(value) {
  return Math.round(
    Number(value.number),
  );
}

/**
 * PostCSS Plugin for rounding sub-pixel values.
 */
const postcssRoundSubpixels = (opts = {}) => ({
  postcssPlugin: 'postcss-round-subpixels',
  Declaration: (decl) => {
    //  Use the parser to walk through each value in the declaration.
    decl.value = parser(decl.value).walk(node => {
      //  Ignore non-word decls.
      if (!isNodeWord(node)) {
        return;
      }
      const value = parser.unit(node.value);
      //  Check if the value is `px`, and if so round the number.
      if (isPixelValue(value)) {
        node.value = `${roundSubPixelValue(value)}px`;
      }
    }).toString();
  },
});

module.exports = postcssRoundSubpixels;

module.exports.postcss = true
