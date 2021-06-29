import { Link } from "gatsby";

interface IPostExcerptProps {
    title: string;
    slug: string;
    date: Date;
    body: string | JSX.Element | JSX.Element[];
}

export const PostExcerpt = (props: IPostExcerptProps) => {
    const { title, slug, body, date } = props;

    return (
        <article>
            <h1><Link to={slug}>{title}</Link></h1>
            <h2>{date.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</h2>
            {body}
        </article>
    );
};