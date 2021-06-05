<!--
@license EUPL-1.2
Copyright (c) 2021 Robbert Broersma
-->

# Contribution Guidelines for HTML

## Do not use inline styles

Do not use the `style` attribute in templates, only apply style using class names.

```html
<table style="border-collapse: collapse"></table>
```

Replace the `style` attribute with a class name:

```html
<table class="example-table example-table--reset"></table>
```

Configure the CSS in a separate file:

```css
.example-table--reset {
  border-collapse: collapse;
}
```
