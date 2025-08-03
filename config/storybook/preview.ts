import type { Preview } from '@storybook/react-webpack5'
import { StyleDecorator } from '../../src/shared/config/storubook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storubook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storubook/RouterDecorator/RouterDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;