"use client";

import Leaderbord from "@/components/Leaderboard";
import Score from "@/components/Score";
import { useReportById } from "@/hooks/useResources";
import {
    Container,
    Button,
    Box
} from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Result = ({ params }: { params: { id: number } }) => {
    const { report } = useReportById(params.id);
    const router = useRouter();
    const reward = 'https://meet.goog.com/tkk...';
    return (
        <Container
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                padding: '20px',
                boxSizing: 'border-box',
            }}
        >
            <Score score={69}/>

            <br />
            <Box ta="center" mx="auto" w={320}>
                <Button
                    mt={20}
                    w="100%"
                    h={60}
                    onClick={() => { router.refresh(); }}
                    variant='outline'
                >
                    Retake
                </Button>
                <Button
                    mt={20}
                    w="100%"
                    h={60}
                    onClick={() => { navigator.clipboard.writeText(reward)} }
                    variant='outline'
                >
                   {reward}
                    <Image src="/copy.svg" alt="copy" width={20} height={20} style={{
                        paddingLeft: "5px"
                    }} />
                </Button>
                <Button
                    mt={20}
                    w="100%"
                    h={60}
                    onClick={() => { router.push('/'); }}
                >
                    Home
                </Button>
            </Box>
            <br/>
            {report && <Leaderbord leaderboard={report} /> }
        </Container>
    )
}

export default Result;