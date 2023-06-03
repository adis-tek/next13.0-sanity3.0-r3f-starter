# next13.0-sanity3.0-r3f-starter

Migrated from NextJS 12.0 to 13.0. Added the new Sanity 3.0 CMS. Also incorporated some animation libraries mainly from the same developer behind R3F (spring and use-gesture).
[next(12.0)-r3f-starter](https://github.com/whoisryosuke/r3f-next-starter)
The above was originally based on this below.
[create-r3f-app](https://github.com/utsuboco/create-r3f-app).

## Features

- Easily mix DOM and 3D Canvas
- Fragment and Vertex Shaders (with syntax highlighting)
- [React Spring](https://github.com/pmndrs/react-spring) for animation
- [Use-Gesture](https://github.com/pmndrs/use-gesture) interactive animations
- [Leva](https://github.com/pmndrs/leva) panel for debugging
- [R3F A11y](https://github.com/pmndrs/react-three-a11y)
- [Zustand](https://github.com/pmndrs/zustand) store
- [Sanity](https://github.com/sanity-io/sanity) CMS

- Relative paths (`@/components/`)
- Offline mode
- Bundle Analyzer
- ESLint and Prettier
- Typescript

### DOM vs R3F

ATTENTION: At the moment you'll need to manullay wrap all R3F components in a <Canvas></Canvas> set of tags. Further development will be needed for automatic wrapping of children in those tags.

Each page should export `<DOM />` and `<R3f />` components. DOM first, then R3F second. The components can be named anything, even be blank (like no DOM elements).

```tsx
// newPage.tsx

// DOM elements here
const DOM = () => {
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
};

// Canvas/R3F components here
const R3F = () => {
  return (
    <>
      <YourR3FComponent />
      <ThreeDBox />
      <Sphere />
    </>
  );
};

export default function Page() {
  return (
    <>
      <DOM />
      <R3F r3f />
    </>
  );
}
```

### Where is Canvas? (Deprecated)

The `<Canvas>` is located in `src\components\layout\canvas.jsx`. You can add any components here you want to share across all scenes (like a similar camera, lighting, etc).

If you need to have a **separate canvas per page** for any reason, you can just remove it from `_app.js` and return the R3F child:

```tsx
// src\pages\_app.tsx
const AppLayout = ({ children }) => {
  const newChildren = React.Children.map(children, (child, index) =>
    // 👉 Remove the <Canvas> here (which I already did in this example)
    index % 2 === 0 ? <Dom>{child}</Dom> : <>{child}</>
  );

  return newChildren;
};
```

### Importing R3F components

The rule is: you have to dynamically import any React component that uses ThreeJS/R3F components if it's the **top-level component**. Once you dynamically import that React component -- it can contain other ThreeJS/R3F component without dynamic imports.

See the `/pages/` and `/components/canvas/` for examples.

### Importing media (audio, video, etc)

1. Place media in `/public/` folder.
1. Use a relative URL to your media (`yoursite.com/video.mp4` if it's in `public/video.mp4`).

## Snippets

This project features VSCode snippets for quickly creating R3F components and patterns. You can find them and add more in `.vscode\r3f.code-snippets`.

- `r3fc` - Create R3F mesh
- `r3fg` - Create R3F group
- `tsr3fc` - Create R3F mesh (with Typescript)
- `tsr3fg` - Create R3F group (with Typescript)

## Tips

### Syntax Highlighting for Shaders

When you browse the shaders (`.frag` and `.vert`) in VSCode, you should see a popup to install a plugin for highlighting.

There's a few, but we recommend [Shader languages support for VS Code](https://marketplace.visualstudio.com/items?itemName=slevesque.shader).

## Typescript Guide

Check out [our guide on using R3F with Typescript.](./docs/typescript.md) And try using [the Typescript snippets](#snippets) for faster workflows.

## Credits

- [NextJS ThreeJS/R3F Example](https://github.com/vercel/next.js/tree/canary/examples/with-three-js)
- [create-r3f-app](https://github.com/utsuboco/create-r3f-app)
- [Poimandres](https://github.com/pmndrs/)
