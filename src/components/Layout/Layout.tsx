import { graphql, Link, useStaticQuery } from "gatsby";
import { PropsWithChildren } from "react";
import "./Layout.scss";

interface ILayoutProps {}

export const Layout = (props: PropsWithChildren<ILayoutProps>) => {
  const { children } = props;

  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      wp {
        generalSettings {
          description
          title
        }
      }
    }
  `);

  const siteTitle = data.wp.generalSettings.title;

  return (
    <div className="layout-wrapper">
      <div className="layout-header">
        <div className="container">
          <Link to="/">{siteTitle}</Link>
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
