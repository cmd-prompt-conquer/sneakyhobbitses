"use client"
import React, { FC } from "react";
import { Box, Text, Title } from '@mantine/core';
import { EmailScore } from "@/models";

interface LeaderboardProps {
    leaderboard: EmailScore[];
}

const Leaderbord: FC<LeaderboardProps> = ({ leaderboard }) => {
    return (
        <Box>
            <Title>Leaderbord</Title>
            <hr/>
            { leaderboard?.map((r, key) => (
                <Box key={key}>
                    <Text>{r.email} - {r.score}pts</Text>
                </Box>
            ))}
        </Box>
    )

}

export default Leaderbord;