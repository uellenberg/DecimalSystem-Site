import MenuCategory from "./menuCategory";
import MenuLink from "./menuLink";
import React from "react";

const MenuItems = () => (
    <>
        <MenuCategory text="Docs"/>
        <MenuLink text="Getting Started" url="/docs/start" aria="Getting Started Page" pl="2%"/>
        <MenuLink text="Installation" url="/docs/install" aria="Installation Documentation" pl="2%"/>
        <MenuLink text="Num" url="/docs/num" aria="Num Documentation" pl="2%"/>
    </>
);

export default MenuItems;