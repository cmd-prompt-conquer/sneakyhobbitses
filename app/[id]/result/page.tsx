"use client";

import { useReportById } from "@/hooks/useResources";
import {
    Container,
    Text,
    Box
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

            {report?.map((r, key) => (
                <Box key={key}>
                    <Text>{r.email} - {r.score}pts</Text>
                </Box>
            ))}
        </Container>
    )
}

export default Result;