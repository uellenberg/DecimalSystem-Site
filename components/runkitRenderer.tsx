import React from "react";
import Embed from "react-runkit";

const flatten = (text: string, child) => {
    return typeof child === "string" ? text + child : React.Children.toArray(child.props.children).reduce(flatten, text);
};

const RunkitRenderer = props => {
    const children = React.Children.toArray(props.children);
    const text = children.reduce(flatten, "");

    if(text.startsWith("runkit")) {
        return (<Embed source={text.substring(6).replace(/\n$/, "")} gutterStyle="inside" nodeVersion="14.x.x" evaluateOnLoad={true}/>);
    }

    return React.createElement(props.node.tagName, props.node.properties, props.children);
};

export default RunkitRenderer;