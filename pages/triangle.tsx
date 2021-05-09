import Geometry from "../components/geometry";
import SEO from "../components/seo";
import React, {useEffect} from "react";
import {Create} from "../lib/desmos/triangle";

const TrianglePage = () => {
    useEffect(() => {
        Create();
    });

    return (
        <>
            <SEO title="DecimalSystem Triangle Demo" url="https://decimalsystem.js.org/triangle"/>

            <Geometry/>
        </>
    );
}

export default TrianglePage;