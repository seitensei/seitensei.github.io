import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby-theme-material-ui';
import React from 'react';


const useStyles = makeStyles(theme => ({
    postContainer: {
        marginBottom: theme.spacing(2)
    }
}));

interface IPost {
    title: string;
    datetime: string;
    content: React.ReactNode;
    link?: string;
    excerpt?: boolean;
}

const ReadMoreLink = ({ link }) => {
    return <Link to={link}>{` `}Read More</Link>;
};

interface ITitleProps {
    link?: string;
}
const Title = (props: React.PropsWithChildren<ITitleProps>) => {
    const { link, children } = props;

    let inner: React.ReactNode = children;
    if (link) {
        inner = (
            <Link to={link} color="inherit" underline="none">
                {children}
            </Link>
        );
    }

    return (
        <>{inner}</>
    );
};

export const Post = (props: IPost) => {
    const { title, datetime, content, link, excerpt } = props;

    const styles = useStyles();

    const readMore = ReadMoreLink({ link });

    return (
        <Container component="article" className={styles.postContainer}>
            <Typography component="h4" variant="h4">
                <Title link={link}>{title}</Title>
            </Typography>
            <Typography>{datetime}</Typography>
            <Divider />
            <Typography component="p">
                {content}
                {excerpt ? readMore : null}
            </Typography>
        </Container>
    );
};
