// React Router: per capturar paràmetres de l'URL
import { useParams } from 'react-router-dom'

// Imports de Chakra UI per a l'estructura i estil
import {
  Box,
  Text,
  SimpleGrid,
  Flex,
  Avatar,
  VStack
} from '@chakra-ui/react'

// Dades simulades d’obres i component per mostrar cada obra
import obres from '../data/obres'
import ObraCard from '../components/ObraCard'

function Usuari() {
  // Obté el nom de l'usuari des de la URL
  const { nom } = useParams()

  // Filtra les obres que pertanyen a l’usuari actual
  const obresUsuari = obres.filter((obra) => obra.artista === nom)

  // Calcula mètriques totals (likes i visualitzacions)
  const totalLikes = obresUsuari.reduce((acc, obra) => acc + obra.likes, 0)
  const totalViews = obresUsuari.reduce((acc, obra) => acc + obra.views, 0)

  return (
    <Box bg="#0C0C0C" color="white" py={10}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>

        {/* Títol i subtítol del perfil d’usuari */}
        <Text fontSize="2xl" fontWeight="bold" mb={2}>Perfil de {nom}</Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} mb={8}>
          Aquest usuari forma part de la comunitat artística de ShowÜ.
        </Text>

        {/* Avatar i petita bio del perfil */}
        <Box bg="#1A1A1A" p={6} borderRadius="md" mb={5}> 
          <Flex align="center" gap={4}>
            <Avatar name={nom} bg="#03DB88" color="#0C0C0C" size="lg" />
            <Box>
              <Text fontWeight="bold" fontSize="lg">{nom}</Text>
              <Text color="gray.400" fontSize="sm">
                Artista digital. Aquest es el meu perfil.
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Mètriques del perfil */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={10}>
          <Box bg="#1A1A1A" p={6} borderRadius="md" textAlign="center">
            <Text fontSize="4xl" color="#03DB88" fontWeight="bold">{obresUsuari.length}</Text>
            <Text>Obres penjades</Text>
          </Box>
          <Box bg="#1A1A1A" p={6} borderRadius="md" textAlign="center">
            <Text fontSize="4xl" color="#03DB88" fontWeight="bold">{totalLikes}</Text>
            <Text>Likes</Text>
          </Box>
          <Box bg="#1A1A1A" p={6} borderRadius="md" textAlign="center">
            <Text fontSize="4xl" color="#03DB88" fontWeight="bold">{totalViews}</Text>
            <Text>Vistes</Text>
          </Box>
        </SimpleGrid>

        {/* Llistat d’obres de l’usuari */}
        <Text fontSize="xl" fontWeight="bold" mb={4}>Obres de {nom}</Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
          {obresUsuari.map((obra) => (
            <ObraCard key={obra.id} obra={obra} />
          ))}
        </SimpleGrid>

        {/* Missatge si no hi ha cap obra */}
        {obresUsuari.length === 0 && (
          <Text fontSize="md" color="gray.400" mt={4}>
            Aquest artista encara no ha penjat cap obra.
          </Text>
        )}
      </Box>
    </Box>
  )
}

export default Usuari