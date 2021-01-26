<!-- _Status: **In development**_ -->

# Button

## UX guidelines

### Introduction

Buttons allow users to perform an action on a page. Buttons communicate actions users can take such as starting an application, saving their information or submitting a form. They should be easy to identify and find. A button must clearly show the action that the user can perform. Use shape and color to make a button visually recognizable for the user.

### Variations

- Default (primary) button
- Secondary button
- Warning button
- Button with icon

#### Default (primary) button

Use default buttons for the main action on a page.

Avoid using multiple default buttons on a single page. Having more than one main action button reduces their impact, and makes it harder for users to know what to do next.

#### Secondary button

Use secondary buttons for secondary actions on a page.

Pages with too many action buttons make it hard for users to know what to do next. Before adding lots of secondary buttons, try to simplify the page or break the content down across multiple pages.

You can use secondary buttons in combination with default buttons.

#### Warning button

Warning buttons are designed to make users think carefully before using them, such as in cases where a button is used to delete an account. They should be  used sparingly and most products should not need them.

When letting users carry out a destructive action, it’s a good idea to include an additional step which asks them to confirm it.

Do not rely on color alone to communicate the warning state as certain color blind users might not perceive the state by color alone. An additional warning icon next to the button text helps these users interpret the descructive action performed by the button more clearly.

#### Button with icon

An icon can be provided to clarify a button’s action (see Warning button). An icon shoud always be accompanied by a clear text describing the button’s action.

### States

- Default
- Hover
- Focus
- Active
- Loading
- Disabled

#### Loading state

A loading animation (spinner) can be added to indicate to users that the action being perfomed can take longer than expected. Use the loading state in combination with the disabled state so users know that they are not able to perform an action twice.

#### Disabled state

Disabled buttons generally have poor contrast and can confuse some users, so avoid them if possible.

Only use disabled buttons if research shows it makes the user interface easier to understand.

### Alternatives and related components

- Link, to navigate within a page or to another page.

### Anatomy

- Background
- Text
- Optional icon
- Optional border

### Design properties

#### Interactive states

#### Positioning

#### Typography

### Accessibility

Use the `<button>` element so buttons are properly announced to screen reader users.

Buttons should be operable by keyboard. Their focus order should be logical and the focus state should be clear.

The target area of buttons should be suficient for instance for touchscreen users and users with a motor impairement.

Prevent users from accidentally submitting information more than once. Users might click buttons twice because they:

- are used to operating systems where they have to double click items to activate them,
- are experiencing a slow connection which results in not being given feedback on an action in a timely manner,
- have a motor impairment which cause them to click the button more than once involuntarily.

### Content guidelines

Button text should describe what action it performs.

### Best practices

#### Do/Use when

- Place buttons where users expect them and are easy to find.
- Elements such as buttons that look similar should also behave and perform the same everywhere.

#### Don’t/Don’t use when

- Don’t use a button as a link, a button performs an action and is not used for navigation.
- Don’t only use an icon within a button, when i.e. a chevron is used for Previous/Next buttons, always add a clear text description.
- Avoid using ‘ghost’ buttons as they often suffer from usability and accessibility issues. They can pose legibility problems, and break away from the established convention of what a clickable button should be.
- Stop users from accidentally sending information more than once

## References
