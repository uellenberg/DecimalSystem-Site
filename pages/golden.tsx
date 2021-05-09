import Head from "next/head";
import Geometry from "../components/geometry";

import "../js/desmos/golden";
import SEO from "../components/seo";
import React from "react";

const GoldenPage = () => (
    <>
        <SEO title="DecimalSystem Golden Ratio Demo" url="https://decimalsystem.js.org/golden"/>

        <Geometry/>
    </>
);

export default GoldenPage;