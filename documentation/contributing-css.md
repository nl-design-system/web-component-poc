# Contribution Guidelines for CSS

## Install plugins for color coding of CSS and SCSS

- Sublime: [`SCSS`](https://github.com/MarioRicalde/SCSS.tmbundle)

## Use Stylelint for checking formatting rules

Stylelint can run in your code editor while working on CSS code, by installing an extension:

- VS Code: [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- Sublime: [`SublimeLinter-stylelint`](https://packagecontrol.io/packages/SublimeLinter-stylelint)

Stylelint will run as Git pre-commit hook, so it will warn you if you commit code that needs changes still. When that happens you can fix the code, stage and commit the file to Git again.

Stylelint will run in GitHub as PR check, so it will prevent your code from merging.

## Import order

Order imports alphabetically.

Adding all new imports at the end of the list is a method that will result in a merge conflict when two PRs add a new import at the same time.

Don't:

```scss
@import "component-y";
@import "component-b";
@import "component-p";
@import "component-new";
```

Do:

```scss
@import "component-b";
@import "component-new";
@import "component-p";
@import "component-y";
```

## Define `margin` and `padding` in the modern way

The layout should work equally well in pages with right-to-left text direction for Arabic script, as in pages with left-to-right text for typical European languages and Latin script. This means using `-left` and `-right` is best avoided in many cases, because the values would need to be inversed for the other text direction.

CSS now offers alternatives that work for all text directions, and are inversed automatically depending on the context. The new method also makes `-top` and `-bottom` obsolete, because the new CSS properties are also agnostic for the [vertical text direction in East Asian scripts](https://en.wikipedia.org/wiki/Horizontal_and_vertical_writing_in_East_Asian_scripts).

For pages with Latin scripts you should use the following alternatives:

- `margin` shorthand should not be used
- `margin-top` becomes `margin-block-start`
- `margin-right` becomes `margin-inline-end`
- `margin-bottom` becomes `margin-block-end`
- `margin-left` becomes `margin-inline-start`
- `padding` shorthand should not be used
- `padding-top` becomes `padding-block-start`
- `padding-right` becomes `padding-inline-end`
- `padding-bottom` becomes `padding-block-end`
- `padding-left` becomes `padding-inline-start`

Do not use the the following new shorthands yet, since they don't have great browser support at the moment:

- `margin-block` ([Can I use …?](https://caniuse.com/mdn-css_properties_margin-block))
- `margin-inline` ([Can I use …?](https://caniuse.com/mdn-css_properties_margin-inline))
- `padding-block` ([Can I use …?](https://caniuse.com/mdn-css_properties_padding-block))
- `padding-inline` ([Can I use …?](https://caniuse.com/mdn-css_properties_padding-inline))

The following article may be of interest, if you want to know more about these new CSS properties:

- [Digging Into CSS Logical Properties, by Ahmad Shadeed](https://ishadeed.com/article/css-logical-properties/)

## Use BEM class names

- [BEM — Block Element Modifier](http://getbem.com)

## Separately define element and attribute selectors

If you need to style HTML elements without class names, define those selectors in a separate file. For example:

`bem.css`

```css
.nl-link {
  color: var(--nl-link-color);
}

.nl-link--focus {
  color: var(--nl-link-focus-color);
}
```

`html.scss`:

```scss
@import "./bem";

a {
  @extend .nl-link;
}

a:focus {
  @extend .nl-link--focus;
}
```

Having a file with only BEM class name selectors will help making your layout reusable in other components and other component libraries.

## Separately define the CSS variable values from the layout

Do not include the custom properties that define your theme in the same file that defines the layout of a component:

`components/link.css`:

```css
.nl-link {
  color: var(--nl-link-color);
}
```

`theme/link.css`:

```css
:root {
  --nl-link-color: cornflowerblue;
}
```

This way, others that don't use the same theme as you, can only include the `component.css` and configure their own theme.

## Use a prefix for your project

Start all the names in your code with the same prefix that identifies your project. When others want to reuse your code, they will not have any issues with their and your code using identical names -- they will never clash because of the prefix.

Prefixes make names bit longer, but give you a great advantage for exchanging code between projects and collaborating with other teams.

For example, a `xyz` prefix for class names:

```css
.xyz-link {
  color: blue;
}
```

For example, a `xyz` prefix for CSS variables:

```css
a:link {
  color: var(--xyz-link-color);
}
```

Prefixes can be long or short, but you should be careful to pick something that is likely to be unique amongst the project which you want to collaborate.

## Safely reuse prefixed CSS from others

When another project already has component or a CSS variable that does exactly what you need, you don't have to create one yourself with your own prefix. You can simply reuse the CSS variable with the prefix from the original author. **It is okay to have many prefixes in one file!**

```css
.example-component {
  font-family: var(--example-component-font-family, var(--nl-document-font-family));
}
```

## Use CSS variables for themable properties

To make your component reusable for many different themes and a wide variety of visual designs, you can use CSS variables to separate your choice for the visual design from the CSS code for the component.

CSS properties that have different values for different themes should be configured with a CSS variable instead of a hardcoded value. Typical properties are related to color and typography, and often spacing too.

CSS properties that don't vary between themes, don't need a CSS variable. Variables that typically have a hardcoded value include `display`, `position`, et cetera.

Your initial version of a component does not need to provide a CSS variable for every imaginable property, it is recommended to start out with fewer properties and add new CSS variables on request.

```css
.example-icon {
  display: inline-block;
}

.example-icon,
.example-icon--medium {
  height: var(--example-icon-medium-height);
  width: var(--example-icon-medium-width);
}
```

## Name things after their purpose, not after the visual design

Do not use the visual design in the naming of class names:

```css
.example-badge--maroon {
  color: maroon;
}
```

Name the class name after the purpose instead:

```css
.example-badge--danger {
  color: maroon;
}
```

## Don't affect the layout outside your component: margin is optional

Another aspect of keeping your component CSS side-effect free is by not specifying `margin` by default.

```css
.example-paragraph {
  font-size: var(--example-paragraph-font-size);
}

.example-paragraph--distanced {
  margin-block-start: var(--example-paragraph-margin-block-start);
}
```
