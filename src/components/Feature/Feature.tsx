import { PropsWithChildren } from "react";
import styled from "styled-components";

const FeatureContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    padding: 8px;
    border-radius: 4px;
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