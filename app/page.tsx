"use client"
import { 
  Container,
  Button,
  Box
 } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (!email) {
      router.push('/login');
    }
  }, [router]);

  const items = [
    {
      id: 1,
      name: 'TeamGPT'
    },
    {
      id: 2,
      name: 'Viktor @ Iris.ai'
    },
    {
      id: 3,
      name: 'Deyan @ Appolica'
    },
    {
      id: 4,
      name: 'Fireside'
    },
  ];

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
      <Box ta="center" mx="auto" w={320}>
        {items.map((team) => <Button key={team.id} w="100%" h={60} mt="md" variant="outline">{team.name}</Button>)}
      </Box>
    </Container>
  );
}
