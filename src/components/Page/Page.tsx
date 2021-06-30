interface IPageProps {
    title: string;
    body: string | JSX.Element | JSX.Element[];
}

export const Page = (props: IPageProps) => {
    const { title, body } = props;

    return (
        <div>
            <div>{body}</div>
        </div>
    );
};