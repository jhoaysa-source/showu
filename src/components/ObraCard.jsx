import { Box, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import iconCora from '../assets/icon_cora.svg'
import iconOjo from '../assets/icon_ojo.svg'

function ObraCard({ obra, editable = false }) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (editable) {
      navigate(`/perfil/editar/${obra.id}`)
    } else {
      navigate(`/explora/obra/${obra.id}`)
    }
  }

  return (
    <Box
      bg="#1A1A1A"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      cursor="pointer"
      onClick={handleClick}
    >
      {/* Imatge fictícia */}
      <Box
        bg="gray.700"
        height="150px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text color="gray.500">Imatge</Text>
      </Box>

      {/* Informació */}
      <Box p={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontWeight="bold">{obra.titol}</Text>
            <Text fontSize="sm" color="gray.400">per {obra.artista}</Text>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="flex-end" gap={1} fontSize="sm" color="white">
            <Box display="flex" alignItems="center" gap={1}>
              <img src={iconCora} alt="likes" width="16" height="16" />
              <span>{obra.likes}</span>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <img src={iconOjo} alt="views" width="16" height="16" />
              <span>{obra.views}</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ObraCard