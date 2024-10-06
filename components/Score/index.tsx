"use client"
import React, { FC } from "react";
import { Button, Box, Title } from '@mantine/core';

interface ScoreProps {
    score: number;
}

const Score: FC<ScoreProps> = ({ score }) => {
    if (score >= 50) {
        return (
            <Box w={320}>
                <Title fz={50} c='#2EFF9A'>Super! You scored</Title>
                <Title fz={60} c='#2EFF9A'>{score}%</Title>
            </Box>
        );
    }
    return (
        <Box w={320}>
            <Title fz={50} c='#9F003E'>You scored</Title>
            <Title fz={60} c='#9F003E'>{score}%</Title>
        </Box>
    );
        
}

export default Score;