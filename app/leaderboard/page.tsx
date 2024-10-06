"use client";

import Leaderbord from "@/components/Leaderboard";
import { useReport } from "@/hooks/useResources";
import {
    Container,
    Button,
    Box
} from "@mantine/core";
import { useRouter } from "next/navigation";

function LeaderboardPage() {
    const { report } = useReport();
    const router = useRouter();
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
            <Container>
                <Box h="calc(100vh - 300px)">
                    {report && <Leaderbord leaderboard={report} />}
                </Box>
                <Button
                    mt={20}
                    w="320px"
                    h={60}
                    onClick={() => { router.push('/'); }}
                    color="#9F003E"
                >
                    Home
                </Button>
            </Container>
        </Container>
    );
}

export default LeaderboardPage;
