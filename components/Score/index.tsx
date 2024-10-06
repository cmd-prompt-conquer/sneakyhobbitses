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
                <Title c='#2EFF9A'>Super! You scored</Title>
                <Title c='#2EFF9A'>{score}%</Title>
            </Box>
        );
    }
    return (
        <Box>
            <Title c='#9F003E'>You scored</Title>
            <Title c='#9F003E'>{score}%</Title>
        </Box>
    );
        
}

export default Score;