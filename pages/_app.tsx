import { ChakraProvider } from "@chakra-ui/react"

import "../styles/index.scss";
import "prismjs/themes/prism-tomorrow.css";

import React from "react";

export const App = ({ Component, pageProps}) => {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default App;