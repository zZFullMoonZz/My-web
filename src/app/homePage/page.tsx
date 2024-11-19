'use client'
import { Container, Title, Text, Button, Paper, Image, Card, Flex, Stack } from '@mantine/core';
import classes from './HeroImageRight.module.css';
import imageCard from './Demo.module.css';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';



export default function HeroImageRight() {
    const mockupFile = [
        "/image/1.png",
        "/image/2.png",
        "/image/FuuBuachaom.png"
    ]


    return (
        <>
            <div className={classes.root}>
                <Container size="lg" >
                    <div className={classes.inner}>
                        <div className={classes.content}>
                            <Title className={classes.title}>
                                {' '}
                                <Text
                                    component="span"
                                    inherit
                                    variant="gradient"
                                    gradient={{ from: 'pink', to: 'yellow' }}
                                    style={{ fontSize: ' 5vh', }}
                                >
                                    Kittipoom Kunanuklwong Test Dev
                                </Text>{' '}
                            </Title>
                            <Text className={classes.description} mt={'md'} size='3vh'> ▫ Front-End [DEV]</Text>

                            <Text className={classes.description} mt={30}>
                                Love is like the wind, you can’t see it but you can feel it.
                            </Text>

                            <Button
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                                size="xl"
                                className={classes.control}
                                mt={40}
                            >
                                Get started
                            </Button>
                        </div>
                    </div>
                </Container>
            </div >


            <Paper w={'100%'} style={{
                display: 'flex',
                justifyContent: 'center'
            }} shadow='0px 10px 20px rgb(0, 0, 0)' bg={" linear-gradient(90deg, rgba(138, 30, 201, 0) 10%, rgb(48, 6, 67) 100%)"}>

                <Carousel loop controlsOffset="xl" height={500} classNames={imageCard} p={'lg'} >
                    {mockupFile.map((item, index) => (
                        <Carousel.Slide key={index}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <Image

                                    radius="md"
                                    height={'100%'}
                                    fit="contain"
                                    alt={`Slide ${index}`}
                                    src={item}
                                />
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>

            </Paper>


            <Paper bg="rgba(96, 64, 111)" p="lg" w="100%" >
                <Flex
                    direction={{ base: 'column', xl: 'row' }}
                    gap={'lg'}
                >
                    <Card className={classes.test} w={"100%"} shadow="md" radius="lg" p="xl" bg={"rgba(255,255,255,0.9)"}>
                        <Card

                            bg="red"
                            radius="md"
                            h={150}
                            shadow='0px 0px 20px rgba(0,0,0,0.5)'
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Text c="white" style={{ fontSize: '7vh' }}>About Me</Text>
                        </Card>

                        <Flex
                            className='flex-contentainer'
                            mt="lg"
                            direction={{ base: 'column', xl: 'row' }}
                            gap={'lg'}


                        >

                            <Image
                                src="/image/2.png"
                                alt="Sample Image"
                                radius="xl"
                                w={{ base: '100%', sm: '50%' }}
                            />

                            {/* Text Section */}
                            <Card
                                bg="blue"
                                radius="md"
                                p="md"
                                style={{
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%'
                                }}
                            >
                                <div style={{ flex: 1 }}>
                                    <p style={{ color: 'white', fontSize: '16px', lineHeight: '1.5' }}>
                                        It can be said that no one prefers a life in darkness to a life with a bright future. Sometimes it is unavoidable that darkness comes into our lives, however, we know that when tomorrow comes, all darkness will disappear. With the presence of daylight, we will gain hope and courage. The light of the day will make things appear more vividly to us, so we are not frightened by what we cannot see.
                                    </p>
                                </div>
                                <Button bg="dark">Test</Button>
                            </Card>

                        </Flex>
                    </Card>

                    <Stack>
                        <Image
                            style={{ boxShadow: '15px 30px 20px rgba(0, 0, 0, 0.7)' }}
                            radius={'xl'}
                            h={{ sm: '100%' }}
                            w={{ base: '100%', sm: '100%' }}
                            alt='null'
                            src={"/image/FuuBuachaom.png"}
                        />
                    </Stack>
                </Flex>
            </Paper>


            <Paper bg={'grape'}>

            </Paper>


        </>
    );
}
