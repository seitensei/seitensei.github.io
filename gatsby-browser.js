/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import '@fontsource/roboto';
import React from 'react';
import GlobalStateProvider from './src/components/globalStateProvider/globalStateProvider';

export const wrapRootElement = ({ element, props }) => {
    return <GlobalStateProvider {...props}>{element}</GlobalStateProvider>;
};
