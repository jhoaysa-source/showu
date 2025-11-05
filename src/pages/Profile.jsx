// src/pages/Profile.jsx
import {
  Box,
  Text,
  Input,
  Textarea,
  Button,
  Flex,
  Avatar,
  SimpleGrid,
  FormControl,
  FormLabel
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import obres from '../data/obres'
import ObraCard from '../components/ObraCard'

function Profile() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [profileImage, setProfileImage] = useState(null)
  const [username, setUsername] = useState('ARTS')
  const [bio, setBio] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Box bg="#0C0C0C" color="white" py={10}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
        
        {/* TÍTOL PÀGINA */}
        <Text fontSize="2xl" fontWeight="bold" mb={2}>Perfil</Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} mb={10}>Gestiona el teu portafolis i perfil.</Text>

        {/* SECCIÓ 1: INFORMACIÓ DE PERFIL AMB CAIXA GRIS */}
        <Box bg="#1A1A1A" p={6} borderRadius="md" mb={7}>
          <Box
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            gap={10}
          >
            {/* Avatar clickable */}
            <Box position="relative" cursor="pointer" onClick={() => fileInputRef.current.click()}>            
              <Avatar
                size="2xl"
                color="#0C0C0C"
                name="Üsuari"
                src={profileImage}
                bg="#03DB88"
              />
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                display="none"
                onChange={handleImageChange}
              />
            </Box>

            {/* Formulari editable */}
            <Box flex={1}>
              <FormControl mb={6}>
                <FormLabel>Nom d’usuari</FormLabel>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  bg="#0C0C0C"
                  border="1px solid #2D2D2D"
                  color="white"
                />
              </FormControl>

              <FormControl mb={6}>
                <FormLabel>Descripció</FormLabel>
                <Textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  bg="#0C0C0C"
                  border="1px solid #2D2D2D"
                  color="white"
                  placeholder="Xarxes socials, bio personal, etc."
                />
              </FormControl>

              <Button
                variant="outline"
                bg="#03DB88"
                color="black"
                borderColor="#03DB88"
                fontWeight="bold"
                _hover={{ bg: 'black', color: '#03DB88' }}
              >
                Guardar canvis
              </Button>
            </Box>
          </Box>
        </Box>

        {/* SECCIÓ 2: KPIs */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={10}>
          <Box bg="#1A1A1A" p={6} borderRadius="md" textAlign="center">
            <Text fontSize="4xl" style={{ color: '#03DB88' }} fontWeight="bold">{obres.length}</Text>
            <Text fontSize={{ base: 'md', md: 'lg' }}>Arxius penjats</Text>
          </Box>
          <Box bg="#1A1A1A" p={6} borderRadius="md" textAlign="center">
            <Text fontSize="4xl" style={{ color: '#03DB88' }} fontWeight="bold">40</Text>
            <Text fontSize={{ base: 'md', md: 'lg' }}>Likes totals</Text>
          </Box>
          <Box bg="#1A1A1A" p={6} borderRadius="md" textAlign="center">
            <Text fontSize="4xl" style={{ color: '#03DB88' }} fontWeight="bold">120</Text>
            <Text fontSize={{ base: 'md', md: 'lg' }}>Vistes totals</Text>
          </Box>
        </SimpleGrid>

        {/* SECCIÓ 3: ARXIUS */}
        <Flex justify="space-between" alignItems="center" mb={6}>
          <Text fontSize="xl" fontWeight="bold">Els meus arxius</Text>
          <Button
            onClick={() => navigate('/crea')}
            variant="outline"
            color="#03DB88"
            borderColor="#03DB88"
            _hover={{ bg: '#03DB88', color: 'black' }}
          >
            + Penja un arxiu
          </Button>
        </Flex>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
          {obres.map((obra) => (
            <ObraCard key={obra.id} obra={obra} editable={true} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Profile