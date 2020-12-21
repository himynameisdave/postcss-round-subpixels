const fs = require('fs');
const { promisify } = require('util');
const test = require('tape');
const postcss = require('postcss');
const plugin = require('../index');

const readFile = promisify(fs.readFile);
const filename = name => `test/${name}.css`;

//  thanks to this test written for the postcss-rebeccapurple plugin:
//  https://github.com/postcss/postcss-color-rebeccapurple/blob/master/test/index.js
const compareFixtures = async ( t, name, msg, opts = {}, postcssOpts = {} ) => {
  const input = await readFile(filename("fixtures/" + name), 'utf8');
  const actual = await postcss([
    plugin(opts)
  ]).process(input, { from: undefined }).css;
  const expected = await readFile(filename("fixtures/" + name + ".expected"), 'utf8');
  t.equal(actual, expected, msg)
};

test( "basic", async function(t) {
  compareFixtures(t, "round-subpixels", "should round the sub-pixel values");
  return t.end();
});

test( "multi", async function(t) {
  compareFixtures(t, "round-multi-subpixels", "should round the sub-pixel values if there are more than one per declaration.");
  return t.end();
});

test( "multi", async function(t) {
  compareFixtures(t, "round-subpixels-in-function", "should round the sub-pixel values inside functions.");
  return t.end();
});
