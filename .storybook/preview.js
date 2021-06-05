const cssReq = require.context('!!raw-loader!../packages/nl-design-system-unstable', true, /.\.css$/);
const cssTokenFiles = cssReq.keys().map((filename) => ({ filename, content: cssReq(filename).default }));

const svgIconsReq = require.context('!!raw-loader!../.storybook/static', true, /.\.svg$/);
const svgIconTokenFiles = svgIconsReq.keys().map((filename) => ({ filename, content: svgIconsReq(filename).default }));

const designToken = {
  files: {
    css: cssTokenFiles,
    svgIcons: svgIconTokenFiles,
  },
  options: {
    hideMatchingHardCodedValues: true,
  },
};

const statuses = {
  BETA: '#9F5E0F',
  STABLE: '#339900',
  DEPRECATED: '#f02c2c',
  'IN DEVELOPMENT': '#174050',
};

const previewTabs = {
  'storybookjs/notes/panel': { title: 'Documentation' },
  'storybook/docs/panel': { title: 'API' },
  canvas: { title: 'Design Tokens' },
};

export const parameters = {
  controls: { expanded: false },
  previewTabs,
  statuses,
  designToken,
  options: {
    panelPosition: 'right',
    storySort: {
      order: ['NL Design System', ['Introductie', 'Contributing']],
    },
  },
};
