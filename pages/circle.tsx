import Geometry from "../components/geometry";
import SEO from "../components/seo";
import React, {useEffect} from "react";
import {Create} from "../lib/desmos/circle";

const CirclePage = () => {
    useEffect(() => {
        Create();
    });

    return (
        <>
            <SEO title="DecimalSystem Circle Demo" url="https://decimalsystem.js.org/circle"/>

            <Geometry/>
        </>
    );
}

export default CirclePage;