// Importació de components visuals de Chakra UI
import {
  Box,
  Text,
  Input,
  Textarea,
  Select,
  Button,
  Flex,
  FormControl,
  FormLabel
} from '@chakra-ui/react'

import { useRef } from 'react'

// Icona per a la pujada d’arxius
import iconUpload from '../assets/icon_upload.svg'

// Categories predefinides per seleccionar en el formulari
const categories = [
  'Abstracte',
  'Il·lustració',
  'Fotografia',
  'Contemporani',
  '3D Art',
  'UI/UX'
]

function Create() {
  // Referència a l’input de fitxer (amagat) per activar-lo des d’un clic extern
  const inputRef = useRef(null)

  // Funció per activar el selector de fitxers
  const handleUploadClick = () => {
    inputRef.current?.click()
  }

  return (
    <Box bg="#0C0C0C" color="white" py={10}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>

        {/* Títol i subtítol de la pàgina */}
        <Text fontSize="2xl" fontWeight="bold" mb={2}>Penja el teu treball</Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} mb={10}>
          Comparteix la teva creativitat amb la comunitat
        </Text>

        {/* Zona de pujada d’arxius (fictícia de moment) */}
        <Box
          bg="#1A1A1A"
          border="2px dashed #2D2D2D"
          borderRadius="md"
          py={16}
          textAlign="center"
          mb={12}
          cursor="pointer"
          onClick={handleUploadClick}
        >
          {/* Input ocult per seleccionar arxius */}
          <input
            ref={inputRef}
            type="file"
            accept=".png,.jpg,.jpeg,.gif"
            style={{ display: 'none' }}
            onChange={(e) => {
              const file = e.target.files?.[0]
              console.log('Fitxer seleccionat:', file)
              // Aquí en el futur es farà la pujada a Firebase
            }}
          />

          {/* Icona dins un cercle verd */}
          <Box
            bg="#112D1B"
            borderRadius="full"
            w="60px"
            h="60px"
            mx="auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={4}
          >
            <img src={iconUpload} alt="Pujar" width="30" height="30" />
          </Box>

          {/* Textos informatius sobre la pujada */}
          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold">Clica per penjar</Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.400">PNG, JPG, GIF fins a 1GB</Text>
        </Box>

        {/* Formulari amb camps de text */}
        <Box bg="#1A1A1A" p={6} borderRadius="md" mb={8}>

          {/* Camp per introduir el títol de l’obra */}
          <FormControl mb={6}>
            <FormLabel fontSize={{ base: 'md', md: 'lg' }}>Títol</FormLabel>
            <Input
              placeholder="Escriu el títol de l’obra"
              bg="#0C0C0C"
              border="1px solid #2D2D2D"
              _placeholder={{ color: 'gray.500' }}
              color="white"
              fontSize={{ base: 'md', md: 'lg' }}
            />
          </FormControl>

          {/* Camp per descriure el treball */}
          <FormControl mb={6}>
            <FormLabel fontSize={{ base: 'md', md: 'lg' }}>Descripció</FormLabel>
            <Textarea
              placeholder="Descriu el teu treball, la teva inspiració, tècniques utilitzades..."
              bg="#0C0C0C"
              border="1px solid #2D2D2D"
              _placeholder={{ color: 'gray.500' }}
              color="white"
              fontSize={{ base: 'md', md: 'lg' }}
            />
          </FormControl>

          {/* Selector de categoria */}
          <FormControl>
            <FormLabel fontSize={{ base: 'md', md: 'lg' }}>Categoria</FormLabel>
            <Select
              placeholder="Selecciona una categoria"
              bg="#0C0C0C"
              border="1px solid #2D2D2D"
              color="white"
            >
              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                  style={{ backgroundColor: '#0C0C0C', color: 'white' }}
                >
                  {cat}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Botons d’acció: cancel·lar o penjar */}
        <Flex justify="space-between" gap={4}>
          <Button
            variant="outline"
            borderColor="#03DB88"
            color="#03DB88"
            _hover={{ bg: '#03DB88', color: 'black' }}
            w="100%"
          >
            Cancel·lar
          </Button>

          <Button
            variant="outline"
            bg="#03DB88"
            borderColor="#03DB88"
            color="black"
            fontWeight="bold"
            _hover={{ bg: 'black', color: '#03DB88' }}
            w="100%"
          >
            Penjar arxius
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default Create