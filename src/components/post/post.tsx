import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby-theme-material-ui';
import * as React from 'react';

interface IPost {
    title: string;
    datetime: string;
    content: React.ReactNode;
    link?: string;
    excerpt?: boolean;
}

const ReadMoreLink = ({link}) => {
    return (
        <Link to={link}>{` `}Read More</Link>
    );
}

interface ITitleProps {
    link?: string;
}
const Title = (props: React.PropsWithChildren<ITitleProps>) => {
    const { link, children } = props;

    let inner: React.ReactNode = children;
    if (link)
        inner = <Link to={link} color="inherit">{ children }</Link>

    return (
        <Typography component="h4" variant="h4">
            {inner}
        </Typography>
    );
}

export const Post = (props: IPost) => {
    const { title, datetime, content, link, excerpt } = props;

    const readMore = ReadMoreLink({link});

    return (
        <Container component="article">
            <Typography component="h4" variant="h4">
                <Title>
                    {title}
                </Title>
            </Typography>
            <Typography>
                {datetime}
            </Typography>
            <Divider />
            <Typography component="p">
                {content}{excerpt ? readMore : null}
            </Typography>
        </Container>
    );
};