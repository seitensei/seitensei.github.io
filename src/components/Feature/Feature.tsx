import { PropsWithChildren } from "react";
import styled from '@emotion/styled';
import { linkColor } from "../../shared/colors";

const FeatureContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    padding: 8px;
    border-radius: 4px;

    a, a:visited, a:hover {
        color: ${linkColor};
        text-decoration: none;
    }
`;

interface IFeatureProps {}

export const Feature = (props: PropsWithChildren<IFeatureProps>) => {
    const { children } = props;

    return (
        <FeatureContainer>
            {children}
        </FeatureContainer>
    );
}