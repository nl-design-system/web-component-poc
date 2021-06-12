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
