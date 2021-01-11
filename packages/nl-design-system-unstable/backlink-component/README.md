<!-- _Status: **In development**_ -->

# Backlink

## UX guidelines

### Introduction

The functionality of a backlink is not the same as a browser’s back button. A back button returns a user to a previous page, while a backlink navigates through the predefined site structure. A backlink displays a single destination; if you want to display how a current page relates within the overall site structure use the breadcrumbs component.

#### Alternatives and related components

- Navigation
- Breadcrumbs

### Anatomy

- Icon (arrow)
- Text link

### Design properties

#### Design tokens

- `backlink-icon` // Leading icon
- `backlink-icon-margin-right` // Icon right margin
- `backlink-foreground color` // Foreground color of icon and text
- `backlink-text-font-family` // Text font-family
- `backlink-text-font-size` // Text font size
- `backlink-text-font-weight` // Text font weight

#### Interactive states

- Hover state

#### Positioning

A backlink is positioned to the left on top of the page content (in left-to-right languages), below the page header containing the main navigation and on top of the page title/first heading.

#### Typography

### Accessibility

Make sure the people depending on screen reading software are aware of the backlink and where it navigates to.

A backlink should be included in the logical keyboard tab order.
