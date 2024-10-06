"use client"
import React, { FC } from "react";
import { Button, Box, Title } from '@mantine/core';

interface ScoreProps {
    score: number;
}

const Score: FC<ScoreProps> = ({ score }) => {
    if (score >= 50) {
        return (
            <Box>
                <Title>Super! You scored</Title>
                <Title>{score}</Title>
            </Box>
        );
    }
    return (
        <Box>
            <Title>You scored</Title>
            <Title>{score}</Title>
        </Box>
    );
        
}

export default Score;