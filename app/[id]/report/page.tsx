"use client";

import {
    Container,
    Text
} from "@mantine/core";

const report =  {
    title: "TeamGTP Report",
    content: [
        {
            title: "got no time",
            description: "Some description"
        },
        {
            title: "Some title 2",
            description: "Some description"
        }
    ]
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
            {report.content.map((r) => (
                <>
                    <Text>{r.title}</Text>
                    <br></br>
                    <Text>{r.description}</Text>
                </>
            ))}
        </Container>
    )
}

export default Report;