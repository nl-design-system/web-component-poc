import '../style.css';
import DOMPurify from 'dompurify';
import { getStatusBadgeStories } from './getStatusBadgeStories';

const Template = ({ textContent, status }) =>
  `<span class="nl-status-badge nl-status-badge--${status}">${DOMPurify.sanitize(textContent)}</span>`;

const { config, Success, Warning, Error } = getStatusBadgeStories({ prefix: 'HTML', Template });

export default config;
export { Success, Warning, Error };
