import Document, { Html, Head, Main, NextScript } from "next/document";

class Doc extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"/>
                    <script src="https://www.desmos.com/api/v1.7/geometry.js?apiKey=1030b80b9dcd49bfbec8bbd40b383837"/>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-76R23MF1DZ"/>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-76R23MF1DZ');`
                        }}
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default Doc;
