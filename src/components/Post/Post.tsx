import { Typography } from '../Typography/Typography';

interface IPostProps {
    title: string;
    date: Date;
    body: string | JSX.Element | JSX.Element[];
    featuredImage?: { url: string; altText: string };
}

export const Post = (props: IPostProps) => {
    const { title, body, date, featuredImage } = props;

    return (
        <Typography>
            <article>
                <h1>{title}</h1>
                <h2>
                    {date.toLocaleString([], {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </h2>
                {featuredImage && (
                    <img src={featuredImage.url} alt={featuredImage.url} />
                )}
                {body}
            </article>
        </Typography>
    );
};
