<!-- \*Status: **In development\*** -->

# Collapse

## UX guidelines

### Introduction

A collapse/expand component can save space by hiding secundary information.

A collapse component is closed by default. By clicking on the title heading the information panel will be expanded. Subsequent clicking on the title heading collapses the information panel.

### Variations

#### Standard open

This variant displays the secondary information by default, the information panel is expanded.

#### Icon variations

Icons ensure that the component clearly displays its current state. The most conventional way to demonstrate this is with a chevron (arrow) pointing down when the information panel is closed to indicate that the component can expand downward. In its open state the chevron is reversed and points upwards. Alternatively a plus icon can indicate the closed state, with a minus icon indicating the open state and the ability to close the information panel.

### Alternatives and related components

- Tabs
- Accordeon

### Anatomy

- Heading with icon (icon changes in response to open/closed state)
- Optional background color
- Container with padding for secondary information
- Optional animation to indicate change in open/closed state

#### Design tokens

- `collapse-icon-toggle-closed` // Closed state icon
- `collapse-icon-toggle-open` // Opened state icon
- `collapse-heading-font-family` // Heading font-family
- `collapse-heading-font-size` // Heading font size
- `collapse-heading-font-weight` // Heading font weight
- `collapse-heading-color` // Heading foreground color
- `collapse-heading-background` // Heading background color
- `collapse-panel-background` // Expanded panel background color
- `collapse-panel-padding` // Expanded panel padding

### Interactive states

#### Focus

#### Hover

#### Active

### Design properties

#### Positioning

#### Typography

### Accessibility

If the collapse component contains text, make sure that it can be annouced by a screen reader. This can be done by adding the [attribute aria-live="polite"](https://www.w3.org/TR/wai-aria/#aria-live). Adding [the aria-expanded attribute](https://www.w3.org/TR/wai-aria/#aria-expanded) allows a screen reader to read the current status (open or closed). Opening and closing the collapse component should be possible with a keyboard (space bar, enter key). The tab order should be logical.

### Content guidelines

The collapse title should be descriptive of the secondary information.

### Best practices

#### Do

- Fast layout shifts can cause confusion and discomfort, try adding a subtle transition for opening and closing the secondary content.
- Use the collapse component to make long text passages with secondary content clear and understandable.

#### Don't

- Don’t hide essential information or notifications in a collapse component.
- For long secondary text, consider providing a link to another page with extended content.
- Don’t place complex information such as tables in the secondary information panel.
- Do not place forms in a collapse component.

### References

### History

#### 0.1 (14-12-2020)

- First documentation draft
