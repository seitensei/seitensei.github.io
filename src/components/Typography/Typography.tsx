import styled from '@emotion/styled';
import Prism from 'prismjs';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import { burundy, linkColor } from '../../shared/colors';

interface ITypographyProps {}

const StyledContainer = styled.div`
    h1 {
        &::before {
            content: '# ';
        }
    }

    h2 {
        &::before {
            content: '## ';
        }
    }

    h3 {
        &::before {
            content: '### ';
        }
    }

    code {
        font-family: 'Source Code Pro', monospace;
    }

    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
        border-radius: 8px;
    }

    a,
    a:visited,
    a:hover {
        color: ${linkColor};
        text-decoration: none;
    }
`;

/**
 * Apply standard styling to children
 */
export const Typography = (props: PropsWithChildren<ITypographyProps>) => {
    const { children } = props;
    useEffect(() => {
        Prism.highlightAll();
    });

    return <StyledContainer>{children}</StyledContainer>;
};
