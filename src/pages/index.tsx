import { GatsbyLayout } from '../components/Layout/GatsbyLayout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Feature } from '../components/Feature/Feature';
import parse from 'html-react-parser';

const IndexPage = ({ data }) => {
    const post = data.allWpPost.nodes[0];
    const slug = `/post/${String(post.slug)}`;
    const excerptContent = parse(post.excerpt);

    let content;

    // For the excerpt, only the text content matters
    if (Array.isArray(excerptContent)) {
        content = excerptContent[0];
        if (Array.isArray(content.props.children)) {
            content.props.children.splice(1, content.props.children.length);
        }
    } else {
        content = excerptContent;
    }

    return (
        <GatsbyLayout>
            <Feature>
                <h1>Latest Post</h1>
                <article>
                    <h2><Link to={slug}>{post.title}</Link></h2>
                    {content}
                </article>
            </Feature>
        </GatsbyLayout>
    );
};

export const query = graphql`
    query IndexQuery {
        allWpPost(limit: 1) {
            nodes {
                excerpt
                title
                slug
            }
        }
    }
`;

export default IndexPage;
