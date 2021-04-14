import React from 'react';
import GlobalStateProvider from './src/components/globalStateProvider/globalStateProvider';

export const wrapRootElement = ({ element, props }) => {
    return <GlobalStateProvider {...props}>{element}</GlobalStateProvider>;
};
