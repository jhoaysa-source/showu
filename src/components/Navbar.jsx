// Imports dels components de Chakra UI utilitzats per a la navbar
import { Box, Flex, Text, IconButton, VStack, Collapse } from '@chakra-ui/react'

import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Context d'autenticació per saber si hi ha usuari loguejat
import { useAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

// Icones
import iconUser from '../assets/iconoir_user.svg'
import iconMenu from '../assets/icon_menu.svg'

function Navbar() {
  const { user } = useAuth()
  const navigate = useNavigate()

  // Estat per controlar si el dispositiu és mòbil
  const [isMobile, setIsMobile] = useState(false)

  // Estat per obrir/tancar el menú hamburguesa
  const [menuOpen, setMenuOpen] = useState(false)

  // Comprova l'amplada de la pantalla per adaptar la navbar
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600)
    handleResize() // Executa un cop en carregar
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  // Enllaços comuns (inici, explora, suport)
  const sharedLinks = [
    { to: '/', label: 'Inici' },
    { to: '/explora', label: 'Explorar' },
    { to: '/suport', label: 'Suport' }
  ]

  // Enllaços exclusius per a usuaris autenticats
  const privateLinks = [
    { to: '/crea', label: 'Crea' },
    { to: '/perfil', label: 'Perfil' }
  ]

  return (
    <Box as="nav" bg="#0C0C0C" color="white" boxShadow="sm" position="sticky" top={0} zIndex={100}>
      <Flex h="60px" align="center" justify="space-between" px={8}>
        
        {/* Logo del projecte */}
        <Box fontSize="xl" fontWeight="bold">
          <NavLink to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex' }}>
            Show<span style={{ color: '#03DB88' }}>Ü</span>
          </NavLink>
        </Box>

        {/* Mostra menú hamburguesa o enllaços segons dispositiu */}
        {isMobile ? (
          <IconButton
            aria-label="Menu"
            icon={<img src={iconMenu} alt="Menu" width="24" height="24" />}
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            onClick={toggleMenu}
          />
        ) : (
          <Flex gap={8}>
            {sharedLinks.map((link) => (
              <NavItem key={link.to} to={link.to} label={link.label} />
            ))}
            {user && privateLinks.map((link) => (
              <NavItem key={link.to} to={link.to} label={link.label} />
            ))}
          </Flex>
        )}

        {/* Botó de login o tancar sessió (només en desktop) */}
        {!isMobile && (
          <Box>
            {user ? (
              <Text
                onClick={async () => {
                  await signOut(auth)
                  navigate('/login')
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  color: 'white',
                  fontWeight: 400,
                  fontSize: '1.1rem'
                }}
              >
                <img src={iconUser} alt="Sortir" width="20" height="20" />
                Tanca sessió
              </Text>
            ) : (
              <NavLink
                to="/login"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 400,
                  fontSize: '1.1rem'
                }}
              >
                <img src={iconUser} alt="Inicia sessió" width="20" height="20" />
                Inicia sessió
              </NavLink>
            )}
          </Box>
        )}
      </Flex>

      {/* Menú desplegable per mòbils */}
      {isMobile && (
        <Collapse in={menuOpen} animateOpacity>
          <VStack align="start" bg="#0C0C0C" px={8} py={4} spacing={4}>
            {sharedLinks.map((link) => (
              <NavItem key={link.to} to={link.to} label={link.label} onClick={() => setMenuOpen(false)} />
            ))}
            {user && privateLinks.map((link) => (
              <NavItem key={link.to} to={link.to} label={link.label} onClick={() => setMenuOpen(false)} />
            ))}
            {user ? (
              <Text
                onClick={async () => {
                  await signOut(auth)
                  navigate('/login')
                  setMenuOpen(false)
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  color: 'white',
                  fontWeight: 400,
                  fontSize: '1.1rem'
                }}
              >
                <img src={iconUser} alt="Sortir" width="20" height="20" />
                Tanca sessió
              </Text>
            ) : (
              <NavLink
                to="/login"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 400,
                  fontSize: '1.1rem'
                }}
                onClick={() => setMenuOpen(false)}
              >
                <img src={iconUser} alt="Inicia sessió" width="20" height="20" />
                Inicia sessió
              </NavLink>
            )}
          </VStack>
        </Collapse>
      )}
    </Box>
  )
}

// Component reutilitzable per a cada enllaç de navegació
function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      style={({ isActive }) => ({
        color: isActive ? '#03DB88' : 'white',
        borderBottom: isActive ? '2px solid #03DB88' : '2px solid transparent',
        paddingBottom: '10px',
        transition: 'all 0.2s ease-in-out',
        textDecoration: 'none',
        fontWeight: 400
      })}
    >
      {label}
    </NavLink>
  )
}

export default Navbar