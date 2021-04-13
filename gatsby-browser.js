/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import '@fontsource/roboto';

import GlobalStateProvider from './src/components/globalStateProvider/globalStateProvider';

export const wrapRootElement = GlobalStateProvider;