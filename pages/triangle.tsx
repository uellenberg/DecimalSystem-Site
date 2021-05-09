import Head from "next/head";
import Geometry from "../components/geometry";

import "../js/desmos/triangle";
import SEO from "../components/seo";
import React from "react";

const TrianglePage = () => (
    <>
        <SEO title="DecimalSystem Triangle Demo" url="https://decimalsystem.js.org/triangle"/>

        <Geometry/>
    </>
);

export default TrianglePage;