const SPACING_INTERVAL = 8;

export const siteTheme = {
    fontFamily: 'Raleway, sans-serif',
    colorPrimary: '#546e7a',
    colorPrimaryLight: '#819ca9',
    colorPrimaryDark: '#29434e',
    colorPrimaryText: '#ffffff',
    colorSecondary: '#bdbdbd',
    colorSecondaryLight: '#efefef',
    colorSecondaryDark: '#8d8d8d',
    colorSecondaryText: '#000000',
};

export const GetSpacing = (units: number) => {
    return units * SPACING_INTERVAL;
};
