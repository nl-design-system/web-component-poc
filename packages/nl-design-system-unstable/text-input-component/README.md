<!-- \*Status: **In development\*** -->

# Text input

## UX guidelines

### Introduction

Text input fields allow users to enter text in a form or search field.

See form design patterns for additional guidance on creating forms.

### Variations

### Alternatives and related components

- Search query input
- Password field
- URL field
- E-mail address input
- Phone number input
- Number input
- Textarea, for entry of multiple lines of text
- Date and time input, specific input for dates and time (calendar)

### Anatomy

- Text label associated with input field
- Mandatory or optional indication
- Clearly framed input field
- Optional placeholder text
- Optional icon
- Optional helper text. The helper text area can double as interactive feedback.

#### Design tokens

- `form-label-font-family` // Label text font-family
- `form-label-font-size` // Label text font size
- `form-label-font-weight` // Label text font weight
- `form-label-line-height` // Label text line-height
- `form-label-color` // Label text foreground color
- `form-indicator-font-family` // Optional/required indicator font-family
- `form-indicator-font-size` // Optional/required indicator font size
- `form-indicator-font-weight`// Optional/required indicator font weight
- `form-indicator-line-height` // Optional/required indicator line-height
- `form-indicator-color`// Optional/required indicator foreground color
- `form-input-border-radius` // Text field border radius
- `form-input-border-width` // Text field border width
- `form-input-border-color-static` // Text field default border color
- `form-input-border-color-focus` // Text field focus border color
- `form-input-border-color-hover` // Text field hover border color
- `form-placeholder-text-font-family` // Placeholder text font-family
- `form-placeholder-text-font-size` // Placeholder text font size
- `form-placeholder-text-font-weight` // Placeholder text font weight
- `form-placeholder-text-line-height` // Placeholder text line-height
- `form-placeholder-text-color` // Placeholder text foreground color
- `form-helper-text-font-family` // Helper text font-family
- `form-helper-text-font-size` // Helper text font size
- `form-helper-text-font-weight` // Helper text font weight
- `form-helper-text-line-height` // Helper text line-height
- `form-helper-text-color` // Helper text foreground color
- `form-helper-text-color` // Helper text foreground color
- `form-helper-text-icon` // Helper text leading icon

### Interactive states

#### Default

The normal state of a text input element.

#### Focus

The focused state of a text input element. The element is ready to accept input from the user.

#### Hover

The hover (mouse-over) state of a text input element.

#### Disabled/read-only

A disabled text input does not accept input from a user.

### Design properties

#### Typography

### Accessibility

A text input field should have a corresponding `label` element.

Place validation messages in proximity to input fields. Align messages with the input fields so people using screen magnifiers can read them. Associate messages with the field using `aria-describedby`.

Use the `aria-invalid` on invalid fields and required fields with no input.

### Content guidelines

### Best practices

#### Do

- Associate a clear and consise label with each text input

#### Don't

- Don’t use the text input component when you expect users to input more than one line of text, for multi-line input use the textarea component

### References

### History

#### 0.1 (14-12-2020)

- First documentation draft
