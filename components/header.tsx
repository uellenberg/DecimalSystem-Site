import {AnimatePresence, motion, useElementScroll, useViewportScroll} from "framer-motion";
import React from "react";
import {Icon, Box, chakra, Flex, HStack, IconButton, Link, useColorMode, useColorModeValue, useDisclosure, IconButtonProps, BoxProps, useBreakpointValue, Center} from "@chakra-ui/react"
import {useUpdateEffect} from "@reach/utils";
import {FaMoon, FaSun, FaBars, FaTimes} from "react-icons/fa";
import NextLink from "next/link";
import {RemoveScroll} from "react-remove-scroll";
import Logo from "./logo";
import MenuLink from "./menu/menuLink";
import MenuCategory from "./menu/menuCategory";
import MenuItems from "./menu/menuItems";

const GithubIcon = (props: React.ComponentProps<"svg">) => (
    <svg viewBox="0 0 21 21" width="20" height="20" {...props}>
        <path
            fill="currentColor"
            d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
        />
    </svg>
);

const NPMIcon = (props: React.ComponentProps<"svg">) => (
    <svg viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" {...props}>
        <path d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" fill="currentColor"/>
    </svg>
);

const HeaderContent = () => {
    const mobileNav = useDisclosure();

    const {toggleColorMode: toggleMode} = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

    useUpdateEffect(() => {
        mobileNavBtnRef.current?.focus();
    }, [mobileNav.isOpen]);

    return (
        <>
            <HStack w="100%" h="100%" px="6" align="center" justify="space-between">
                <Flex align="center">
                    <NextLink href="/" passHref>
                        <chakra.a display="block" aria-label="DecimalSystem Homepage">
                            <Logo/>
                        </chakra.a>
                    </NextLink>
                </Flex>

                <Flex
                    justify="flex-end"
                    w="100%"
                    align="center"
                    maxW="1100px"
                    display={{ base: "none", md: "flex" }}
                >
                    <Link
                        href="/docs"
                        mr="3"
                        aria-label="Docs Page"
                    >
                        <chakra.header fontFamily="alata" fontSize="20">
                            Docs
                        </chakra.header>
                    </Link>

                    <Link
                        href="/docs/start"
                        mr="3"
                        aria-label="Getting Started Page"
                    >
                        <chakra.header fontFamily="alata" fontSize="20">
                            Getting Started
                        </chakra.header>
                    </Link>
                </Flex>

                <HStack spacing="5">
                    <IconButton
                        size="md"
                        fontSize="lg"
                        aria-label={`Switch to ${text} mode`}
                        variant="ghost"
                        color="gray.400"
                        onClick={toggleMode}
                        icon={<SwitchIcon/>}
                    />

                    <IconButton
                        ref={mobileNavBtnRef}
                        display={{ base: "flex", md: "none" }}
                        aria-label="Open menu"
                        fontSize="20px"
                        color={useColorModeValue("gray.800", "inherit")}
                        variant="ghost"
                        icon={<FaBars/>}
                        onClick={mobileNav.onOpen}
                    />
                </HStack>

                <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                    <Link
                        isExternal
                        aria-label="Go to DecimalSystem's GitHub page"
                        href="https://github.com/uellenberg/DecimalSystem"
                    >
                        <Icon
                            as={GithubIcon}
                            display="block"
                            transition="color 0.2s"
                            w="5"
                            h="5"
                            _hover={{color: "gray.600"}}
                        />
                    </Link>

                    <Link
                        isExternal
                        aria-label="Go to DecimalSystem's NPM page"
                        href="https://npmjs.com/package/decimalsystem"
                    >
                        <Icon
                            as={NPMIcon}
                            display="block"
                            transition="color 0.2s"
                            w="5"
                            h="5"
                            _hover={{color: "gray.600"}}
                        />
                    </Link>
                </HStack>
            </HStack>

            <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
        </>
    );
}

interface MobileNavContentProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export function MobileNavContent(props: MobileNavContentProps) {
    const { isOpen, onClose } = props;
    const closeBtnRef = React.useRef<HTMLButtonElement>();

    /**
     * Scenario: Menu is open on mobile, and user resizes to desktop/tablet viewport.
     * Result: We'll close the menu
     */
    const showOnBreakpoint = useBreakpointValue({ base: true, lg: false });

    React.useEffect(() => {
        if (showOnBreakpoint == false) {
            onClose();
        }
    }, [showOnBreakpoint]);

    useUpdateEffect(() => {
        if (isOpen) {
            requestAnimationFrame(() => {
                closeBtnRef.current?.focus();
            });
        }
    }, [isOpen]);

    const [_, setShadow] = React.useState<string>();

    return (
        <AnimatePresence>
            {isOpen && (
                <RemoveScroll forwardProps>
                    <motion.div
                        transition={{ duration: 0.08 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Flex
                            direction="column"
                            w="100%"
                            bg={useColorModeValue("white", "gray.800")}
                            h="100vh"
                            overflow="auto"
                            pos="absolute"
                            top="0"
                            left="0"
                            zIndex={20}
                            pb="8"
                        >
                            <Box>
                                <Flex justify="space-between" px="6" pt="5" pb="4">
                                    <Logo/>
                                    <IconButton
                                        display={{ base: "flex", md: "none" }}
                                        aria-label="Close menu"
                                        fontSize="20px"
                                        color={useColorModeValue("gray.800", "inherit")}
                                        variant="ghost"
                                        icon={<FaTimes/>}
                                        onClick={onClose}
                                    />
                                </Flex>
                            </Box>

                            <ScrollView
                                onScroll={(scrolled) => {
                                    setShadow(scrolled ? "md" : undefined)
                                }}
                            >
                                <MenuLink text="Github" url="https://github.com/uellenberg/DecimalSystem" aria="Github Page" category isExternal/>
                                <MenuLink text="NPM" url="https://npmjs.com/package/decimalsystem" aria="NPM Page" category isExternal/>
                                <MenuItems/>
                            </ScrollView>
                        </Flex>
                    </motion.div>
                </RemoveScroll>
            )}
        </AnimatePresence>
    );
}

const ScrollView = (props: BoxProps & { onScroll?: any }) => {
    const { onScroll, ...rest } = props;
    const [y, setY] = React.useState(0);
    const elRef = React.useRef<any>();
    const { scrollY } = useElementScroll(elRef);
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()));
    }, [scrollY]);

    useUpdateEffect(() => {
        onScroll?.(y > 5);
    }, [y]);

    return (
        <Box
            ref={elRef}
            flex="1"
            id="routes"
            overflow="auto"
            px="6"
            pb="6"
            {...rest}
        />
    );
}

const Header = () => {
    const [_, setY] = React.useState(0);
    const ref = React.useRef<HTMLHeadingElement>();
    const bg = useColorModeValue("white", "gray.800");

    const {scrollY} = useViewportScroll();
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()));
    }, [scrollY]);

    return (
        <chakra.header
            ref={ref}
            transition="box-shadow 0.2s, background-color 0.2s"
            shadow="md"
            pos="sticky"
            top="0"
            zIndex="3"
            bg={bg}
            left="0"
            right="0"
            width="full"
        >
            <chakra.div height="4.5rem" mx="auto" maxW="8xl">
                <HeaderContent/>
            </chakra.div>
        </chakra.header>
    );
}

export default Header;