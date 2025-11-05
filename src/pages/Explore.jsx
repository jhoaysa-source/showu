// Importació de React i Chakra UI
import { useState } from 'react'
import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Wrap,
  WrapItem
} from '@chakra-ui/react'

// Dades simulades d'obres
import obres from '../data/obres'

// Component de targeta d'obra
import ObraCard from '../components/ObraCard'

// Icona de la lupa per la barra de cerca
import iconSearch from '../assets/icon_search.svg'

// Categories disponibles per al filtratge
const categories = [
  'Tots',
  'Abstracte',
  'Il·lustració',
  'Fotografia',
  'Contemporani',
  '3D Art',
  'UI/UX'
]

function Explore() {
  // Estat per controlar el text de la cerca
  const [search, setSearch] = useState('')

  // Estat per controlar les categories seleccionades
  const [selectedCategories, setSelectedCategories] = useState(['Tots'])

  // Funció per activar/desactivar una categoria
  const toggleCategory = (category) => {
    if (category === 'Tots') {
      // Si es fa clic a "Tots", es desactiven totes les altres categories
      setSelectedCategories(['Tots'])
    } else {
      const isSelected = selectedCategories.includes(category)
      let updated

      if (isSelected) {
        // Si la categoria ja estava seleccionada, es desactiva
        updated = selectedCategories.filter((c) => c !== category)

        // Si no queda cap categoria seleccionada, s’activa “Tots”
        if (updated.length === 0) {
          updated = ['Tots']
        }
      } else {
        // Si la nova categoria s’afegeix, es desactiva “Tots”
        updated = selectedCategories
          .filter((c) => c !== 'Tots')
          .concat(category)
      }

      setSelectedCategories(updated)
    }
  }

  return (
    <Box bg="#0C0C0C" color="white" py={10}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
        
        {/* Títol de la pàgina */}
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          Explora
        </Text>

        {/* Barra de cerca amb icona de lupa */}
        <InputGroup mb={6}>
          <InputLeftElement pointerEvents="none">
            <img src={iconSearch} alt="Barra de cerca" width="20" height="20" />
          </InputLeftElement>
          <Input
            placeholder="Busca obres o artistes..."
            bg="#1A1A1A"
            border="1px solid #2d2d2d"
            color="white"
            _placeholder={{ color: 'gray.400' }}
            fontSize={{ base: 'md', md: 'lg' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>

        {/* Botons de filtratge per categories */}
        <Wrap mb={6}>
          {categories.map((category) => {
            const isActive = selectedCategories.includes(category)
            return (
              <WrapItem key={category}>
                <Button
                  size="md" 
                  variant="outline"
                  borderColor={isActive ? '#03DB88' : 'gray.600'}
                  color={isActive ? '#03DB88' : 'gray.300'}
                  _hover={{
                    bg: '#03DB88',
                    color: 'black',
                    borderColor: '#03DB88'
                  }}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </Button>
              </WrapItem>
            )
          })}
        </Wrap>

        {/* Text que mostra el nombre total de resultats trobats (no aplicat a filtre encara) */}
        <Text fontSize={{ base: 'md', md: 'lg' }} mb={6}>
          Mostrant {obres.length} resultats...
        </Text>

        {/* Grid responsive amb targetes d’obres */}
        <Box
          display="grid"
          gridTemplateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)'
          }}
          gap={6}
        >
          {obres.map((obra) => (
            <ObraCard key={obra.id} obra={obra} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Explore