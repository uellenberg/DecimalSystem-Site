import Document, { Html, Head, Main, NextScript } from "next/document";

class Doc extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"/>
                    <script src="https://www.desmos.com/api/v1.7/geometry.js?apiKey=1030b80b9dcd49bfbec8bbd40b383837"/>
                    <script src="https://embed.runkit.com"/>
                    <script src="https://cdn.jsdelivr.net/npm/decimalsystem@1.1.1/dist/decimalsystem.min.js" integrity="sha256-gEOIKfx/cII1st3goELv94s154E0p3Vo/QrHn+S5Yn0=" crossorigin="anonymous"/>

                    <meta name="google-site-verification" content="85zIz0m7xePZ1SuPmfJ6x-CulwklY-ROXhaXsdOfPmQ" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default Doc;
