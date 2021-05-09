import React from "react";
import Embed from "react-runkit";

const flatten = (text: string, child) => {
    return typeof child === "string" ? text + child : React.Children.toArray(child.props.children).reduce(flatten, text);
};

const RunkitRenderer = props => {
    const children = React.Children.toArray(props.children);
    const text: string = children.reduce(flatten, "");

    if(text.startsWith("runkit")) {
        let newText = text.substring(6).replace(/\n$/, "");

        let preamble = "";
        let preambleSplit = newText.split("|pre|");

        if(preambleSplit.length === 2){
            preamble = preambleSplit.shift();
            newText = preambleSplit.shift();
        }

        return (<Embed source={newText} preamble={preamble} gutterStyle="inside" nodeVersion="14.x.x" evaluateOnLoad={true}/>);
    }

    return React.createElement(props.node.tagName, props.node.properties, props.children);
};

export default RunkitRenderer;