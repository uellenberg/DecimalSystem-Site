import Head from "next/head";

const SEO = (props: {url: string, title: string, description?: string, keywords?: string, author?: string}) => {
    const {url, title, description = "DecimalSystem is a powerful base conversion library that can convert any (real) number to any base (over 1), including non-integer bases like base PI.", keywords = "base, radix, base converter, base convert, base conversion, number, number system, decimal, non-integer, non-int, hex, system, decimal system, decimalsystem", author = "Jonah Uellenberg"} = props;

    return (
        <>
            <Head>
                <title>{title}</title>

                <meta property="og:type" content="website" />

                <meta property="description" content={description} />
                <meta property="og:description" content={description} />

                <meta property="og:title" content={title} />

                <meta property="og:url" content={url} />
                <link href={url} rel="canonical" />

                <meta name="author" content={author} />

                <meta name="keywords" content={keywords} />
            </Head>
        </>
    );
}

export default SEO;