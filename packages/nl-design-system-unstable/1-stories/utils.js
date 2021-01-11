export const getTitle = (pageTitle) => `NL Design System/${pageTitle}`;

export const getParams = ({ previewTabs = {}, ...extraParams } = {}) => ({
  previewTabs: {
    'storybookjs/notes/panel': { hidden: true },
    'storybook/docs/panel': { title: 'General documentation' },
    canvas: { hidden: true },
    ...previewTabs,
  },
  ...extraParams,
});
