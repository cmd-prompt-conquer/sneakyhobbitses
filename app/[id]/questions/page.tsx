"use client";

import { useState } from "react";

import {
    Container,
} from "@mantine/core";
import Question from "@/components/Question";
import { useTopicById } from "@/hooks/useResources";

const questions = [
    {
        question: "When did Mark start selling websites?",
        options: [
            "at Twitter",
            "post-mortem",
            "in Yosemite",
            "as a teen"
        ],
        correct: "as a teen",
    },
    {
        question: "Why does Mark like tech founders more?",
        options: [
            "more gritty",
            "smarter",
            "more beautiful",
            "more independent"
        ],
        correct: "more beautiful",
    }];


const Questions = ({ params }: { params: { id: number } }) => {
    const { questions, count, isLoading } = useTopicById(params.id);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const nextQuestion = () => {
        if (currentQuestionIndex + 1 == count) {
            submitTest();
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    const submitAnswer = (question: any, answer: any) => {
        console.log(answer);
        nextQuestion();
    }

    const submitTest = () => {
        // TODO: submit test
        console.log("submitting test");
    }

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
            {(questions && questions?.length > 0)
            && <Question question={questions[currentQuestionIndex]} submitAnswer={submitAnswer} />}
        </Container>
    )
}

export default Questions;