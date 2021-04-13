import React, { useState } from 'react';

interface IGlobalStateContext {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
}

export const GlobalStateContext = React.createContext<IGlobalStateContext>({
    isDrawerOpen: false,
    toggleDrawer: () => {},
});

const GlobalStateProvider = ({ children }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    }

    return (
        <GlobalStateContext.Provider
            value={{
                isDrawerOpen,
                toggleDrawer
            }}
            >
                {children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalStateProvider;