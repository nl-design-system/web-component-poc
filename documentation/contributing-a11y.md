<!--
@license EUPL-1.2
Copyright (c) 2021 Robbert Broersma
-->

# Contribution Guidelines for accessibility

## Consider accessibility in every step of the process

Before the work begins:

- allocate time and budget to deliver and test for accessibility
- include accessibility requirements in your Definition of Done

During design phase:

- consider minimum font size when defining a font size scale for typography
- do not use font sizes outside the font size scale
- provide a color pallete where every background color has a contrasting foreround color (for text and icons)
- provide designs for the various states of components, ensure the states can be distinguished from each other with varying levels of eyesight and color perception.

During refinement and planning of development work:

- Consider the guidelines from the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#aria_ex), and see if documentation regarding ARIA-attributes and keyboard shortcuts exist for your type of widget. Add those to your development checklist.

During development:

- be mindful of accessibility warnings in Storybook
- install browser plugins to test accessibility when integrating components in your project

During testing:

- test while using just keyboard, and no mouse or touch
- test while using a screen reader (with captions instead of voice synthesizer)
- test using visual perception simulation tools for blurry vision and color blindness

During test automation:

- ...tips welcome!

When your project is in beta:

- consider testing your product with users with diverse abilities

For release candidates:

- request an accessibility audit
- report back any issues related to design system components and patterns to the backlog
- fix reported bugs before going to production

For production:

- offer a way to report accessibility issues
