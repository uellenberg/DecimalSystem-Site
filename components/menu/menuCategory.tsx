import {chakra, useColorModeValue} from "@chakra-ui/react";
import React from "react";

const MenuCategory = (props: { text: string }) => (
    <chakra.h4
        fontSize="sm"
        fontWeight="bold"
        my="6%"
        textTransform="uppercase"
        letterSpacing="wider"
        color={useColorModeValue("gray.700", "inherit")}
    >
        {props.text}
    </chakra.h4>
);

export default MenuCategory;