// Imports de components visuals de Chakra UI
import {
  Box,
  Text,
  Textarea,
  Input,
  Button,
  Flex,
  Tag,
  Avatar,
  IconButton,
  HStack,
  VStack
} from '@chakra-ui/react'

import { useParams } from 'react-router-dom'
import { useState } from 'react'

// Dades simulades
import obres from '../data/obres'

// Icones utilitzades
import iconCora from '../assets/icon_cora.svg'
import iconOjo from '../assets/icon_ojo.svg'
import iconTrash from '../assets/icon_trash.svg'

// Categories disponibles per assignar a l’obra
const allCategories = [
  'Abstracte',
  'Il·lustració',
  'Fotografia',
  'Contemporani',
  '3D Art',
  'UI/UX'
]

function ObraEditar() {
  const { id } = useParams()

  // Troba l'obra basada en l'id rebut per l'URL
  const obra = obres.find((obra) => obra.id === parseInt(id))

  // Estats controlats per l’edició
  const [titol, setTitol] = useState(obra?.titol || '')
  const [descripcio, setDescripcio] = useState('Descripció de l’obra.')
  const [selectedCategories, setSelectedCategories] = useState(['Il·lustració'])

  // Afegeix o elimina una categoria del llistat seleccionat
  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  // Si no es troba l’obra amb l’id proporcionat
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

        {/* Camp d’entrada per editar el títol + botó per desar */}
        <Flex align="center" gap={4} mb={4}>
          <Input
            value={titol}
            onChange={(e) => setTitol(e.target.value)}
            bg="#1A1A1A"
            border="1px solid #2D2D2D"
            color="white"
            fontWeight="bold"
            fontSize="xl"
          />
          <Button
            variant="outline"
            borderColor="#03DB88"
            bg="#03DB88"
            color="black"
            fontWeight="bold"
            _hover={{ bg: 'black', color: '#03DB88', border: '1px solid #03DB88' }}
          >
            Guardar
          </Button>
        </Flex>

        {/* Informació de l’autor i mètriques de l’obra */}
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="sm" color="gray.400">Per {obra.artista}</Text>
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

        {/* Imatge fictícia de l’obra */}
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

        {/* Botons per seleccionar o deseleccionar categories */}
        <Box mb={6}>
          <Flex wrap="wrap" gap={2}>
            {allCategories.map((cat) => {
              const isSelected = selectedCategories.includes(cat)
              return (
                <Button
                  key={cat}
                  size="sm"
                  variant="outline"
                  borderColor={isSelected ? '#03DB88' : 'gray.600'}
                  color={isSelected ? '#03DB88' : 'gray.300'}
                  _hover={{
                    bg: '#03DB88',
                    color: 'black',
                    borderColor: '#03DB88'
                  }}
                  onClick={() => toggleCategory(cat)}
                >
                  {cat}
                </Button>
              )
            })}
          </Flex>
        </Box>

        {/* Camp editable per a la descripció de l’obra */}
        <Textarea
          value={descripcio}
          onChange={(e) => setDescripcio(e.target.value)}
          bg="#1A1A1A"
          border="1px solid #2D2D2D"
          color="white"
          mb={8}
        />

        {/* Comentaris sobre l’obra (mock) amb opció d’eliminar */}
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>Comentaris</Text>
          <VStack align="start" spacing={4}>
            <Flex justify="space-between" width="100%">
              <Flex gap={3} align="start">
                <Avatar size="sm" name="Usuari1" bg="#03DB88" color="#0C0C0C" />
                <Box>
                  <HStack spacing={2} fontSize="md" mb={1}>
                    <Text fontWeight="bold">Usuari1</Text>
                    <Text color="gray.400">| Fa 2 hores</Text>
                  </HStack>
                  <Text>Comentari sobre l’obra.</Text>
                </Box>
              </Flex>
              {/* Botó per eliminar comentari (fictici) */}
              <IconButton
                icon={<img src={iconTrash} alt="Eliminar" width="20" height="20" />}
                aria-label="Eliminar comentari"
                bg="transparent"
                _hover={{ bg: 'red.600' }}
              />
            </Flex>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}

export default ObraEditar