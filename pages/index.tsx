import Head from "next/head";
import Header from "../components/header";
import {Box, Button, chakra, Divider, useColorModeValue, HStack, Grid, Link} from "@chakra-ui/react";
import Prism from "prismjs";
import React from "react";
import NextLink from "next/link";

const IndexPage = () => {
    const bg = useColorModeValue("gray.700", "gray.900");

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
                        DecimalSystem is a powerful base conversion library that can convert any (real) number to any base (over 1), including non-integer bases like base PI.
                    </chakra.p>
                    <Link href="/docs/start">
                        <Button colorScheme="blue" display="block" fontSize={{base: "20"}}>Get Started</Button>
                    </Link>
                </chakra.div>
                <chakra.div className="code-container" mt="10" ml="auto" mr="auto">
                    <chakra.pre
                        dangerouslySetInnerHTML={{__html: Prism.highlight(`import {Num} from "decimalsystem";\nnew Num(10).toBase(Math.PI).toString();`, Prism.languages.javascript, "javascript")}}
                        bg={bg}
                        color="white"
                    />
                </chakra.div>
            </Box>

            <Divider mt={{base: "10%", md: "5%"}}/>

            <Box
                as="section"
                id="demos"
                mt={{base: "10%", md: "5%"}}
            >
                <chakra.header
                    fontFamily="open-sans"
                    fontSize={{base: "30", md: "40", lg: "40"}}
                    pl={{base: "15", md: "50", lg: "60"}}
                    pr={{base: "15", md: "50", lg: "60"}}
                    display="block"
                    textAlign="center"
                >
                    Demos
                </chakra.header>
                <chakra.p
                    fontFamily="abhaya-libre"
                    fontSize={{base: "20", lg: "30"}}
                    pl={{base: "30", lg: "80"}}
                    pr={{base: "30", lg: "80"}}
                    pb={{base: "5"}}
                    display="block"
                    color="gray.400"
                    textAlign="center"
                >
                    The below demos (powered by the <Link href="https://www.desmos.com/api/v1.7/docs/geometry.html" aria-label="Desmos API" color="blue.300">Desmos API</Link>) use DecimalSystem to help visualize the relationship between some common objects in geometry and their associated constants.
                </chakra.p>

                <Grid
                    templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
                    gap={10}
                    px={{ md: 12 }}
                    ml={{base: "20%"}}
                    mr={{base: "20%"}}
                    mt={{base: "10%", md: "5%"}}
                >
                    <Demo aria="Circle Demo" desc="View the relationship between a circle's circumference in base PI." img="/img/demo-circle.png" title="Circle" url="/circle"/>
                    <Demo aria="Triangle Demo" desc="View the relationship between the legs and hypotenuse of a 45 degree right triangle in base sqrt(2)." img="/img/demo-triangle.png" title="Triangle" url="/triangle"/>
                    <Demo aria="Golden Ratio Demo" desc="View the relationship between the sides of a golden spiral in base golden ratio." img="/img/demo-golden.png" title="Golden Ratio" url="/golden"/>
                </Grid>
            </Box>
        </>
    );
}

const Demo = (props: {img: string, aria: string, url: string, title: string, desc: string}) => {
    return (
        <>
            <Box>
                <chakra.header
                    textAlign="center"
                    fontFamily="open-sans"
                    fontSize={{base: "25", md: "30"}}
                >
                    {props.title}
                </chakra.header>
                <NextLink
                    href={props.url}
                    passHref
                >
                    <chakra.a aria-label={props.aria}>
                        <chakra.img src={props.img} borderRadius={{base: "10px"}} />
                    </chakra.a>
                </NextLink>
                <chakra.header
                    textAlign="center"
                    fontFamily="open-sans"
                    fontSize={{base: "20"}}
                    lineHeight={{base: "1"}}
                >
                    {props.desc}
                </chakra.header>
            </Box>
        </>
    );
}

export default IndexPage;