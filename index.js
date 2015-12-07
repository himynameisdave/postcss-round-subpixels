var postcss = require('postcss'),
    parser = require('postcss-value-parser');

module.exports = postcss.plugin('postcss-round-subpixels', function (opts) {
    return function (css) {
      css.walkDecls(function(decl){
        //  use the parser to walk through each individual value in the decl
        decl.value = parser(decl.value).walk( function( node ){
          //  we can totally skip things that aren't a pixel or "word" value
          if( node.type !== 'word' ){
            return;
          }
          //  any number of Numbers, a decimal, then 'px'
          if(node.value.match(/\d*?\.\d*?px/g) ){
            // those maths make it into a rounded Number,
            // then we make it a string again by adding 'px'
            node.value = Math.round(parseFloat(node.value)) + "px";
          }
        }).toString();

      });
    };
});
