'use client';
import { Container, Button, Box } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader } from '@mantine/core';

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
      name: 'TeamGPT',
    },
    {
      id: 2,
      name: 'Viktor @ Iris.ai',
    },
    {
      id: 3,
      name: 'Deyan @ Appolica',
    },
    {
      id: 4,
      name: 'Fireside',
    },
  ];

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        height: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <Box ta="center" mx="auto" w={320}>
        {items.map((team) => (
          <Button
            key={team.id}
            w="100%"
            h={60}
            mt="md"
            variant="gradient"
            gradient={{ from: 'magenta', to: 'red', deg: 45 }}
          >
            {team.name}
          </Button>
        ))}
        <Button w="100%" h={60} mt="md" variant="outline" disabled>
          <Loader size={30} />
        </Button>
      </Box>
    </Container>
  );
}
