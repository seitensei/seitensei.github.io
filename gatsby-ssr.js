import GlobalStateProvider from './src/components/globalStateProvider/globalStateProvider';

exports.wrapRootElement = ({ element, props }) => {
    return <GlobalStateProvider {...props}>
        {element}
    </GlobalStateProvider>
};