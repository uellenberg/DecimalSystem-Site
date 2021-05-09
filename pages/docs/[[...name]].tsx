import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Menu from "../../components/menu/menu";
import Header from "../../components/header";
import {Box} from "@chakra-ui/layout";
import remarkGfm from "remark-gfm";
import HeadingRenderer from "../../components/HedaingRenderer";
import SEO from "../../components/seo";
import React from "react";

const DocTemplate = (props: MarkdownData) => {
    return (
        <>
            <SEO title={"DecimalSystem Docs: " + props.data.name} url={"https://decimalsystem.js.org/docs/" + props.data.url}/>
            <Header/>
            <Box
                width="full"
                height="calc(100% - 72px)"
                display="flex"
            >
                <Menu/>
                <Box
                    width="100%"
                    height="100%"
                    p="5%"
                    pr="10%"
                    id="docs-container"
                    overflow="auto"
                ><ReactMarkdown remarkPlugins={[remarkGfm]} components={{ h1: HeadingRenderer, h2: HeadingRenderer }}>{props.content}</ReactMarkdown></Box>
            </Box>
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
        { params: { name: undefined } },
        { params: { name: [ "start" ] } },
        { params: { name: [ "install" ] } },
        { params: { name: [ "num" ] } },
        { params: { name: [ "numoptions" ] } }
    ],
        fallback: false
});

const fileNames: Record<string, string> = {
    undefined: "num"
};

const getFileName = (name: string) : string => {
    return fileNames[name] || name || null;
}

export const getStaticProps = async ({ params }) : Promise<{props: MarkdownData}> => {
    const name = getFileName(params.name);

    const content = await import(`./content/${name}.mdx`);

    const data = matter(content.default);

    return {props: {name, content: data.content, data: data.data}};
}

export default DocTemplate;