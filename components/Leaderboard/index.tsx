"use client"
import React, { FC } from "react";
import { Box, Title, Table } from '@mantine/core';
import { EmailScore } from "@/models";

interface LeaderboardProps {
    leaderboard: EmailScore[];
}

const obfuscareEmail = (email: string) => {
    // Check if the email contains an '@' character
    const atIndex = email.indexOf('@');
    if (atIndex === -1) {
        // Return the original email if it doesn't contain a domain
        return email;
    }

    // Return the part before the '@'
    return email.substring(0, atIndex);
}

const Leaderbord: FC<LeaderboardProps> = ({ leaderboard }) => {
    return (
        <Box mt={40} w={320}>
            <Title fz="lg" ta="center" c="#9F003E">Leaderboard</Title>
            <hr color="#9F003E"/>
            <Table withRowBorders={false} verticalSpacing={4} mt={15}>
                <Table.Tbody>
                    { leaderboard?.map((r, key) => (
                        <Table.Tr key={key}>
                            <Table.Td c="#9F003E" fw={600}>{obfuscareEmail(r.email)}</Table.Td>
                            <Table.Td c="#2EFF9A" fw={600}>{r.score} pts</Table.Td>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </Box>
    )
}

export default Leaderbord;