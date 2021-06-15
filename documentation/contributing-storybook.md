<!--
@license EUPL-1.2
Copyright (c) 2021 Robbert Broersma
-->

# Contribution Guidelines for Storybook

## Story names should be clear in stand-alone context

Story names should accurately describe the situation in the story. Story names are not only displayed in the Storybook sidebar: they also function as the caption for a screenshot in visual regression tests. A clear description helps to quickly decide if a visual change is the desired result or a regression bug.

If it helps, you can think of it this way: when the story canvas is an HTML `img` element, the story name would be the `alt` attribute.

## Create a story for each state, don't rely on controls

For example: for the hyperlink component, you should include stories for the following states:

- normal
- hover
- focus
- visited

Having separate stories helps test autmation detect issues with any state, without writing code to trigger the interaction. For example: accessibility tests can recognize color contrast issues in every state, and easily detect an issue in the disabled state of a button. Another example: visual regression tests can compare screenshots in every state, and easily detect a regression bug in the focus state.

## Write documentation in Markdown and lower the barrier for contributing

In Storybook it is common to type documentation in `.mdx` files that combine text and code. There are many great tools to write documentation in Markdown format ([iA Writer](https://ia.net/writer), [HackMD](https://hackmd.io)), but only few that also support MDX.

To enpower a wide variety of users to contribute and publish our documentation, it helps to maintain the majority of the documentation in plain `.md` files. To include Markdown documentation in your Storybook, create documentation files in pairs. For example:

`readme.md`:

```md
# Example Design System

...
```

`readme.stories.mdx`:

```mdx
import { Description, Meta } from "@storybook/addon-docs/blocks";

import markdown from "./readme.md";

<Meta title="Example Design System/README" />

<Description>{markdown}</Description>
```

## Share reusable documentation in Markdown files

## Discuss your brands' visual design in separate files from generic UX and accessibility requirements

Avoid mentioning your projects approach in reusable documentation. For example: on one page you can outline the accessibility considerations for a component, such as: "the text of the disabled button should have enough contrast to remain readable." In a separate document you could mention: "after receiving feedback, we have changed to disabled text color to gray-70 to maintain sufficient contrast".

This helps you making a bigger impact with the effort you do for providing documentation, by making it easy to reuse the majority of your documentation.
