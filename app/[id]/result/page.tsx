"use client";

import {
    Container,
    Text
} from "@mantine/core";

const result = {
    score: 52,

}


const Result = ({ params }: { params: { id: string } }) => {
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
            <Text>
                Score: {result.score}%
            </Text>
        </Container>
    )
}

export default Result;