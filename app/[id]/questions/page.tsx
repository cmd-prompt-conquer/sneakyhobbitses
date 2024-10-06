"use client";

import { useState, useRef } from "react";

import {
    Container,
} from "@mantine/core";
import Question from "@/components/Question";
import { useTopicById } from "@/hooks/useResources";
import { Question as QestionModel } from "@/models";
import { useRouter } from "next/navigation";

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
    const router = useRouter();
    const { questions, count } = useTopicById(params.id);
    const [answers, setAnswers] = useState<string[]>([]);
    const answersRef = useRef(answers); // Ref to hold the latest answers
    const [isLoading, setIsLoading] = useState(false);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const nextQuestion = () => {
        if (currentQuestionIndex + 1 == count) {
            submitTest();
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    const submitAnswer = (question: QestionModel, answer: string) => {
        setAnswers((prevAnswers) => {
            setIsLoading(true);
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[currentQuestionIndex] = answer;
            answersRef.current = updatedAnswers;
            setIsLoading(false);
            nextQuestion();
            return updatedAnswers;
        });
    }

    const submitTest = async () => {
        if (questions == undefined) {
            return;
        }
        setIsLoading(true);
        let correctAnswers = 0;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].answer == answersRef.current[i]) {
                correctAnswers++;
            }
        }
        console.log(correctAnswers);
        try {
            const data = new URLSearchParams({
                email: 'nikolay.slavkov96@gmail.com',
                score: correctAnswers / questions.length * 100 + '',
                topic_id: params.id + '',
            });
            const res = await fetch('/api/v1/report', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data.toString()
            })
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const jsonResponse = await res.json();
        } catch (err) {
            console.error('Error:', err);
        }
        setIsLoading(false);
        router.push(`/${params.id}/result`);
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
            && <Question question={questions[currentQuestionIndex]} submitAnswer={submitAnswer} isLoading={isLoading} />}

            
        </Container>
    )
}

export default Questions;