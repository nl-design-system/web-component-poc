<!--
@license EUPL-1.2
Copyright (c) 2021 Robbert Broersma
-->

# Definition of Done for Components

## Well-defined scope

Does your component have many different variants and options? Consider if your component could be split up in separate components for separate use cases.

Two components that look the same, might not necessarily have the same behavior or usage recommendations. Maybe they just share a CSS class name to make them look the same.

## Anatomy and terminology

The naming of the component and all aspects of its API have been aligned with existing web standards, where possible. This means checking all of the following:
its parts, states and events have been aligned with existing web standards.

Consistency in code, documentation and design kit.

## API

- semantic versioning is applied to:
  - existence CSS class names
  - existence of Custom Element ::part()s
  - existence of API methods
  - existence of API properties
  - (TypeScript) types of API properties, arguments and return values
  - CSS variables
- every interactive state has a declarative API (such ass class name or attribute) to simulate the styling
- appropriate design tokens are used for styling
  - colors still look good with different color schemes, such as light mode and dark mode

## States

- Are all states documented separately from the code and the design implementation?
- Are the terms used for all states aligned with similar states from other components, and with states available in HTML, CSS or ARIA?
- Are all states accessible using built-in HTML semantics or ARIA attributes?
- Are all states stylable using a documented BEM class name?
- Are all states targetable using CSS selectors in the case of Custom Elements? For example using pseudo selectors or attribute selectors or class names: input:checked, your-input[checked] or your-input.your-input--checked.
- Every state can be rendered without interaction using CSS/HTML

## Test automation

- Keyboard control is tested

## Content Design

Components that contain text should have example content of various sizes to test with. When developing for an intenrational audience, the example should be provided in multiple scripts (Arabic, Cyrillic, Latin, Simplified Chinese) and languages (Dutch, English). These will help detect issues with text direction, text overflow, alignment and various component sizes.

## Visual Design

- Implementation uses the correct design tokens
- Optional: works in dark mode
