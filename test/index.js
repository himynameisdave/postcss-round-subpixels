var fs       = require('fs'),
    test     = require('tape'),
    postcss  = require('postcss'),
    plugin   = require('..'),

    filename = function(name){ return "test/" + name + ".css" },
    read     = function(name){ return fs.readFileSync(name, "utf8") },

    //  thanks to this test written for the postcss-rebeccapurple plugin:
    //  https://github.com/postcss/postcss-color-rebeccapurple/blob/master/test/index.js
    compareFixtures = function( t, name, msg, opts, postcssOpts ){
      postcssOpts = postcssOpts || {}
      postcssOpts.from = filename("fixtures/" + name)
      opts = opts || {}
      var actual = postcss().use(plugin(opts)).process(read(postcssOpts.from), postcssOpts).css

      var expected = read(filename("fixtures/" + name + ".expected"))
      fs.writeFile(filename("fixtures/" + name + ".actual"), actual)
      t.equal(actual, expected, msg)

    };

    test( "basic", function(t){
      compareFixtures(t, "round-subpixels", "should round the sub-pixel values");
      t.end();
    });

    test( "multi", function(t){
      compareFixtures(t, "round-multi-subpixels", "should round the sub-pixel values if there are more than one per declaration.");
      t.end();
    });

    test( "multi", function(t){
      compareFixtures(t, "round-subpixels-in-function", "should round the sub-pixel values inside functions.");
      t.end();
    });
