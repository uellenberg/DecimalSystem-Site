import Geometry from "../components/geometry";
import SEO from "../components/seo";
import React, {useEffect} from "react";
import {Create} from "../lib/desmos/golden";

const GoldenPage = () => {
    useEffect(() => {
        Create();
    });

    return (
        <>
            <SEO title="DecimalSystem Golden Ratio Demo" url="https://decimalsystem.js.org/golden"/>

            <Geometry/>
        </>
    );
}

export default GoldenPage;