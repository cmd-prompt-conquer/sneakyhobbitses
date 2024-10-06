"use client";

import Leaderbord from "@/components/Leaderboard";
import Score from "@/components/Score";
import { useReportById } from "@/hooks/useResources";
import {
    Container,
    Title
} from "@mantine/core";

const result = {
    score: 52,

}

const Result = ({ params }: { params: { id: number } }) => {
    const { report } = useReportById(params.id);
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
            <Title>Leaderbord</Title>
            {report && <Leaderbord leaderboard={report} /> }
        </Container>
    )
}

export default Result;