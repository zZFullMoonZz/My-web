"use client";
import { Image, BackgroundImage, Card, Center, Flex, Stack, Text, Slider, Button, Group, SimpleGrid, Skeleton } from '@mantine/core';
import { Volume2, VolumeOff } from 'tabler-icons-react';
import React, { useState, useRef } from 'react';
import '../page.module.css'
export default function HAPPY_BIRDTHDAY() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [duration, setDuration] = useState(0);
    const [loading, setLoading] = useState(true);


    // ฟังก์ชันที่ใช้สำหรับแปลงเวลาของเพลงเป็นรูปแบบ mm:ss
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // คำนวณเวลาของเพลงเมื่อโหลด
    const handleAudioLoadedMetadata = () => {
        const audio = audioRef.current;
        if (audio) {
            setDuration(audio.duration);
        }
    };

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleAudioTimeUpdate = () => {
        const audio = audioRef.current;
        if (audio) {
            const progress = (audio.currentTime / audio.duration) * 100;
            setProgress(progress);
        }
    };

    const handleSliderChange = (value: number) => {
        const audio = audioRef.current;
        if (audio) {
            audio.currentTime = (value / 100) * audio.duration;
        }
    };

    const handleVolumeChange = (value: number) => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = value / 100; // ปรับระดับเสียงจาก 0 ถึง 1
            setVolume(value / 100); // อัปเดต state สำหรับ volume
        }
    };

    return (
        <>
            <Card h={'98vh'} w={'100%'} bg={'rgb(122, 107, 140)'} shadow='0px 0px 20px black'>
                <BackgroundImage
                    src="/image/HBD.png"
                    radius="lg"
                    h={'100%'}
                    w={'100%'}
                >
                    <Center>
                        <Stack mt={'40vh'}>
                            <Text
                                ta="center"
                                style={{
                                    fontSize: 80,
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    background: 'linear-gradient(45deg, rgba(240, 240, 240, 1), rgba(255, 0, 255, 1))',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                    textShadow: '0px 0px 5px rgba(235, 67, 156, 0.8), 0px 0px 50px rgba(235, 67, 156, 0.8), 0px 0px 1px rgba(255, 255, 255, 1)',
                                }}
                                variant="gradient"
                            >
                                Happy Birthday to Nate
                            </Text>
                            <Text ta={'center'}
                                style={{
                                    fontSize: 70, fontWeight: 600

                                }}
                                variant="gradient"
                                gradient={{ from: 'rgba(240, 240, 240, 1)', to: 'rgba(240, 240, 240, 1)', deg: 90 }}>
                                27 Year Old
                            </Text>
                        </Stack>
                    </Center>
                </BackgroundImage>
            </Card>

            <Card bg={'rgba(122, 107, 140, 0.5)'}>
                <Flex gap={10} justify={'center'} align={'center'}>
                    <Card mt={'lg'} radius={'lg'} w={'70vh'} bg={'rgba(255,255,255, 0.4)'} shadow="0px 0px 10px rgb(122, 107, 140)">
                        <Center>
                            <Flex gap={20}>
                                <Image
                                    radius={'md'}
                                    src={'/image/A Thousand Years.png'}
                                    alt="not image"
                                    w={'22vh'}
                                />
                                <Card mt={'5vh'} h={'28vh'} radius={'lg'} bg={'rgba(255,255,255, 0.9)'} w={'40vh'} shadow="0px 0px 10px #ffff">
                                    <Stack>
                                        <Text ta={'center'} style={{ fontSize: 18, fontWeight: 600 }}>
                                            A Thousand Years
                                        </Text>

                                        <audio
                                            ref={audioRef}
                                            src="/audio/A-Thousand-Years.mp3"
                                            onTimeUpdate={handleAudioTimeUpdate}
                                            onLoadedMetadata={handleAudioLoadedMetadata} // ตั้งค่า duration เมื่อโหลดเสร็จ
                                        />

                                        <Slider
                                            color="rgb(122, 107, 140)"
                                            size="sm"
                                            value={progress}
                                            onChange={handleSliderChange}
                                            showLabelOnHover={false}
                                            marks={[
                                                { value: 0, label: formatTime(0) },
                                                { value: 100, label: formatTime(duration) }, // แสดงเวลาเต็มของเพลง
                                            ]}
                                        />
                                        <Text ta={'center'} style={{ fontSize: 16 }}>
                                            {formatTime((progress / 100) * duration)} / {formatTime(duration)} {/* แสดงเวลาเล่นและเวลาที่เหลือ */}
                                        </Text>
                                        <Center>
                                            <Group>
                                                <VolumeOff size={20} style={{ color: volume === 0 ? 'rgb(122, 107, 140)' : '#ccc' }} />
                                                <Slider
                                                    w={200}
                                                    color="rgb(122, 107, 140)"
                                                    size="sm"
                                                    value={volume * 100}
                                                    onChange={handleVolumeChange}
                                                    marks={[
                                                        { value: 0, label: 'Mute' },
                                                        { value: 100, label: 'Max' },
                                                    ]}
                                                    showLabelOnHover
                                                />
                                                <Volume2 size={20} style={{ color: volume === 0 ? '#ccc' : 'rgb(122, 107, 140)' }} />
                                            </Group>
                                        </Center>
                                        <Center>
                                            <Button w={'10vh'} mt={'lg'} onClick={handlePlayPause}>
                                                {isPlaying ? 'Pause' : 'Play'}
                                            </Button>
                                        </Center>
                                    </Stack>
                                </Card>
                            </Flex>
                        </Center>
                    </Card>
                </Flex>
            </Card>

            <SimpleGrid
                cols={1}
                spacing="xl"
                style={{
                    backgroundColor: 'rgb(122, 107, 140)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0px 0px 20px rgba(255, 182, 193, 0.7)',
                }}
            >
                <Card
                    bg="linear-gradient(135deg, rgba(122, 107, 140, 1), rgba(235, 67, 156, 0.8))"
                    radius="lg"
                    shadow="0px 0px 20px rgba(0, 0, 0, 0.2)"
                    style={{
                        padding: '2rem',
                    }}
                >
                    <Skeleton visible={loading}>
                        <Flex
                            direction={{ base: 'column', md: 'row' }}
                            align="center"
                            justify="space-between"
                            gap="lg"
                        >
                            <Image
                                src="/image/Profile.png"
                                alt="Profile Picture"
                                height="auto"
                                w={{ base: '100%', md: '35vh' }}
                                radius="xl"
                                style={{
                                    boxShadow: '0px 0px 18px rgba(235, 67, 156, 0.8)',
                                }}
                            />

                            <Flex
                                direction="column"
                                align="center"
                                justify="center"
                                style={{ textAlign: 'center', padding: '1rem' }}
                            >
                                <Text
                                    mt="lg"
                                    style={{
                                        fontSize: '2.5rem',
                                        fontWeight: '600',
                                        color: '#FFFFFF',
                                        textShadow: '0px 0px 5px rgba(255, 255, 255, 0.8)',
                                    }}
                                >
                                    วันนี้วันเกิดไครกันน้าา ?
                                </Text>
                                <Text
                                    mt="lg"
                                    style={{
                                        fontSize: '2.5rem',
                                        fontWeight: '600',
                                        color: '#FFFFFF',
                                        textShadow: '0px 0px 5px rgba(255, 255, 255, 0.8)',
                                    }}
                                >
                                    เอ๋าวันเกิดคนเก่งของเค้านี่ไง
                                </Text>
                            </Flex>
                        </Flex>
                    </Skeleton>
                </Card>

            </SimpleGrid>
            <Button onClick={() => setLoading((l) => !l)}>
                Toggle Skeleton
            </Button>

            <Card>

            </Card>

        </>
    );
}
