import Head from "next/head";
import Geometry from "../components/geometry";

import "../js/desmos/golden";

const GoldenPage = () => (
    <>
        <Head>
            <title>Golden Ratio Demo</title>
        </Head>

        <Geometry/>
    </>
);

export default GoldenPage;