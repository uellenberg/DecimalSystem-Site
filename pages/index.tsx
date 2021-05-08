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
                mt={{base: "10%", md: "5%"}}
                id="masthead"
            >
                <chakra.div id="masthead-container">
                    <chakra.header
                        fontFamily="open-sans"
                        fontSize={{base: "35", md: "50", lg: "60"}}
                        pl={{base: "15", md: "50", lg: "60"}}
                        pr={{base: "15", md: "50", lg: "60"}}
                        display="block"
                    >
                        Convert any Number to any Number System.
                    </chakra.header>
                    <chakra.p
                        fontFamily="abhaya-libre"
                        fontSize={{base: "20", lg: "30"}}
                        pl={{base: "30", lg: "80"}}
                        pr={{base: "30", lg: "80"}}
                        pb={{base: "5"}}
                        display="block"
                        color="gray.400"
                    >
                        DecimalSystem is a powerful base conversion library that can convert any (real) number to any base (over 1), including non-integer bases, like base PI.
                    </chakra.p>
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