import '../style.css';
import '../element.js';
import { getStatusBadgeStories } from './getStatusBadgeStories';

const Template = ({ textContent, status }) =>
  `<nl-status-badge status="${status}">${textContent || '-'}</nl-status-badge>`;

const { config, Success, Warning, Error } = getStatusBadgeStories({ prefix: 'Web Components', Template });

export default config;
export { Success, Warning, Error };
