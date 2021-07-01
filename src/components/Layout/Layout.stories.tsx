import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Layout } from './Layout';

export default {
    title: Layout.name,
    component: Layout,
} as ComponentMeta<typeof Layout>;

export const Main = () => {
    return <Layout siteTitle="Preview">Layout Body Content</Layout>;
};
