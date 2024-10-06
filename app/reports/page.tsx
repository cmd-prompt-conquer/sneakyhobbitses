"use client";

import TopicReport from "@/components/TopicReport";
import { useReport } from "@/hooks/useResources";
import {
    Container,
    Button,
    Box
} from "@mantine/core";
import { useRouter } from "next/navigation";

function ReportPage() {
    // const { report } = useReport();
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
            <Container w={320}>
                <Box h="calc(100vh - 300px)" style={{
                    overflowY: "auto"
                }}>
                    <TopicReport teamName={"Test team"} mostCorrectlyAnswered={"asdasd asdasd"} mostWronglyAnswered={"asdasd asd asd"} />
                    <TopicReport teamName={"Test team"} mostCorrectlyAnswered={"asdasd asdasd"} mostWronglyAnswered={"asdasd asd asd"} />
                    <TopicReport teamName={"Test team"} mostCorrectlyAnswered={"asdasd asdasd"} mostWronglyAnswered={"asdasd asd asd"} />
                </Box>
                <Button
                    mt={20}
                    w="100%"
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

export default ReportPage;
