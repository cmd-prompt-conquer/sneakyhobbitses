"use client"
import React, { FC } from "react";
import { Container, Button, Box, Title, Loader } from '@mantine/core';
import { Question as QuestionModel } from "@/models";

interface QuestionProps {
    submitAnswer: (
        question: QuestionModel,
        answer: string,
    ) => void;
    question: QuestionModel;
    isLoading: boolean;
}

const Question: FC<QuestionProps> = ({ question, submitAnswer, isLoading }) => {
    const options = question.options.map((option, key) => (
        <Button
            mt={15}
            w="100%"
            h={60}
            key={key}
            onClick={() => {submitAnswer(question, option)}}
            variant='outline'
            disabled={isLoading}
            c='white'
            color="#9F003E"
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
            {isLoading ?
            <Loader/>
            :
            <Box ta="center" mx="auto" w={320}>
                <Title size={48} lh="1" ta="left" mb={100} c='#9F003E'>{question.question}</Title>
                {options}
            </Box>}
        </Container>
    );
}

export default Question;