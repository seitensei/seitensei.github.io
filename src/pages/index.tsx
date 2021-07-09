import { GatsbyLayout } from '../components/Layout/GatsbyLayout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Feature } from '../components/Feature/Feature';
import parse from 'html-react-parser';

const IndexPage = ({data}) => {
    const posts = data.allWpPost.nodes;
    const topPost = posts[0];
    return (<GatsbyLayout>
        <Feature>
            <h1>Latest Post</h1>
            <article>
                <h2>{topPost.title}</h2>
                {parse(topPost.excerpt)}
            </article>
        </Feature>
    </GatsbyLayout>);
};

export const query = graphql`
    query IndexQuery {
        allWpPost(limit: 1) {
            nodes {
                excerpt
                title
            }
        }
    }
`;

export default IndexPage;
