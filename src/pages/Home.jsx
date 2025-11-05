import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

// Importació d’icones
import iconTrend from '../assets/icon_trend.svg'
import iconCora from '../assets/icon_cora.svg'
import iconOjo from '../assets/icon_ojo.svg'
import iconUpload from '../assets/icon_upload.svg'
import iconExp from '../assets/icon_exp.svg'
import iconComment from '../assets/icon_comment.svg'

function Home() {
  const navigate = useNavigate()

  return (
    <Box
      minH="calc(100vh - 60px)"
      bg="linear-gradient(to bottom, #0c0c0c, #1a1a1a)"
      color="white"
      display="flex"
      flexDirection="column"
    >
      {/* Secció principal (hero): presentació i crida a l'acció */}
      <Box
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={4}
        pt={16}
        pb={16}
      >
        <Box>
          {/* Subtítol destacat */}
          <Box
            display="inline-block"
            bg="#112D1B"
            borderRadius="lg"
            color="#03DB88"
            px={6}
            py={3}
            fontSize="sm"
            fontWeight="medium"
            mb={10}
          >
            Un espai per artistes digitals
          </Box>

          {/* Logotip gran (títol principal) */}
          <Text fontSize={{ base: '7xl', md: '8xl' }} mb={6}>
            Show<span style={{ color: '#03DB88' }}>Ü</span>
          </Text>

          {/* Descripció principal */}
          <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="700px" mx="auto" mb={10}>
            Mostra la teva creativitat, coneix a altres artistes i descobreix un món d’inspiració artística.
          </Text>

          {/* Botons d’accés a funcionalitats */}
          <Stack direction={{ base: 'column', md: 'row' }} spacing={6} justify="center" mt={2}>
            <Button
              variant="outline"
              colorScheme="green"
              bg="#03DB88"
              color="black"
              borderColor="#03DB88"
              _hover={{ bg: 'black', color: '#03DB88' }}
              onClick={() => navigate('/explora')}
            >
              Explora obres
            </Button>

            <Button
              variant="outline"
              bg="black"
              borderColor="#03DB88"
              color="#03DB88"
              _hover={{ bg: '#03DB88', color: 'black' }}
              onClick={() => navigate('/crea')}
            >
              Crea el teu portafolis
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Secció: obres destacades (actualment simulades) */}
      <Box bg="#0C0C0C" color="white" py={16}>
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
          <Box mb={10}>
            <Box display="flex" alignItems="center" gap={2} mb={1}>
              <img src={iconTrend} alt="Tendència" width={20} height={20} />
              <Text fontSize={{ base: '1xl', md: '2xl' }} fontWeight="bold">
                Obres destacades
              </Text>
            </Box>
            <Text fontSize={{ base: 'md', md: 'lg' }}>
              Obres més populars dins de la comunitat.
            </Text>
          </Box>

          {/* Llista simulada d’obres destacades */}
          <Box
            display="grid"
            gridTemplateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
            gap={6}
          >
            {[1, 2, 3, 4].map((num) => (
              <Box
                key={num}
                bg="#1A1A1A"
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
              >
                {/* Espai reservat per a la imatge */}
                <Box
                  bg="gray.700"
                  height="150px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text color="gray.500">Imatge {num}</Text>
                </Box>

                {/* Informació de l’obra */}
                <Box p={4}>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                    <Box>
                      <Text fontWeight="bold">Obra{num}</Text>
                      <Text fontSize="sm" color="gray.400">per ARTS{num}</Text>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-end"
                      gap={1}
                      fontSize="sm"
                      color="white"
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        <img src={iconCora} alt="Likes" width={16} height={16} />
                        <span>10</span>
                      </Box>
                      <Box display="flex" alignItems="center" gap={1}>
                        <img src={iconOjo} alt="Vistes" width={16} height={16} />
                        <span>10</span>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Secció central amb el logotip Ü i text inspiracional */}
      <Box
        bg="#1c1c1c"
        color="white"
        py={24}
        textAlign="center"
        position="relative"
      >
        <Box maxW="600px" mx="auto" px={4}>
          <Box
            bg="#112D1B"
            w="65px"
            h="65px"
            borderRadius="md"
            mx="auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={10}
          >
            <Text fontSize={{ base: '4xl', md: '5xl' }} color="#03DB88">
              Ü
            </Text>
          </Box>

          <Text fontSize={{ base: '1xl', md: '2xl' }} fontWeight="semibold" mb={6}>
            Un espai per mostrar el teu potencial
          </Text>

          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            mb={10}
            color="white"
            lineHeight="1.8"
          >
            ShowÜ va néixer d’una idea simple: cada artista digital es mereix una
            plataforma atractiva i accessible per mostrar el seu portafolis i connectar amb
            una comunitat global de ments creatives.
          </Text>

          <Button
            variant="outline"
            bg="#03DB88"
            color="black"
            borderColor="#03DB88"
            _hover={{ bg: 'black', color: '#03DB88' }}
            onClick={() => navigate('/login')}
          >
            Uneix-te!
          </Button>
        </Box>
      </Box>

      {/* Secció informativa: funcionalitats clau */}
      <Box bg="#0C0C0C" py={24}>
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
          <Box
            display="grid"
            gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={8}
          >
            {/* Targeta 1: pujar obres */}
            <Box bg="#1A1A1A" p={6} borderRadius="md" boxShadow="md" textAlign="left">
              <Box bg="#112D1B" borderRadius="full" w="60px" h="60px" display="flex" alignItems="center" justifyContent="center" mb={4}>
                <img src={iconUpload} alt="Upload Icon" width="40" height="40" />
              </Box>
              <Text fontWeight="bold" fontSize="xl" mb={4} color="white">Penja el teu portafolis</Text>
              <Text fontSize="lg" color="white">Comparteix el teu treball creatiu amb una comunitat global</Text>
            </Box>

            {/* Targeta 2: explorar obres */}
            <Box bg="#1A1A1A" p={6} borderRadius="md" boxShadow="md" textAlign="left">
              <Box bg="#112D1B" borderRadius="full" w="60px" h="60px" display="flex" alignItems="center" justifyContent="center" mb={4}>
                <img src={iconExp} alt="Explora Icon" width="40" height="40" />
              </Box>
              <Text fontWeight="bold" fontSize="xl" mb={4} color="white">Explora</Text>
              <Text fontSize="lg" color="white">Recerca diversos treballs amb diferents estils</Text>
            </Box>

            {/* Targeta 3: participar i comentar */}
            <Box bg="#1A1A1A" p={6} borderRadius="md" boxShadow="md" textAlign="left">
              <Box bg="#112D1B" borderRadius="full" w="60px" h="60px" display="flex" alignItems="center" justifyContent="center" mb={4}>
                <img src={iconComment} alt="Comentari Icon" width="40" height="40" />
              </Box>
              <Text fontWeight="bold" fontSize="xl" mb={4} color="white">Participa i comenta</Text>
              <Text fontSize="lg" color="white">Connecta amb perfils, dona la teva opinió i uneix-te a la conversa.</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Secció final: contacte o feedback */}
      <Box bg="#0C0C0C" pt={5} pb={20} textAlign="center" color="white">
        <Box maxW="800px" mx="auto" px={4}>
          <Text fontSize={{ base: '1xl', md: '2xl' }} fontWeight="semibold" mb={6}>
            Tens preguntes o feedback?
          </Text>

          <Text fontSize={{ base: 'md', md: 'lg' }} mb={10} color="white">
            Envia'ns les teves consultes, estarem encantats d'escoltar-te.
          </Text>

          <Button
            variant="outline"
            borderColor="#03DB88"
            color="#03DB88"
            fontWeight="bold"
            _hover={{ bg: '#03DB88', color: 'black' }}
            onClick={() => navigate('/suport')}
          >
            Contacta'ns!
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Home