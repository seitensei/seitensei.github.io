import { ComponentMeta } from '@storybook/react';
import { Feature } from './Feature';

export default {
    title: Feature.name,
    component: Feature,
} as ComponentMeta<typeof Feature>;

export const Basic = () => <Feature></Feature>;

export const WithText = () => {
    return (
        <Feature>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique et egestas quis ipsum suspendisse. Nulla aliquet enim
            tortor at auctor urna nunc id cursus. Adipiscing commodo elit at
            imperdiet dui accumsan sit amet. Fringilla urna porttitor rhoncus
            dolor purus. Tellus cras adipiscing enim eu turpis. Purus sit amet
            luctus venenatis lectus magna fringilla urna. Pharetra diam sit amet
            nisl. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Eu
            scelerisque felis imperdiet proin fermentum leo. Dignissim sodales
            ut eu sem. Ut tristique et egestas quis ipsum suspendisse ultrices
            gravida. Id nibh tortor id aliquet lectus proin nibh nisl. Nullam
            eget felis eget nunc lobortis mattis. Id faucibus nisl tincidunt
            eget nullam non nisi. In metus vulputate eu scelerisque felis
            imperdiet proin. Quisque sagittis purus sit amet volutpat consequat
            mauris nunc congue. Egestas sed sed risus pretium quam vulputate
            dignissim suspendisse.
        </Feature>
    );
};
