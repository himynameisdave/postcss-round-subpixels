var postcss = require('postcss');

module.exports = postcss.plugin('postcss-round-subpixels', function (opts) {


    return function (css) {
      css.walkDecls(function(decl){
        //  any number of Numbers, a decimal, then 'px'
        if( decl.value.match(/\d*?\.\d*?px/g) )
          // those maths make it into a rounded Number,
          // then we make it a string again by adding 'px'
          decl.value = Math.round(parseFloat(decl.value)) + "px";
      });
    };
});
