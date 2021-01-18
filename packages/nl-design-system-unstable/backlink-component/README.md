<!-- _Status: **In development**_ -->

# Backlink

## UX guidelines

### Introduction

A backlink is used to help users navigate back to a previous page. The functionality of a backlink is not the same as a browser’s back button. A back button returns a user to a previous browserpage, while a backlink navigates through the predefined site structure. A backlink displays a single destination; if you want to display how a current page relates within the overall site structure use the breadcrumbs component.

### Alternatives and related components

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

A skip-link allows users to skip all navigation links, including the backlink.

### Content guidelines

Use concise text fot the link to Make clear where a backlink navigates to.

### Best practices

#### Do

- Use only one backlink per page
- Make sure the link takes users to the previous page, in the state they last saw it
- Place the backlink above the main page content

#### Don’t

- Don’t use backlinks in combination with the breadcrumbs component
