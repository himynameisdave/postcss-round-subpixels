## postcss-round-subpixels

[PostCSS](https://github.com/postcss/postcss) plugin that rounds sub-pixel (eg: `10.25px`) values to the nearest full pixel.

### Why?

Useful because some browsers do not render sub-pixel values, and it's not consistent which browsers round them up and which ones round them down.

Also useful for general cleanup/consistency in your stylesheets.

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
npm i --save-dev postcss-round-subpixels
```

### Usage

```js
postcss([ require('postcss-round-subpixels') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.
