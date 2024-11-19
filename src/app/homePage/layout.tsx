'use client';

import React from 'react';
import {
    AppShell, Burger, Group, Button, Box, HoverCard, UnstyledButton, Text, SimpleGrid,
    ThemeIcon, Anchor, Center, ScrollArea, Collapse, useMantineTheme, rem, TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconNotification, IconCode, IconBook, IconChartPie3, IconFingerprint, IconCoin,
    IconChevronDown, IconSearch, IconArrowRight
} from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css'; // Ensure this file exists or adjust as needed

const mockdata = [
    { icon: IconCode, title: 'Open source', description: 'This Pokémon’s cry is very loud and distracting' },
    { icon: IconCoin, title: 'Free for everyone', description: 'The fluid of Smeargle’s tail secretions changes' },
    { icon: IconBook, title: 'Documentation', description: 'Yanma is capable of seeing 360 degrees without' },
    { icon: IconFingerprint, title: 'Security', description: 'The shell’s rounded shape and the grooves on its.' },
    { icon: IconChartPie3, title: 'Analytics', description: 'This Pokémon uses its flying ability to quickly chase' },
    { icon: IconNotification, title: 'Notifications', description: 'Combusken battles with the intensely hot flames it spews' },
];


export default function HeaderComponent({ children }: { children: React.ReactNode; }) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500} style={{ color: 'white', fontWeight: 'bold' }}>{item.title}</Text>
                    <Text size="xs" c="yellow" >{item.description}</Text>
                </div>
            </Group>
        </UnstyledButton >
    ));

    return (
        <AppShell
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
        >
            <AppShell.Header bg={'rgba(0,0,0,0)'} bd={'none'} w={'auto'} mt={'lg'}>
                <header className={classes.header} >
                    <Group justify="space-between" h="100%">
                        <Group>
                            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" color='white' />
                        </Group>
                        <Group h="100%" gap={0} visibleFrom="sm">
                            <Button
                                variant="subtle"
                                color="rgba(240, 22, 203, 1)"
                                size="md"
                                radius="md"
                                component='a'
                                href="/homePage"
                                h='45px'
                                c={'white'}
                                className={`${classes.link} ${classes.homeLink}`}
                            >
                                Home
                            </Button>

                            <Group gap={0}>
                                <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                                    <HoverCard.Target>
                                        <Button
                                            variant="subtle"
                                            color="rgba(240, 22, 203, 1)"
                                            size="md"
                                            radius="md"
                                            component='a'
                                            href="/homePage"
                                            h='45px'
                                            c={'white'}
                                            className={classes.link}
                                        >
                                            <Center inline>
                                                <Box component="span" mr={5} fz='1em'>Features</Box>
                                                <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
                                            </Center>
                                        </Button>
                                    </HoverCard.Target>

                                    <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                        <Group justify="space-between" px="md">
                                            <Text>Features</Text>
                                            <Anchor href="#" fz="xs">View all</Anchor>
                                        </Group>


                                        <SimpleGrid cols={2} spacing={0}>
                                            {links}
                                        </SimpleGrid>

                                        <div className={classes.dropdownFooter}>
                                            <Group justify="space-between">
                                                <div>
                                                    <Text fw={500} fz="sm">Get started</Text>
                                                    <Text size="xs" c="dimmed">Their food sources have decreased, and their numbers</Text>
                                                </div>
                                                <Button variant="default">Get started</Button>
                                            </Group>
                                        </div>
                                    </HoverCard.Dropdown>
                                </HoverCard>

                                <Button
                                    variant="subtle"
                                    color="rgba(240, 22, 203, 1)"
                                    size="md"
                                    radius="md"
                                    component='a'
                                    href="/homePage/aboutMe"
                                    h='45px'
                                    c={'white'}
                                    className={classes.link}
                                >
                                    Aboute
                                </Button>

                                <Button
                                    variant="subtle"
                                    color="rgba(240, 22, 203, 1)"
                                    size="md"
                                    radius="md"
                                    component='a'
                                    href="/homePage"
                                    h='45px'
                                    c={'white'}
                                    className={classes.link}
                                >
                                    Academy
                                </Button>
                            </Group>
                        </Group>

                        <Group visibleFrom="sm">
                            <Button variant="filled" color="rgba(84, 214, 136, 1)" size="md" radius="md">Log in</Button>
                            <Button>Sign up</Button>
                        </Group>
                    </Group>
                </header>
            </AppShell.Header>






            <AppShell.Navbar p="md" bg={"rgba(96, 64, 111)"}>

                <Burger onClick={toggleMobile} hiddenFrom="sm" size="sm" color='white' ></Burger>
                <TextInput
                    mt={'sm'}
                    radius="lg"
                    size="md"
                    placeholder="Search questions"
                    rightSectionWidth={42}
                    leftSection={
                        <IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    }
                    rightSection={
                        <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    }
                />


                <ScrollArea mt={'md'} h={`calc(100vh - ${rem(80)})`} mx="-md">


                    <a href="/homePage" className={classes.link} style={{ color: 'white', fontSize: '23px', fontWeight: 'bold' }}>Home</a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks} style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                        <Center inline>
                            <Box component="span" mr={5}>Features</Box>
                            <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a href="/homePage/aboutMe" className={classes.link} style={{ color: 'white', fontSize: '23px', fontWeight: 'bold' }}>Aboute</a>
                    <a href="#" className={classes.link} style={{ color: 'white', fontSize: '23px', fontWeight: 'bold' }}>Academy</a>
                    <Group mt={'md'} justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>

                </ScrollArea>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell >
    );
}
