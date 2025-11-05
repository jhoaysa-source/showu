

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

import iconUpload from '../assets/icon_upload.svg'

const categories = [
  'Abstracte',
  'Il·lustració',
  'Fotografia',
  'Contemporani',
  '3D Art',
  'UI/UX'
]

function Create() {
  const inputRef = useRef(null)

  const handleUploadClick = () => {
    inputRef.current?.click()
  }

  return (
    <Box bg="#0C0C0C" color="white" py={10}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>

        {/* TÍTOL */}
        <Text fontSize="2xl" fontWeight="bold" mb={2}>Penja el teu treball</Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} mb={10}>Comparteix la teva creativitat amb la comunitat</Text>

        {/* ZONA DE PUJADA PREPARADA */}
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
          {/* INPUT OCULT */}
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

          {/* ICONA AMB FONS RODÓ */}
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

          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold">Clica per penjar</Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.400">PNG, JPG, GIF fins a 1GB</Text>
        </Box>

        {/* FORMULARI */}
        <Box bg="#1A1A1A" p={6} borderRadius="md" mb={8}>
          {/* TÍTOL OBRA */}
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

          {/* DESCRIPCIÓ */}
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

          {/* CATEGORIA */}
          <FormControl>
            <FormLabel fontSize={{ base: 'md', md: 'lg' }}>Categoria</FormLabel>
            <Select
              placeholder="Selecciona una categoria"
              bg="#0C0C0C"
              border="1px solid #2D2D2D"
              color="white"
              
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} style={{ backgroundColor: '#0C0C0C', color: 'white' }}>
                  {cat}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* BOTONS */}
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