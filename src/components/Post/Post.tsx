interface IPostProps {
    title: string;
    date: Date;
    body: string | JSX.Element | JSX.Element[];
}

export const Post = (props: IPostProps) => {
    const { title, body, date } = props;

    return (
        <article>
            <h1>{title}</h1>
            <h2>{date.toLocaleString()}</h2>
            {body}
        </article>
    );
};