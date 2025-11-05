// src/components/Footer.jsx
import { Box, Text, Stack } from '@chakra-ui/react'
import { useAuth } from '../context/AuthContext'
import { NavLink } from 'react-router-dom'

import iconTw from '../assets/icon_tw.svg'
import iconTk from '../assets/icon_tk.svg'
import iconInsta from '../assets/icon_insta.svg'

function Footer() {
  const { user } = useAuth()

  return (
    <Box bg="#0C0C0C" color="white" borderTop={'0.5px solid #03DB88'} py={10}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
        <Box
          display={{ base: 'block', md: 'flex' }}
          justifyContent="space-between"
          textAlign={{ base: 'center', md: 'left' }}
        >
          {/* LOGO I DESCRIPCIÓ */}
          <Box mb={{ base: 10, md: 0 }}>
            <Text fontSize="2xl" fontWeight="bold" mb={7}>
              Show<span style={{ color: '#03DB88' }}>Ü</span>
            </Text>
            <Text color="white" maxW="500px">
              Plataforma creativa per a artistes digitals, on poden mostrar el seu treball,
              connectar amb persones i documentar el seu creixement artístic.
            </Text>
            <Box display="flex" gap={4} mt={8} justifyContent={{ base: 'center', md: 'flex-start' }}>
              <img src={iconTw} alt="Twitter" width="40" height="40" />
              <img src={iconTk} alt="TikTok" width="40" height="40" />
              <img src={iconInsta} alt="Instagram" width="40" height="40" />
            </Box>
          </Box>

          {/* ENLLAÇOS */}
          <Box display="flex" gap={12} justifyContent={{ base: 'center', md: 'flex-start' }}>
            <Box>
              <Text fontWeight="bold" mb={3}>Enllaços</Text>
              <Stack spacing={3}>
                <NavLink to="/explora">
                  <Text color="white" _hover={{ color: '#03DB88' }}>Explorar</Text>
                </NavLink>
                <NavLink to={user ? '/crea' : '/login'}>
                  <Text color="white" _hover={{ color: '#03DB88' }}>Crea</Text>
                </NavLink>
                <NavLink to={user ? '/perfil' : '/login'}>
                  <Text color="white" _hover={{ color: '#03DB88' }}>Perfil</Text>
                </NavLink>
                <NavLink to="/suport">
                  <Text color="white" _hover={{ color: '#03DB88' }}>Suport</Text>
                </NavLink>
              </Stack>
            </Box>

            <Box>
              <Text fontWeight="bold" mb={3}>Recursos</Text>
              <Stack spacing={3}>
                <Text as="a" href="#" color="white" _hover={{ color: '#03DB88' }}>Privacitat</Text>
                <Text as="a" href="#" color="white" _hover={{ color: '#03DB88' }}>Comunitat</Text>
                <Text as="a" href="#" color="white" _hover={{ color: '#03DB88' }}>Cookies</Text>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer