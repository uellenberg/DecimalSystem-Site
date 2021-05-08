import Head from "next/head";
import Header from "../components/header";
import {Box, Button, chakra, useColorModeValue} from "@chakra-ui/react";
import Prism from "prismjs";

const IndexPage = () => {
    const bg = useColorModeValue("gray.200", "gray.900");

    return (
        <>
            <Head>
                <title>DecimalSystem</title>
            </Head>

            <Header/>

            <Box
                mt={{base: "0", md: "10%"}}
                id="masthead"
            >
                <chakra.div id="masthead-container">
                    <chakra.header fontFamily="open-sans" fontSize="40" display="block">
                        Convert any Number to any Number System.
                    </chakra.header>
                    <Button colorScheme="blue" display="block">Get Started</Button>
                </chakra.div>
                <chakra.div className="code-container" mt="10" ml="auto" mr="auto">
                    <chakra.pre
                        dangerouslySetInnerHTML={{__html: Prism.highlight(`import {Num} from "decimalsystem";\nnew Num(10).toBase(Math.PI).toString();`, Prism.languages.javascript, "javascript")}}
                        bg={bg}
                    />
                </chakra.div>
            </Box>
        </>
    );
}

export default IndexPage;