# Notification

_Status: **In development**_

## Introduction

Notifications can be displayed in response to both system activity and user actions.

A notification can display four kinds of information:

1. Neutral information
2. Success
3. Warning
4. Error

### Variations

* ‘Full-width’ (‘global’) notifications are displayed in a central location where they grab the user's attention, usually right below the page header. A notification is displayed across the entire width (100%) minus margins of its parent element.
* Inline (‘contextual’) notifications are almost always displayed followed by a user action. They are displayed in the proximity of the element to which the notification relates.
* A user can optionally dismiss a notification.

### Alternatives and related components

* Modal dialog
* Prompt (system prompt)

## Anatomy

* Container (with padding)
* Icon to support color for the type of notification
* Optional heading
* Notification text (uses standard body text), can contain a link to, for example, in-depth explanation
* Optional close functionality

### Design tokens

#### Global/default

* `feedback-notification-width` // Container width (inline or full-width)
* `feedback-border-radius` // Container border radius
* `feedback-heading-font-family` // Heading font-family
* `feedback-heading-font-size` // Heading font size
* `feedback-heading-font-weight` // Heading font weight
* `feedback-heading-color`// Heading foreground color
* `feedback-icon-close` // Icon with action to close notification

#### Neutral notification

* `feedback-icon-info` // Leading icon
* `feedback-fill-neutral-background-color` // Notification background color
* `feedback-fill-neutral-color` // Notification foreground color (heading or icon)

#### Success notification

* `feedback-icon-success` // Leading icon
* `feedback-fill-safe-background-colon` // Notification background color, should have sufficient contrast with `feedback-fill-safe-color`
* `feedback-fill-safe-color` // Notification foreground color (heading or icon), should have sufficient contrast with `feedback-fill-safe-background-color`

#### Warning notification

* `feedback-icon-warning` // Leading icon
* `feedback-fill-warning-background-color` // Notification background color, should have sufficient contrast with `feedback-fill-warning-color`
* `feedback-fill-warning-color` // Notification foreground color (heading or icon), should have sufficient contrast with `feedback-fill-warning-background-color`

#### Error notification

* `feedback-icon-error` // Leading icon
* `feedback-fill-danger-background-color` // Notification background color, should have sufficient contrast with `feedback-fill-danger-color`
* `feedback-fill-danger-color` // Notification foreground color (heading or icon), should have sufficient contrast with `feedback-fill-danger-background-color`

## Interactive states

Notifications don’t have interactive states.

## Design properties

### Color

Conventional, sematic colors are used to display the four types of information.

#### Neutral

Grey or light-blue.

#### Succes

Green.

#### Warning

Yellow or orange.

#### Error

Red.

### Positioning

‘Full-width’ notifications are displayed across the entire width (100%) minus margins below the page header.

In case notifications are displayed in, for example, modal windows or cards they are placed directly below the first heading of those elements. If these elements do not contain headings, the notifications are shown as the first element.

Inline notifications are displayed on top of the element generating the notification. This increases the likelihood that it will also be seen when zoomed in or scrolled.

Multiple notifications can be displayed simultaneously. In this case notifications will be displayed one above the other with the most prominent one on top.

Try to limit the number of notifications to less than three.

Prevent notifications from overlapping the page content.

### Typography

Notifications inherit the font-size and color of the body text.

A heading is optional, a notification heading shares the font size of a heading level six. Please note that the heading level markup should be correct and follows a logical sequence (do not skip from an H2 to an H6.)

Text in a full-width notification can be left or center-aligned. When aligning the text centered, make sure that the icon and the text have a visual relationship.

### Iconography

In addition to a difference in icon drawing, a difference in outline (_traffic signs_) can be considered to clearly differentiate. This is especially useful for people with color blindness.

#### Neutral information

‘i’ information.

To display a background process such as the saving of data an animated spinner can be used.

#### Success icon

Checkmark.

#### Warning icon

Exclamation sign (traffic sign).

#### Error icon

Cross (traffic sign).

## Accessibility

To show the difference in notification type don’t rely on color alone. Try to offer a clearly distinctive texture for people with color blindness by adding, for example, an understandable icon to clarify the type of notification.

If a notification can be closed by the user, this must also be possible using the keyboard. The close button should be a logical part of the tab-sequence.

Notifications and their context should also be offered to screen reader users in an understandable manner.

## Content guidelines

If the notification contains an error message, explain how to correct the error and how to prevent it in the future.

### Full-width notification

Try to limit the text of a full-width notification to a maximum of three lines (excluding optional header).

### Inline notification

Try to make the text for an inline notification as concise and clear as possible.

## Best practices

### Dos

* Contextual notifications must be placed in direct proximity of the relevant element.

### Don'ts

* An error message should not be dismissable without the error first being corrected.
* Do not place multiple notifications within one notification component. In case multiple notifications have to be displayed, they will each be shown in their own notification component.

## References

## History

### 0.1 (14-12-2020)

* First draft of documentation
* First version of Figma component
