"use client";

import {
    TextInput,
    Button,
    Box,
    Container,
    Image,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleSubmit = () => {
        if (email != "") {
            localStorage.setItem('email', email);
            router.push('/');
        }
    };
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
                <TextInput
                    value={email}
                    required
                    placeholder="@ Your email"
                    onChange={(e) => { setEmail(e.currentTarget.value) }}
                    styles={(theme) => ({
                        root: {
                            width: '100%',
                        },
                        input: {
                            height: '60px',
                        },
                    })}/>
                <Button w="100%" h={60} mt="md" onClick={handleSubmit}>Join</Button>
            </Box>
            <Image
                src="/olaboard.svg"
                w={150}
                style={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            ></Image>
        </Container>
    );
}

export default Login;
