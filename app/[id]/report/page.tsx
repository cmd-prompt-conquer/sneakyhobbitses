"use client";

import {
    Container,
    Text
} from "@mantine/core";

const report =  {
    content: ["some report content", "another report content"]
}


const Report = ({ params }: { params: { id: string } }) => {

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
                {report.content[0]}
            </Text>
        </Container>
    )
}

export default Report;