"use client";

import {
    TextInput,
    Button,
    Box,
    Container,
    Image,
    FileButton,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [desc, setDescription] = useState('');
    const [reward, setReward] = useState('');
    const [file, setFile] = useState<File|null>(null);
    const router = useRouter();

    const handleSubmit = () => {
        const formData = new FormData();
        const options = {
            'email': email,
            'name': name,
            'desc': desc,
            'reward': reward,
        }
        formData.append('options', JSON.stringify(options));
        if (file != null) {
            formData.append('file', file, file?.name);
        }
        fetch('/api/v1/generate', {
            method: 'POST',
            body: formData,
        }).then((res) => {
            if (res.status == 200) {
                router.push('/');
            }
        });
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
                    placeholder="Presentator email"
                    onChange={(e) => { setEmail(e.currentTarget.value) }}
                    styles={(theme) => ({
                        root: {
                            width: '100%',
                        },
                        input: {
                            height: '60px',
                            marginBottom: '20px',
                        },
                    })}/>
                <TextInput
                    value={name}
                    required
                    placeholder="Presentation name"
                    onChange={(e) => { setName(e.currentTarget.value) }}
                    styles={(theme) => ({
                        root: {
                            width: '100%',
                        },
                        input: {
                            height: '60px',
                            marginBottom: '20px',
                        },
                    })}/>
                <TextInput
                    value={desc}
                    required
                    placeholder="Presentation description"
                    onChange={(e) => { setDescription(e.currentTarget.value) }}
                    styles={(theme) => ({
                        root: {
                            width: '100%',
                        },
                        input: {
                            height: '60px',
                            marginBottom: '20px',
                        },
                    })}/>
                <TextInput
                    value={reward}
                    required
                    placeholder="Reward"
                    onChange={(e) => { setReward(e.currentTarget.value) }}
                    styles={(theme) => ({
                        root: {
                            width: '100%',
                        },
                        input: {
                            height: '60px',
                            marginBottom: '20px',
                        },
                    })}/>
                <FileButton onChange={setFile}>
                {(props) => (
                    <span {...props}>
                    &nbsp;Upload&nbsp;
                    </span>
                )}
                </FileButton>
                <Button w="100%" h={60} mt="md" onClick={handleSubmit}>Generate</Button>
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
