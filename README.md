## postcss-round-subpixels [![npm version](https://badge.fury.io/js/postcss-round-subpixels.svg)](http://badge.fury.io/js/postcss-round-subpixels)

[PostCSS](https://github.com/postcss/postcss) plugin that rounds sub-pixel (eg: `12.87378378364px`) values to the nearest full pixel.

### Why?

If you use maths in your preprocessor, sometimes the output CSS is ugly like `12.87378378364px`. This is an issue because browsers are [very inconsistent](http://cruft.io/posts/percentage-calculations-in-ie/) in how they deal with sub-pixel values. Some round up, some round down, some round sideways - who even knows.

Also useful for general cleanup/consistency in your stylesheets, because `12.87378378364px` is not cute, and those extra bytes aren't really going to matter in how browsers render your styles.

Ignores all non-pixel values such as percent.

### Sample

```css
.down {
  height: 123.456px;
  width:  321.123px;
}
.up {
  height: 987.654px;
  width:  1234.567px;
}
.dont-touch {
  height: 12.345rem;
  width:  98.7654%;
}
```

```css
.down {
  height: 123px;
  width:  321px;
}
.up {
  height: 988px;
  width:  1235px;
}
.dont-touch {
  height: 12.345rem;
  width:  98.7654%;
}
```

### Install

```
npm i --save-dev postcss postcss-round-subpixels
```

### Usage

```js
postcss([
  require('postcss-round-subpixels')
])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.
