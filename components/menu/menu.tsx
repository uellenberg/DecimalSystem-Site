import React from "react";
import {Box} from "@chakra-ui/layout";
import MenuItems from "./menuItems";
import {useColorModeValue} from "@chakra-ui/color-mode";

const Menu = () => (
    <>
        <Box
            width="30%"
            height="100%"
            pl="3%"
            pt="3%"
            overflow="auto"
            display={{base: "none", md: "inline-block"}}
            background={useColorModeValue("gray.200", "gray.900")}
        >
            <MenuItems/>
        </Box>
    </>
);

export default Menu;