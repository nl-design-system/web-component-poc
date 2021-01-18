import '../style.css';
import './exampleTheme.css';
import README from '../README.md';
import contentGuidelines from '../docs/content-guidelines.md';

export const getParameters = (Template) => {
  return {
    docs: {
      transformSource: (_src, { args }) => Template(args),
    },
    status: 'IN DEVELOPMENT',
    notes: { UX: README, Content: contentGuidelines },
  };
};
