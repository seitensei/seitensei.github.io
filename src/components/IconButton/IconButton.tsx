import styled from '@emotion/styled';
import { Icon } from '@primer/octicons-react';
import { ButtonHTMLAttributes, HTMLProps } from 'react';
import { PropsWithChildren } from 'react';

interface IIconButtonsProp {
    icon: Icon;
}

const StyledButton = styled.button``;

export const IconButton = (props: IIconButtonsProp) => {
    const { icon} = props;

    return <StyledButton>{icon}</StyledButton>;
};
