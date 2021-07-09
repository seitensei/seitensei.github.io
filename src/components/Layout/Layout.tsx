import { graphql, Link, useStaticQuery } from 'gatsby';
import { PropsWithChildren } from 'react';

interface ILayoutProps {
    siteTitle: JSX.Element | string;
    navList?: JSX.Element[];
}

export const Layout = (props: PropsWithChildren<ILayoutProps>) => {
    const { children, siteTitle, navList } = props;

    return (
        <div className="layout-wrapper">
            <div className="layout-header">
                <div className="container">
                    {siteTitle}
                    <nav className="tablet-up">
                        <ul>
                            {navList?.map((navElm, idx) => {
                                return <li key={idx}>{navElm}</li>;
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="layout-nav mobile-only">
                <div className="container">
                    <nav>
                        <ul>
                            {navList?.map((navElm, idx) => {
                                return <li key={idx}>{navElm}</li>;
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
            <main>
                <div className="container">{children}</div>
            </main>
            <footer className="layout-footer">
                <div className="container">
                    Copyright &copy; {new Date().getFullYear()}
                </div>
            </footer>
        </div>
    );
};
