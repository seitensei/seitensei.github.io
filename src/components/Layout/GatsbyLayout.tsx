import { graphql, Link, useStaticQuery } from 'gatsby';
import { PropsWithChildren } from 'react';
import { Layout } from './Layout';

interface IGatsbyLayoutProps {}

const titleComponent = (title: string) => {
    return <Link to="/">{title}</Link>;
};

const navList = [
    <Link to="/posts/">Posts</Link>,
    <Link to="/page/resources">Resources</Link>,
    <Link to="/page/about">About</Link>
];

export const GatsbyLayout = (props: PropsWithChildren<IGatsbyLayoutProps>) => {
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
        <Layout siteTitle={titleComponent(siteTitle)} navList={navList}>
            {children}
        </Layout>
    );
};
