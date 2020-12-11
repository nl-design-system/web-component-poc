# Definition of done

Before any component or documentation is considered ‘stable’ and gets a version number 1.0 assigned it has to meet certain requirements.

These requirements ensure that everything published to the stable version of the project adheres to a quality baseline.

## Component guidelines checklist

Where applicable components should meet the following criteria.

### Uniqueness

- Check to see if a component is truly unique. If there is another component that might be useful for your use case consider using that. - If changes to an existing component would mean it can be used instead of creating a new component, add a variant or make changes to the existing component.

### Reusability

- Components should be reusable. If you create a one-off, single-use component that will not be reused in your own or other projects refrain from adding it.
- Use design tokens to establish the visual design.

### Layout

- The component is flexible and scales in a responsive layout.

### Interactive states

- When a component is interactive, make sure that all interactive states are properly designed (focus, hover, active, disabled).

### Feedback states

- When a component is used to provide feedback, make sure that all relevant feedback states are properly designed (information, success, warning, error).

### Content

- Text should be readable and understandable. Content needs to be accessible to and understandable by screen reader software.

### Variations

- When a component has multiple variations (differences in for example size or visual style) all of these variations need to be properly designed.
 -When multiple color schemes such as dark or high contrast modes are provided, the component needs to gather for all these different modes.

### Usage guidelines

- Component documentation should be understandable and clear enough to design and implement a component. Where possible provide ‘dos and don'ts’.

### Accessibility

- A component should be accessible for everyone. Contrast levels should meet WCAG2.1 [success criterion 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum) and [1.4.11](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) for textual and non-textual interface elements respectively.
- Relevant content should be made available to assistive software (such as screen reader and speech software).
- All interaction should be [possible by keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard-accessible) without excluding a mouse.

### Development

- Components should be developed with correct and semantic markup.

### User research

- If user research or testing has been conducted for a certain component or feature, be sure to include any relevant conclusions in the documentation.

