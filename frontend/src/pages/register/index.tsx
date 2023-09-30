import { useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import logoImg from '../../../public/images/logo.svg'
import { Flex, Text, Center, Input, Button } from '@chakra-ui/react';

import Link from 'next/link';

export default function Register(){

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   function handleRegister(){
      console.log(name)
      console.log(email)
      console.log(password)
   }

    return(
        <>
         <Head>
            <title>Crie sua conta no BarberPro</title>
         </Head>
         <Flex background="barber.900" height='100vh' alignItems="center" justifyContent="center">
            <Flex width={640} direction="column" p={14} rounded={10} >
                 <Center p={4} >
                    <Image
                        src={logoImg}
                        quality={100}
                        width={320}
                        objectFit='fill'
                        alt='Logo barberpro'
                    />
                 </Center>
                 <Input
                    background="barber.400"
                    variant="filled"
                    size="lg"
                    placeholder='Nome da Barbearia'
                    type='text'
                    textColor="button.default"
                    mb={3}
                    _hover={{ bg: "#1b1c29" }}
                    value={name}
                    onChange={(e) => setName(e.target.value) }
                 />

                <Input
                    background="barber.400"
                    variant="filled"
                    size="lg"
                    placeholder='email@email.com'
                    type='email'
                    textColor="button.default"
                    mb={3}
                    _hover={{ bg: "#1b1c29" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value) }
                 />

                <Input
                    background="barber.400"
                    variant="filled"
                    size="lg"
                    placeholder='********'
                    type='text'
                    textColor="button.default"
                    mb={6}
                    _hover={{ bg: "#1b1c29" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value) }
                 />

                 <Button
                    background="button.cta"
                    mb={6}
                    color="gray.900"
                    size="lg"
                    _hover={{ bg: "#ffb13e" }}
                    onClick={handleRegister}
                 >
                    Cadastrar
                 </Button>

                 <Center mt={4} >
                    <Link href="/login" >
                        <Text cursor="pointer" color="barber.100" >Já possui uma conta? <strong>Faça login</strong></Text>
                    </Link>
                 </Center>
            </Flex>
         </Flex>
        </>
    )
}