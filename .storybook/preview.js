// custom typefaces
import '@fontsource/source-sans-pro';
import '@fontsource/source-code-pro';

// normalize
import 'normalize.css';

// styles
import '../src/styles/main.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
}