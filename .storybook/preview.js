import { addParameters } from '@storybook/html';

const cssReq = require.context('!!raw-loader!../packages/nl-design-system-unstable', true, /.\.css$/);
const cssTokenFiles = cssReq.keys().map((filename) => ({ filename, content: cssReq(filename).default }));

const svgIconsReq = require.context('!!raw-loader!../.storybook/static', true, /.\.svg$/);
const svgIconTokenFiles = svgIconsReq.keys().map((filename) => ({ filename, content: svgIconsReq(filename).default }));

const defaultStatusMap = {
  beta: '#9F5E0F',
  stable: '#339900',
  deprecated: '#f02c2c',
};

addParameters({
  statuses: {
    BETA: defaultStatusMap.beta,
    STABLE: defaultStatusMap.stable,
    DEPRECATED: defaultStatusMap.deprecated,
    'IN DEVELOPMENT': '#174050',
  },
  designToken: {
    files: {
      css: cssTokenFiles,
      svgIcons: svgIconTokenFiles,
    },
    options: {
      hideMatchingHardCodedValues: false,
    },
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  previewTabs: { 'storybookjs/notes/panel': { title: 'Documentation' }, 'storybook/docs/panel': { title: 'API' } },
};

/**
 * const cssReq = require.context('!!raw-loader!../src', true, /.\.css$/);
const cssTokenFiles = cssReq
  .keys()
  .map((filename) => ({ filename, content: cssReq(filename).default }));

const scssReq = require.context('!!raw-loader!../src', true, /.\.scss$/);
const scssTokenFiles = scssReq
  .keys()
  .map((filename) => ({ filename, content: scssReq(filename).default }));

const lessReq = require.context('!!raw-loader!../src', true, /.\.less$/);
const lessTokenFiles = lessReq
  .keys()
  .map((filename) => ({ filename, content: lessReq(filename).default }));

const svgIconsReq = require.context('!!raw-loader!../src', true, /.\.svg$/);
const svgIconTokenFiles = svgIconsReq
  .keys()
  .map((filename) => ({ filename, content: svgIconsReq(filename).default }));

addParameters({
  designToken: {
    files: {
      css: cssTokenFiles,
      scss: scssTokenFiles,
      less: lessTokenFiles,
      svgIcons: svgIconTokenFiles
    },
    options: {
      hideMatchingHardCodedValues: false
    }
  }
});

 */
