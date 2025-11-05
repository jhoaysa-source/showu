// Importació de components de Chakra UI
import {
  Box,
  Text,
  Tag,
  Input,
  Avatar,
  IconButton,
  Flex,
  VStack,
  HStack,
  Divider,
  Spacer
} from '@chakra-ui/react'

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

// Importació de dades simulades i icones
import obres from '../data/obres'
import iconCorab from '../assets/icon_cora_black.svg'
import iconCora from '../assets/icon_cora.svg'
import iconOjo from '../assets/icon_ojo.svg'
import iconSend from '../assets/icon_send.svg'

function Obra() {
  // Obtenir l'id de l'obra des de l'URL
  const { id } = useParams()

  // Buscar l'obra amb l'id indicat
  const obra = obres.find((obra) => obra.id === parseInt(id))

  // Si no es troba cap obra amb aquest id
  if (!obra) {
    return (
      <Box bg="#0C0C0C" color="white" p={10}>
        <Text fontSize="xl">Obra no trobada.</Text>
      </Box>
    )
  }

  return (
    <Box bg="#0C0C0C" color="white" py={10}>
      <Box maxW="900px" mx="auto" px={{ base: 4, md: 6 }}>

        {/* Títol de l’obra, artista i botó de "m'agrada" */}
        <Flex align="center" mb={4}>
          <Box>
            <Text fontSize="xl" fontWeight="bold">{obra.titol}</Text>
            <Text fontSize="sm" color="gray.400">
              Per{' '}
              <Link to={`/usuari/${obra.artista}`} style={{ color: '#03DB88' }}>
                {obra.artista}
              </Link>
            </Text>          
          </Box>
          <Spacer />
          {/* Botó estilitzat de "m'agrada" (sense funcionalitat de moment) */}
          <Box
            bg="#03DB88"
            px={4}
            py={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            gap={2}
            cursor="pointer"
          >
            <img src={iconCorab} alt="Like" width="16" height="16" />
            <Text fontSize="sm" color="black" fontWeight="bold">M’agrada</Text>
          </Box>
        </Flex>

        {/* Zona reservada per a la imatge gran de l’obra */}
        <Box
          bg="gray.700"
          height={{ base: '250px', md: '400px' }}
          borderRadius="md"
          mb={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="gray.500">Imatge de l’obra</Text>
        </Box>

        {/* Categoria i mètriques de visualització */}
        <Flex align="center" mb={6}>
          <Tag colorScheme="green" variant="outline">Il·lustració</Tag>
          <Spacer />
          <HStack spacing={4}>
            <Flex align="center" gap={1}>
              <img src={iconOjo} alt="views" width="16" height="16" />
              <Text fontSize="sm">{obra.views}</Text>
            </Flex>
            <Flex align="center" gap={1}>
              <img src={iconCora} alt="likes" width="16" height="16" />
              <Text fontSize="sm">{obra.likes}</Text>
            </Flex>
          </HStack>
        </Flex>

        {/* Descripció de l’obra (fictícia) */}
        <Text fontSize={{ base: 'md', md: 'lg' }} mb={6}>
          Descripció de l’obra.
        </Text>

        {/* Secció de comentaris */}
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={2}>Comentaris</Text>

          {/* Input per escriure un comentari (sense funcionalitat real encara) */}
          <Flex mb={4} align="center">
            <Input
              placeholder="Escriu el teu comentari..."
              bg="transparent"
              border="1px solid #03DB88"
              _placeholder={{ color: 'gray.500' }}
              color="white"
            />
            <IconButton
              aria-label="Enviar comentari"
              icon={<img src={iconSend} alt="send" width="20" height="20" />}
              ml={2}
              bg="transparent"
              border="1px solid #03DB88"
              _hover={{ bg: '#03DB88', color: 'black' }}
            />
          </Flex>

          {/* Comentari fictici mostrat */}
          <VStack align="start" spacing={4}>
            <Flex gap={3} align="start">
              <Avatar size="sm" name="Usuari1" bg="#03DB88" color="#0C0C0C" />
              <Box fontSize={{ base: 'md', md: 'lg' }}>
                <HStack spacing={2} fontSize={{ base: 'md', md: 'lg' }} mb={1}>
                  <Text fontWeight="bold">Usuari1</Text>
                  <Text color="gray.400">| Fa 2 hores</Text>
                </HStack>
                <Text>Comentari sobre l’obra.</Text>
              </Box>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}

export default Obra