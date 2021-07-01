import { graphql, useStaticQuery } from 'gatsby';
import { PropsWithChildren } from 'react';
import { Layout } from './Layout';

interface IGatsbyLayoutProps {}

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

    return <Layout siteTitle={siteTitle}>{children}</Layout>;
};
