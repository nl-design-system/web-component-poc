# Badge

*Status: **In development***

## Introduction

A badge draws attention and alerts a user to changes, system states or new content. It can also serve as a (category) label. The information in a badge is short, concise and clearly scannable.
A badge can stand alone, but can also be contextually added to another element.

## Variants

### Counter badge

A counter badge is used to display numbers. Numbers can haven an optional minus or plus sign.

A long number can be truncated with an added plus sign, for example 999+. Make sure that the full information is available to everyone, including people who rely on screen readers.

### Dot indicator

A dot indicator is a badge without content. The context of a dot indicator is defined by its parent element.

### Text badge

A text badge can be used to signify a status or category.

### Status light

A status light is used to display a status. A status light badge should have a descriptive text label.

## Alternatives and related components

## Anatomy

- Container with padding
- Standard right and bottommargin
- Text (except for the Dot badge)
- Text label (for the status light)
- Optional icon

## Design tokens

- badge-corner-radius // Border radius
- badge-padding-inline // Left and right padding
- badge-padding-block // Top and bottom padding
- badge-background-color // Background color
- badge-foreground-color // Badge text foreground color
- badge-font-family // Badge text font-family
- badge-font-size // Badge text font size
- badge-font-weight // Badge text font weight

### Counter badge

### Dot indicator

### Text badge

- badge-text-transform // Sentence case or uppercase

### Status light success

- feedback-fill-safe-background-color // Success notification background color
- feedback-fill-safe-color // Success notification foreground (icon) color

### Status light warning

- feedback-fill-warning-background-color // Warning notification background color
- feedback-fill-warning-color // Warning notification foreground (icon) color

### Status light error

- feedback-fill-danger-background-color // Error notification background color
- feedback-fill-danger-color // Error notification foreground (icon) color

## Interactive states

If a badge is interactive, for instance when it is being used as category navigation, make sure that all interactive states are properly designed.

### Focus

### Hover

### Active

## Design properties

### Positioning

In case multiple badges are placed next or above each other make sure there is enough spacing between each badge.

### Typography

If a badge displays a status, text can be set in all-caps.

### Inheritance of text size

A badge can inherit the text-size of its parent element, for example when a badge is used inside a heading.

## Examples

## Accessibility

Make sure there is enough contrast between the fore- and background colors.

Do not rely on color alone to indicate a status, make sure people suffering from forms of color blindness are able to see a difference in status by adding texture. Use for instance a filled versus an outlined badge to indicate differences.

When a badge indicates an update

In case a badge displays an update, make sure that people relying on screen readers are made aware of such updates as well.

## Content guidelines

Try to minimize text inside a badge to a single word. In extreme cases up to a maximum of three words should be used.

## Best practices

### Dos

Try to minimize the amount of badges to avoid mental overload for users.

Place multiple badges sharing a relationship inside a `<ul>` element.

### Don'ts

To avoid confusion with buttons it is advisable to not use colors also in use for buttons.

Avoid using a badge in running text.

## References

## Guidelines checklist

### Layout

The component is flexible and scales in a responsive layout.

### Interactive states

When a component is interactive, make sure that all interactive states are properly designed (focus, hover, active, disabled).

### Feedback states

When a component is used to provide feedback, make sure that all relevant feedback states are properly designed (information, success, warning, error).

### Content

Text should be readable and understandable. Content needs to be accessible to and understandable by screen reader software.

### Variants

When a component has multiple variant (differences in for example size or visual style) all of these variant need to be properly designed. When multiple colorschemes such as dark or high contrast modes are provided, the component needs to gather for all these different modes.

### Usage guidelines

Component documentation should be understandable and clear enough to design and implement a component. Where possible provide ‘dos and don'ts’.

### Accessibility

A component should be accessible for everyone. Contrast levels should meet WCAG2.1 [successcriterium 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum) and [1.4.11](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) for textual and non-textual interface elements respectively.

Relevant content should be made available to screen reading software.

All interaction should be [possible by keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard-accessible).

### Development

Components should be developed with correct and semantic markup.

## History

### 0.3 (07-12-2020)
- Translation of Dutch documentation to English

### 0.2 (30-11-2020)

- Addition of design tokens

### 0.1 (12-11-2020)

- First documentation draft