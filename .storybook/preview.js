const cssReq = require.context('!!raw-loader!../packages/nl-design-system-unstable', true, /.\.css$/);
const cssTokenFiles = cssReq.keys().map((filename) => ({ filename, content: cssReq(filename).default }));

const svgIconsReq = require.context('!!raw-loader!../.storybook/static', true, /.\.svg$/);
const svgIconTokenFiles = svgIconsReq.keys().map((filename) => ({ filename, content: svgIconsReq(filename).default }));

const statusMap = {
  BETA: '#9F5E0F',
  STABLE: '#339900',
  DEPRECATED: '#f02c2c',
  'IN DEVELOPMENT': '#174050',
};

const designTokenConfig = {
  files: {
    css: cssTokenFiles,
    svgIcons: svgIconTokenFiles,
  },
  options: {
    hideMatchingHardCodedValues: false,
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  previewTabs: { 'storybookjs/notes/panel': { title: 'Documentation' }, 'storybook/docs/panel': { title: 'API' } },
  statuses: statusMap,
  designToken: designTokenConfig,
};
