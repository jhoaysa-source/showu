// Imports de components de Chakra UI per al formulari
import {
  Box, Button, FormControl, FormLabel, Input,
  Text, VStack, Flex, useToast
} from '@chakra-ui/react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Firebase Auth i Firestore
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

function Register() {
  const navigate = useNavigate()  // Per redirigir després del registre
  const toast = useToast()        // Per mostrar notificacions

  // Estats per controlar els inputs del formulari
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  // Funció per gestionar l’enviament del formulari
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Crea l’usuari amb Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      // Desa el perfil a Firestore amb informació extra
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        username: username,
        createdAt: serverTimestamp()
      })

      // Missatge d'èxit
      toast({
        title: 'Compte creat!',
        description: 'Ja pots iniciar sessió.',
        status: 'success',
        duration: 3000,
        isClosable: true
      })

      // Redirigeix al login
      navigate('/login')
    } catch (error) {
      // Missatge d'error si el registre falla
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 4000,
        isClosable: true
      })
    }
  }

  return (
    <Flex
      bg="#0C0C0C"
      color="white"
      minH="calc(100vh - 100px)"
      align="center"
      justify="center"
      px={4}
    >
      <Box
        bg="#1A1A1A"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxW="400px"
        w="full"
      >
        {/* Títol i subtítol */}
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          Crea un compte
        </Text>
        <Text fontSize="md" mb={8}>
          Uneix-te a la comunitat artística de ShowÜ.
        </Text>

        {/* Formulari de registre */}
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            {/* Camp: nom d'usuari */}
            <FormControl isRequired>
              <FormLabel>Nom d’usuari</FormLabel>
              <Input
                placeholder="Ex: arts_21"
                bg="#0C0C0C"
                border="1px solid #2D2D2D"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>

            {/* Camp: correu electrònic */}
            <FormControl isRequired>
              <FormLabel>Correu electrònic</FormLabel>
              <Input
                type="email"
                placeholder="Ex: artista@email.com"
                bg="#0C0C0C"
                border="1px solid #2D2D2D"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            {/* Camp: contrasenya */}
            <FormControl isRequired>
              <FormLabel>Contrasenya</FormLabel>
              <Input
                type="password"
                bg="#0C0C0C"
                border="1px solid #2D2D2D"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            {/* Botó per enviar el formulari */}
            <Button
              type="submit"
              bg="#03DB88"
              color="black"
              fontWeight="bold"
              w="full"
              _hover={{ bg: 'black', color: '#03DB88', border: '1px solid #03DB88' }}
            >
              Registra’t
            </Button>
          </VStack>
        </form>

        {/* Enllaç per anar al login */}
        <Text mt={4} fontSize="sm" textAlign="center">
          Ja tens un compte?{' '}
          <Text
            as="span"
            color="#03DB88"
            cursor="pointer"
            onClick={() => navigate('/login')}
          >
            Inicia sessió
          </Text>
        </Text>
      </Box>
    </Flex>
  )
}

export default Register