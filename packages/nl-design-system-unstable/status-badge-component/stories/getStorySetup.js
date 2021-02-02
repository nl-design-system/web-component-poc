import '../style.css';
import './defaultTheme.css';
import '../element.js';
import README from '../README.md';
import contentGuidelines from '../docs/content-guidelines.md';

export default (Template) => {
  return {
    docs: {
      transformSource: (_src, context) => {
        return Template(context.args);
      },
    },
    status: 'IN DEVELOPMENT',
    notes: { UX: README, Content: contentGuidelines },
  };
};
