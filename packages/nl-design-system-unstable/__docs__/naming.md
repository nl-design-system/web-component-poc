# Naming

_Status: **In development**_

To enable a shared language and help designers and developers work closer together, consistent naming is important. With proper naming in place both designers and developers can recognize how an element functions and what it looks like from its name, even without seeing a visual example. The purpose behind a design decision, a variation or an interactive state is immediately made clear from its naming.

Styles and components in Figma, Sketch or other design software must be provided with the correct name. The naming of elements, components, tokens, etc. must be coordinated as much as possible between design (design software) and development (front-end code variables and component naming).

Our naming concept is two-fold; for design properties, such as typographic specifications, colors, and spacing, we use design tokens. For components architecture we use the BEM naming convention.

## Design tokens

Design tokens form the basis for a shared understanding between designers and developers. They are single design properties that can be referenced in in both visual design and code. If components are reusable objects, think of design tokens as the visual attributes you can apply to those objects. On a high level, tokens can easily achieve visual consistency and be reused throughout different components. On a lower level, it is a way to quickly make variations on a component by giving a different interpretation to the configuration.

In code, design tokens are represented as a key/value pair, where the key is the token name and the value its attribute/property. In design software tokens are most often available as text, color, or layer styles.

A major advantage of design tokens is how it helps developers and designers communicate: you always know that you are talking about the same thing. To this extent naming in both design files and code should match. The name of for instance a color in Figma or Sketch must match the name of the CSS variable. This also means that both designers and developers are not allowed to pick visual properties that have not been ‘tokenised’; since these properties are not part of the visual/brand language. For instance, hex color values in code or colors not available in color styles in tools such as Figma or Sketch are not permitted, only tokens should be referenced. A color should be abstracted to a design token properly named to indicate its purpose. This ensures that we have a consistent, scalable, and maintainable visual system.

Design tokens can be divided into three tiers; **option tokens**, **decision tokens**, and **component-specific tokens**.

Token names should stay as close as possible to CSS naming with some exceptions such as ‘background’ and ‘foreground color’ instead of simply ‘color’, which might cause confusion. Names should also be ‘localisation-agnostic’; for instance to specify direction, instead of left or right use start or end.

### Tier one: Option tokens (or global tokens)

Design option tokens define the raw values of design properties such as a font size, font weight, foreground color, spacing, or a border radius. This is your brand or product’s visual palette. Within a product you want to limit the number and use only ‘approved’ colors, font sizes, etc.

If an additional color is needed it can be added after consultation with a designer to make sure that the color is consistent between design and implementation.

All available values in your visual language should be represented as option tokens.

An option tokens could for example be `--nl-color-red-500` with its value being `#ff5000`.

`--nl-color-red-500: #ff5000`

Design tokens can be shared throughout similar components. You might for example want to use the same typeface for each heading level (`H1`–`H6`) or use the same color scheme for different data visualisations.

### Tier two: Decision tokens

Design decision tokens map option tokens to semantic meaning so they can be applied contextually. No ‘raw’ values such as color hex values are allowed in decision tokens. A decision token describes how and when to use it.

Namimg of decision tokens should be as semantically as possible; name them to make their intended use and context clear. A name should describe the meaning of the element or property and _not_ its visual representation. The visual manifestation of a design feature is subject to change; the meaning and function, however, is not. Consider, for example, a brand color that changes from red to blue after redeveloping a brand.

For example, instead of using “red” as a color name to indicate an error state, we might use “color-error-foreground“. This refers to the meaning of the color in the interface and prevents the color from being improperly reused elsewhere.

A decision token could for example be `--nl-color-error-foreground` with its value referencing the option token `--nl-color-red-500`.

`--nl-color-error-foreground: --nl-color-red-500`

With a color being referenced in the code for e.g. an invalid form element:

`input:invalid {
    border: 2px solid $nl-color-error-foreground;
}`

### Tier three: Component-specific tokens

Component-specific tokens are applied to specific components. They can be used to overwrtite styling on a component-level while still inheriting default styling as a fallback option.

E.g. for the Backlink component this boils down to these (decision) design tokens.

* `--nl-backlink-color`
* `--nl-icon-backlink`
* `--nl-backlink-icon-size`

Where `--nl-backlink-color` can by default inherit `--nl-link-color`. The benefit of this approach is that you are able to visually style components more granularly when needed while still retaining a meaningful default.

### Token anatomy

A token is be made up of different _levels_.

Example of levels:

`namespace-categorie-concept-property-variant`

And how they make up a token for an error feedback background:

`nl-color-feedback-background-error`

_Categories_ can for instance be color, typography, spacing, and sizing.

Categories can be paired with _properties_. For _color_ this can for instance include foregound, background, and border. For _typography_ this can be size, weight, line-height, etc.

_Variants_ can for instance be primary, secondary, and tertiary but also feedback states such as information, succes, warning, and error, or interactive states such as default, hover, focus, and disabled.

Choose descriptive over short names in order for a token’s intention to be evident.

### Design token configuration

Tokens can have an interpretation within one product that differs per situation. Brand colors can for instance be different in a dark mode theme or the typographic scale can differ for mobile and desktop screens. Within a hero banner component, you can reverse the color scheme to draw attention: light text on a colored background.

CSS variables is a new technique [well supported](https://caniuse.com/css-variables) by ‘evergreen browsers’. They serve as an ideal way to set situation-dependent tokens, for instance for a dark mode theme:

:root {
  --example-document-background-color: white;
  --example-document-color: black;
}

@media (prefers-color-scheme: dark) {
  :root {
    --example-document-background-color: black;
    --example-document-color: white;
  }
}

### Design token mapping

Design tokens can be mapped. A heading foreground color can for instance reference the overall text foreground color resulting in something such as `--heading-1-color: --default-text-color`. This makes it possible to both create a visual theme with a lot of visual distinction on a granular level or a simpler, more minimal visual theme.

### Design tokens for the NL Design System

The NL Design System has a ‘white-label’ design language by default. This enables each organization to implement and configure their own visual style. Organizations should keep track of the design tokens for their own brand, and should link these to the general design tokens of the NL Design System.

## BEM

BEM - Block Element Modifier - is a convention that makes the naming of components and their building blocks readable and understandable. By providing components with a clear architecture and recognizable terms, the name of an element can be used to deduce what it is for.

### Block

A Block is a self-sufficient element that, by itself, has a clear meaning.

For example **Menu**.

### Element

Part of a Block with no meaning of its own. It gets its meaning from its parent Block.

For example **Menu item**.

### Modifier

A Modifier changes the visual manifestation or interactive behavior.

For example **menu-item--selected** or **menu-item--disabled**.

## Namespacing

For both design tokens and components using BEM we use a consistent namespace. For NL Design System’s white-label this means that all names consist of a leading `nl-`, signifying that tokens and componets use the white-label styling. For the municipality of Den Haag this could for instance be `dh-`.

## References

1. [Design good practices](https://goodpractices.design/)
1. [W3C Design Tokens Community Group](https://www.w3.org/community/design-tokens/)
1. [Tokens in Design Systems](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)
1. [Naming Tokens in Design Systems - Terms, Types, and Taxonomy to Describe Visual Style](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)
1. [Lightning Design System Design Tokens](https://www.lightningdesignsystem.com/design-tokens/) _(Salesforce pioneered the use of desing tokens)_
1. [Style Dictionary](https://amzn.github.io/style-dictionary/)
1. [Using design tokens to promote collaboration and maintainability of a design system](https://thibault.mahe.io/blog/design-tokens)
1. [Design tokens — What are they & how will they help you?](https://vea.re/blog/design-tokens-what-are-they-and-how-will-they-help-you)
1. [Design Tokens for Dummies](https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71)
1. [BEM Cheat Sheet](https://9elements.com/bem-cheat-sheet/)