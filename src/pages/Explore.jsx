

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

import obres from '../data/obres'
import ObraCard from '../components/ObraCard'
import iconSearch from '../assets/icon_search.svg'

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
  const [search, setSearch] = useState('')
  const [selectedCategories, setSelectedCategories] = useState(['Tots'])

  const toggleCategory = (category) => {
    // Si el clicat és "Tots", desactiva tots els altres
    if (category === 'Tots') {
      setSelectedCategories(['Tots'])
    } else {
      // Si està seleccionat, desactiva’l
      const isSelected = selectedCategories.includes(category)
      let updated

      if (isSelected) {
        updated = selectedCategories.filter((c) => c !== category)
        if (updated.length === 0) {
          updated = ['Tots'] // Si no queda res seleccionat, activa “Tots”
        }
      } else {
        updated = selectedCategories
          .filter((c) => c !== 'Tots') // Elimina “Tots” si afegeix una altra
          .concat(category)
      }

      setSelectedCategories(updated)
    }
  }

  return (
    <Box bg="#0C0C0C" color="white" py={10}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
        
        {/* TÍTOL */}
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          Explora
        </Text>

        {/* BARRA DE CERCA */}
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

        {/* FILTRES */}
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

        {/* TEXT DE RESULTATS */}
        <Text fontSize={{ base: 'md', md: 'lg' }} mb={6}>
          Mostrant {obres.length} resultats...
        </Text>

        {/* GRID D’OBRES */}
        <Box
          display="grid"
          gridTemplateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
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