# lit-image-preview

web-image-preview component build with lit

# install

npm i lit-image-preview

# usage

```html
<lit-image-preview
  visible
  showWithAnimation
  image="imgToPreview"
></lit-image-preview>
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

<lit-image-preview
  visible
  showWithAnimation
  image="https://zy-blog-1301055733.cos.ap-shanghai.myqcloud.com/timing%20level%201.png"
></lit-image-preview>;
```

For further understanding, please visit：https://lit.dev/docs/tools/requirements/

# event

If you want to set a event for image preview modal hidden, you need to listen custom event `lit-image-preview-mc`. Here is code demo for React usage

```js
import { useRef, useEffect } from "react"
import "lit/polyfill-support.js"
import "@webcomponents/webcomponentsjs"
import "lit-image-preview"

const ImagePreview = ({
  imgToPreview,
  onModalClick,
}: {
  imgToPreview: string
  onModalClick: () => void
}) => {
  const previewModal = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (previewModal.current) {
      previewModal.current.addEventListener(
        "lit-image-preview-mc",
        (e: CustomEvent<{ visible: boolean }>) => {
          if (e.detail.visible) onModalClick()
        },
      )
    }
  }, [onModalClick])

  return (
    <div ref={previewModal}>
      <lit-image-preview
        visible
        showWithAnimation
        image={imgToPreview}
      ></lit-image-preview>
    </div>
  )
}
```

And for fixing typescript eslint warning:

```typescript
import type ImageModal from "lit-image-preview";

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace JSX {
    // eslint-disable-next-line no-unused-vars
    interface IntrinsicElements {
      "lit-image-preview":
        | Pick<ImageModal, "image" | "showWithAnimation" | "visible">
        | HTMLElement;
    }
  }
}

const myCustomEventType: "lit-image-preview-mc" = "lit-image-preview-mc";

// "CustomEvent" comes from 'lib.dom.d.ts' (tsconfig.json)
class MyCustomEvent extends CustomEvent<MyCustomEventDetail> {
  constructor(detail: MyCustomEventDetail) {
    super(myCustomEventType, { detail });
  }
}

interface MyCustomEventDetail {
  visible: boolean;
}
declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementEventMap {
    [myCustomEventType]: MyCustomEvent;
  }
}
```
