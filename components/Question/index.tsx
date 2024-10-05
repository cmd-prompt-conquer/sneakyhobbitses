"use client"
import React, { FC } from "react";
import { Container, Button, Box, Text } from '@mantine/core';
import { Question as QuestionModel } from "@/models";

interface QuestionProps {
    submitAnswer: (
        question: QuestionModel,
        answer: string,
    ) => void;
    question: QuestionModel;
}

const Question: FC<QuestionProps> = ({ question, submitAnswer }) => {
    const options = question.options.map((option, key) => (
        <Button
            mt={20}
            w="100%"
            h={60}
            key={key}
            onClick={() => {submitAnswer(question, option)}}
            variant='outline'
        >
            {option}
        </Button>
    ));

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
            <Box ta="center" mx="auto" w={320}>
                <Text size="xl" mb={20}>{question.question}</Text>
                {options}
            </Box>
        </Container>
    );
}

export default Question;