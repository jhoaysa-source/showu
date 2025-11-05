// src/pages/Login.jsx
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  Flex,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

function Login() {
  const navigate = useNavigate()
  const toast = useToast()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      // Obtenir dades de Firestore
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const userData = docSnap.data()
        console.log('Usuari loguejat:', userData)

        toast({
          title: 'Sessió iniciada!',
          description: `Benvingut/da, ${userData.username}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        })

        navigate('/perfil') // Canvia la ruta si cal
      } else {
        throw new Error('No s’ha trobat el perfil de l’usuari.')
      }
    } catch (error) {
      console.error(error)
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return (
    <Flex
      bg="#0C0C0C"
      color="white"
      minH="90vh"
      align="center"
      justify="center"
      px={4}
      position="relative"
    >
      <Box
        bg="#1A1A1A"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxW="400px"
        w="full"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          Inicia sessió
        </Text>
        <Text fontSize="md" mb={8}>
          Accedeix al teu compte per gestionar el teu perfil.
        </Text>

        <form onSubmit={handleSubmit}>
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>Correu electrònic</FormLabel>
              <Input
                type="email"
                placeholder="Ex: artista@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="#0C0C0C"
                border="1px solid #2D2D2D"
                color="white"
                _placeholder={{ color: 'gray.500' }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Contrasenya</FormLabel>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                bg="#0C0C0C"
                border="1px solid #2D2D2D"
                color="white"
                _placeholder={{ color: 'gray.500' }}
              />
            </FormControl>

            <Button
              type="submit"
              width="100%"
              bg="#03DB88"
              color="black"
              fontWeight="bold"
              _hover={{ bg: 'black', color: '#03DB88', border: '1px solid #03DB88' }}
            >
              Inicia sessió
            </Button>
          </VStack>
        </form>

        <Text fontSize="sm" mt={6} textAlign="center">
          Encara no tens compte?{' '}
          <span
            style={{ color: '#03DB88', cursor: 'pointer' }}
            onClick={() => navigate('/registre')}
          >
            Registra’t
          </span>
        </Text>
      </Box>
    </Flex>
  )
}

export default Login