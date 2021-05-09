import Head from "next/head";
import Geometry from "../components/geometry";

import "../js/desmos/circle";
import SEO from "../components/seo";
import React from "react";

const CirclePage = () => (
    <>
        <SEO title="DecimalSystem Circle Demo" url="https://decimalsystem.js.org/circle"/>

        <Geometry/>
    </>
);

export default CirclePage;