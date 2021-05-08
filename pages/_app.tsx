import {ChakraProvider, extendTheme} from "@chakra-ui/react"
import React from "react";

import "../styles/index.scss";
import "prismjs/themes/prism-tomorrow.css";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}
// @ts-ignore
const theme = extendTheme({ config })

export const App = ({ Component, pageProps}) => {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default App;