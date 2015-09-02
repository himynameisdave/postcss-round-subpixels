## postcss-round-subpixels

[PostCSS](https://github.com/postcss/postcss) plugin that rounds sub-pixel (eg: `10.25px`) values to the nearest full pixel.

### Why?

Useful because some browsers do not render sub-pixel values, and it's not consistent which browsers round them up and which ones round them down.

Also useful for general cleanup/consistency in your stylesheets.


### Sample

...coming soon!
<!--
```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```
-->

### Usage

```js
postcss([ require('postcss-round-subpixels') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.
