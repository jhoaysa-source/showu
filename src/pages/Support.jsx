// Imports de Chakra UI per al disseny del formulari i secció
import {
  Box,
  Text,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  VStack
} from '@chakra-ui/react'

import { useState } from 'react'

// Importació de les preguntes freqüents (FAQ)
import faq from '../data/faq'

function Support() {
  // Estats controlats per al formulari de contacte
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  // Funció per esborrar tots els camps del formulari
  const handleReset = () => {
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <Box bg="#0C0C0C" color="white" py={10}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>

        {/* Títol de la pàgina */}
        <Text fontSize="2xl" fontWeight="bold" mb={2}>Suport</Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} mb={10}>
          Consulta les preguntes freqüents i envia'ns les teves consultes.
        </Text>

        {/* Secció de preguntes freqüents (FAQ) */}
        <Box bg="#1A1A1A" p={6} borderRadius="md" mb={10}>
          {faq.map((item, index) => (
            <Box key={index} mb={6}>
              <Text fontWeight="bold" color="#03DB88" mb={2}>
                {item.pregunta}
              </Text>
              <Text>{item.resposta}</Text>
            </Box>
          ))}
        </Box>

        {/* Formulari de contacte */}
        <Box bg="#1A1A1A" p={6} borderRadius="md">
          <VStack spacing={6} align="stretch">

            {/* Camp per introduir el correu de contacte */}
            <FormControl>
              <FormLabel color="gray.300">Mail de contacte</FormLabel>
              <Input
                placeholder="Introdueix el teu correu"
                bg="#0C0C0C"
                border="1px solid #2D2D2D"
                _placeholder={{ color: 'gray.500' }}
                color="white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            {/* Camp per l’assumpte de la consulta */}
            <FormControl>
              <FormLabel color="gray.300">Assumpte</FormLabel>
              <Input
                placeholder="Escriu l’assumpte"
                bg="#0C0C0C"
                border="1px solid #2D2D2D"
                _placeholder={{ color: 'gray.500' }}
                color="white"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </FormControl>

            {/* Camp per escriure el missatge */}
            <FormControl>
              <FormLabel color="gray.300">Descripció</FormLabel>
              <Textarea
                placeholder="Descriu el teu dubte o consulta..."
                bg="#0C0C0C"
                border="1px solid #2D2D2D"
                _placeholder={{ color: 'gray.500' }}
                color="white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>

            {/* Botons d’esborrar i enviar (enviar encara no implementat) */}
            <Box display="flex" justifyContent="space-between" gap={4} pt={2}>
              <Button
                variant="outline"
                borderColor="#03DB88"
                color="#03DB88"
                w="100%"
                bg="#0C0C0C"
                _hover={{ bg: '#03DB88', color: 'black' }}
                onClick={handleReset}
              >
                Esborrar
              </Button>

              <Button
                variant="outline"
                borderColor="#03DB88"
                bg="#03DB88"
                color="black"
                w="100%"
                fontWeight="bold"
                _hover={{ bg: 'black', color: '#03DB88' }}
              >
                Enviar
              </Button>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}

export default Support