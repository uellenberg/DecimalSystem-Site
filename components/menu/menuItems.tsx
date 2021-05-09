import MenuCategory from "./menuCategory";
import MenuLink from "./menuLink";
import React from "react";

const MenuItems = () => (
    <>
        <MenuCategory text="Docs"/>
        <MenuLink text="Getting Started" url="/docs/start" aria="Getting Started Page" pl="2%"/>
        <MenuLink text="Examples" url="/docs/start#examples" aria="Getting Started Page (Examples)" pl="6%"/>
        <MenuLink text="Installation" url="/docs/install" aria="Installation Instructions" pl="2%"/>
        <MenuLink text="Node" url="/docs/install#node" aria="Installation Instructions (Node)" pl="6%"/>
        <MenuLink text="Browser" url="/docs/install#browser" aria="Installation Instructions (Browser)" pl="6%"/>
        <MenuLink text="Num" url="/docs/num" aria="Num Documentation" pl="2%"/>
        <MenuLink text="Constructor" url="/docs/num#constructor" aria="Num Documentation (Constructor)" pl="6%"/>
        <MenuLink text="toBase" url="/docs/num#tobase" aria="Num Documentation (toBase)" pl="6%"/>
        <MenuLink text="toString" url="/docs/num#tostring" aria="Num Documentation (toString)" pl="6%"/>
        <MenuLink text="NumOptions" url="/docs/numoptions" aria="NumOptions Documentation" pl="2%"/>
    </>
);

export default MenuItems;