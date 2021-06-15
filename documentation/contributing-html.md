<!--
@license EUPL-1.2
Copyright (c) 2021 Robbert Broersma
-->

# Contribution Guidelines for HTML

## Do not use inline styles

Do not use the `style` attribute in templates, only style using class names.

```html
<strong style="font-weight: normal">Hello, World!</strong>
```

Replace the `style` attribute with a class name:

```html
<strong class="example-strong example-strong--reset">Hello, World!</strong>
```

Configure the CSS in a separate file:

```css
.example-strong--reset {
  font-weight: normal;
}
```
