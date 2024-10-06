"use client"
import React, { FC } from "react";
import { Box, Title, Text, Space } from '@mantine/core';

interface TopicReportProps {
    teamName: string;
    mostCorrectlyAnswered: string;
    mostWronglyAnswered: string;
}

const Score: FC<TopicReportProps> = ({ teamName, mostCorrectlyAnswered, mostWronglyAnswered }) => {
    return (
        <Box w={320} mb={50}>
            <Title fz={48} c="#2EFF9A">{teamName}</Title>
            <Text fw={600} fz={24} c='#E7045C'>Most correctly answered question(s)</Text>
            <hr color="#9F003E" />
            <Text c='white'>{mostCorrectlyAnswered}</Text>
            <Space/>
            <Text fw={600} fz={24} c='#E7045C'>Question most people answer wrong</Text>
            <hr color="#9F003E" />
            <Text c='white'>{mostWronglyAnswered}</Text>
        </Box>
    );

}

export default Score;