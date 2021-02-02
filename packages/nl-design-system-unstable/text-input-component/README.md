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
