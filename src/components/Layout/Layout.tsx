import { graphql, Link, useStaticQuery } from "gatsby";
import { PropsWithChildren } from "react";
import "./Layout.scss";

interface ILayoutProps {
  siteTitle?: string;
}

export const Layout = (props: PropsWithChildren<ILayoutProps>) => {
  const { children, siteTitle } = props;

  return (
    <div className="layout-wrapper">
      <div className="layout-header">
        <div className="container">
          <Link to="/">{siteTitle}</Link>
          <nav>
            <ul>
              <li><Link to="/posts/">Posts</Link></li>
              <li><Link to="/page/resources">Resources</Link></li>
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
