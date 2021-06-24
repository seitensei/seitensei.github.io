interface IPageProps {
    title: string;
    body: string | JSX.Element | JSX.Element[];
}

export const Page = (props: IPageProps) => {
    const { title, body } = props;

    return (
        <article>
            <h1>{title}</h1>
            <p>{body}</p>
        </article>
    );
};