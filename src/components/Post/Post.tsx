interface IPostProps {
    title: string;
    date: Date;
    body: string | JSX.Element | JSX.Element[];
    featuredImage?: { url: string, altText: string }
}

export const Post = (props: IPostProps) => {
    const { title, body, date, featuredImage } = props;

    return (
        <article>
            <h1>{title}</h1>
            <h2>{date.toLocaleString()}</h2>
            {featuredImage && <img src={featuredImage.url} alt={featuredImage.url} />}
            {body}
        </article>
    );
};