import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const DocTemplate = (props: MarkdownData) => {
    console.log(props);

    return (
        <>
            <ReactMarkdown>{props.content}</ReactMarkdown>
        </>
    );
}

interface MarkdownData {
    name: string;
    content: string;
    data: { [key: string]: any; }
}

export const getStaticPaths = async () => ({
    paths: [
        { params: { name: undefined } }
    ],
        fallback: false
});

const fileNames: Record<string, string> = {
    undefined: "index"
};

const getFileName = (name: string) : string => {
    return fileNames[name] || name || null;
}

export const getStaticProps = async ({ params }) : Promise<{props: MarkdownData}> => {
    const name = getFileName(params.name);

    const content = await import(`./content/${name}.md`);

    const data = matter(content.default);

    return {props: {name, content: content.default, data: data.data}};
}

export default DocTemplate;