import MenuCategory from "./menuCategory";
import MenuLink from "./menuLink";
import React from "react";

const MenuItems = () => (
    <>
        <MenuCategory text="Docs"/>
        <MenuLink text="Getting Started" url="/docs/start" aria="Getting Started Page" pl="2%"/>
        <MenuLink text="Installation" url="/docs/install" aria="Installation Documentation" pl="2%"/>
        <MenuLink text="Num" url="/docs/num" aria="Num Documentation" pl="2%"/>
        <MenuLink text="Constructor" url="/docs/num#constructor" aria="Num Documentation (Constructor)" pl="6%"/>
        <MenuLink text="toBase" url="/docs/num#tobase" aria="Num Documentation (toBase)" pl="6%"/>
        <MenuLink text="toString" url="/docs/num#tostring" aria="Num Documentation (toString)" pl="6%"/>
    </>
);

export default MenuItems;