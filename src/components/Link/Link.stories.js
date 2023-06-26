import { Link } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://nitinsharma.live">Primary link</Link>
    <Link secondary href="https://nitinsharma.live">
      Secondary link
    </Link>
  </StoryContainer>
);
