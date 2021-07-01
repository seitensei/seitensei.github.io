import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from 'gatsby';
import { Layout } from './Layout';

export default {
    title: Layout.name,
    component: Layout,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Layout>;

const linkList = [<a href="#">nowhere</a>, <a href="#">nowhere</a>];

export const Main = () => {
    return (
        <Layout siteTitle="Preview" navList={linkList}>
            Layout Body Content
        </Layout>
    );
};
