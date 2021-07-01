import { graphql, Link, useStaticQuery } from 'gatsby';
import { PropsWithChildren } from 'react';
import './Layout.scss';

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
