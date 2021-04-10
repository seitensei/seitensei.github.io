import * as React from 'react';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'react-jss';

interface ILayoutProps {}

const siteTheme = {}

export const Layout = (props: PropsWithChildren<ILayoutProps>) => {
  const { children } = props;

  return (
    <ThemeProvider theme={siteTheme}>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </ThemeProvider>
  );
};
