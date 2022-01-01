# lit-image-preview

web-image-preview component build with lit

# usage

```html
<image-modal
  visible
  showWithAnimation
  image="https://zy-blog-1301055733.cos.ap-shanghai.myqcloud.com/timing%20level%201.png"
></image-modal>
```

# props

| prop              | desc                   |
| ----------------- | ---------------------- |
| image             | img src                |
| showWithAnimation | animated image to show |
| visible           | visibility of preview  |

# browser support & polyfill

| Browser | Supports ES2019 & web components |
| ------- | -------------------------------- |
| Chrome  | >=73                             |
| Safari  | >=12.1                           |
| Firefox | >=63                             |
| Edge    | >=79                             |

To supprot legacy browser, you can replace this with a rule to explicitly include folders to compile:

```
include: [
  'node_modules/lit-image-preview',
  'node_modules/lit/**',
  'node_modules/lit-element/**',
  'node_modules/lit-html/**'
]
```

And also need to import polyfill: `@webcomponents/webcomponentsjs` and
`lit/polyfill-support.js`

```js
import "@webcomponents/webcomponentsjs";
import "lit/polyfill-support.js";

<image-modal
  visible
  showWithAnimation
  image="https://zy-blog-1301055733.cos.ap-shanghai.myqcloud.com/timing%20level%201.png"
></image-modal>;
```

For further understanding, please visit：https://lit.dev/docs/tools/requirements/
