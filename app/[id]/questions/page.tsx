"use client";

import { useState, useRef } from "react";

import {
    Container,
    Image,
    Button
} from "@mantine/core";
import Question from "@/components/Question";
import { useTopicById, useReportById } from "@/hooks/useResources";
import { Question as QestionModel, ResultResponse } from "@/models";
import { useRouter } from "next/navigation";
import Score from "@/components/Score";
import Leaderbord from "@/components/Leaderboard";


const Questions = ({ params }: { params: { id: number } }) => {
    const router = useRouter();
    const { questions, topic } = useTopicById(params.id);
    const [answers, setAnswers] = useState<string[]>([]);
    const answersRef = useRef(answers);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<ResultResponse | null>(null);
    const { report } = useReportById(params.id);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const nextQuestion = () => {
        if (currentQuestionIndex + 1 == questions?.length) {
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

        try {
            const res = await fetch('/api/v1/report', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('email'),
                    score: correctAnswers / questions.length * 100 + '',
                    topic_id: params.id,
                    answers: answersRef.current
                })
            })
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const jsonResponse: ResultResponse = await res.json();
            setResult(jsonResponse);
        } catch (err) {
            console.error('Error:', err);
        }
        setIsLoading(false);
    }

    const resultUI = (
        <Container style={{
            maxWidth: "320px",
            padding: "0px"
        }}>
            {result && <Score score={result.score} />}
            {result && result.score < 50 ? <Button
                mt={20}
                w="100%"
                h={60}
                onClick={() => { window.location.reload(); }}
                variant='outline'
                c='white'
                color="#9F003E"
            >
                Retake
            </Button> :
            <Button
                mt={20}
                w="100%"
                h={60}
                onClick={() => { navigator.clipboard.writeText(topic?.reward || "") }}
                variant='outline'
                c='white'
                color="#9F003E"
            >
                    {topic?.reward}
                <Image src="/copy.svg" alt="copy" width={20} height={20} style={{
                    paddingLeft: "5px"
                }} />
            </Button>}
            <Button
                mt={20}
                w="100%"
                h={60}
                onClick={() => { router.push('/'); }}
                color="#9F003E"
            >
                Home
            </Button>
            {report && <Leaderbord leaderboard={report} />}
        </Container>
    )
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
            {( result == null && questions && questions?.length > 0)
            && <Question question={questions[currentQuestionIndex]} submitAnswer={submitAnswer} isLoading={isLoading} />} 
            {result && resultUI}
        </Container>
    )
}

export default Questions;