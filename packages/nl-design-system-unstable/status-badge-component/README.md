# Status badge

*Status: **In development***

## Introduction

A status badge draws attention and alerts a user to system states. The information in a status badge is short, concise and clearly scannable.

## Variants

- Success
- Warning
- Error

## Alternatives and related components

- Status light
- Text badge

## Anatomy

- Container with padding
- Standard right and bottom-margin
- Text
- Optional icon

## Design tokens
- --nl-status-badge-border-radius // Border radius
- --nl-status-badge-text-transform // Uppercase or title case
- --nl-status-badge-padding-block // Top and bottom padding
- --nl-status-badge-padding-inline // Left and right padding
- --nl-status-badge-font-family // Typeface
- --nl-status-badge-font-weight // Text weight
- --nl-status-badge-font-size // Text size
- --nl-status-badge-success-background-color // Background color of success variant
- --nl-status-badge-success-color // Text color of success variant
- --nl-status-badge-warning-background-color // Background color of warning variant
- --nl-status-badge-warning-color // Text color of warning variant
- --nl-status-badge-error-background-color // Background color of error variant
- --nl-status-badge-error-color // Text color of error variant

## Design properties

### Positioning and placement

Only a single status badge can be shown per state. The status badge should be placed there where the context makes sense. For a system-wide status this would mean that the status should be shown on a high level in the UI.

### Typography

A status may be set in all-caps.

### Color

The variants share their color semantics with the colors for success, warning, and error feedback.

## Accessibility

- Make sure there is enough contrast between the fore- and background colors.
- The text of the status badge should be self-explanatory thus eliminating the need for additional texture or iconography to indicate variations in status for colorblind users.
- Status text and subsequent changes to the status–should they occur–should be announced by screen reading software in a way that it makes sense in context.

## Content guidelines

- Try to minimize text inside a badge to a single word. In extreme cases up to a maximum of three words should be used.

## Best practices

### Dos

### Don'ts

- To avoid confusion with buttons it is advisable to not use colors also in use for buttons.
- Avoid using status badges in running text.

## References

## History

### 0.1 (08-11-2020)

- First documentation draft