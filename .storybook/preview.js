import { addParameters } from '@storybook/html'
import { withCssResources } from '@storybook/addon-cssresources'
import { withDesign } from 'storybook-addon-designs'

const defaultStatusMap = {
  beta: '#9F5E0F',
  stable: '#339900',
  deprecated: '#f02c2c',
}

addParameters({
  statuses: {
    BETA: defaultStatusMap.beta,
    STABLE: defaultStatusMap.stable,
    DEPRECATED: defaultStatusMap.deprecated,
    'IN DEVELOPMENT': '#174050',
  },
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  previewTabs: { 'storybookjs/notes/panel': { title: 'Documentation' }, 'storybook/docs/panel': { title: 'API' } },
}

export const decorators = [withCssResources, withDesign]
