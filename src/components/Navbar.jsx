// Importació de components de Chakra UI
import { Box, Flex, Text } from '@chakra-ui/react'

// Navegació amb React Router
import { NavLink, useNavigate } from 'react-router-dom'

// Context d'autenticació i Firebase
import { useAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

// Icona d'usuari
import iconUser from '../assets/iconoir_user.svg'

function Navbar() {
  const { user } = useAuth()         // Accés a l'usuari autenticat.
  const navigate = useNavigate()     // Per redirigir després de tancar sessió

  return (
    // Barra de navegació fixa a la part superior
    <Flex
      as="nav"
      bg="#0C0C0C"                  
      color="white"                 
      h="60px"                      
      align="center"                
      justify="space-between"       
      px={8}                        
      boxShadow="sm"               
      position="sticky"            
      top={0}
      zIndex={100}                 
    >
      {/* === LOGOTIP ESQUERRA === */}
      <Box fontSize="xl" fontWeight="bold">
        <NavLink
          to="/"
          style={{
            display: 'flex',
            textDecoration: 'none',
            color: 'white'
          }}
        >
          Show<span style={{ color: '#03DB88' }}>Ü</span>
        </NavLink>
      </Box>

      {/* === ENLLAÇOS CENTRALS === */}
      <Flex gap={8}>
        {/* Enllaços accessibles a tothom */}
        <NavItem to="/" label="Inici" />
        <NavItem to="/explora" label="Explorar" />
        
        {/* Enllaços només visibles si l'usuari està autenticat */}
        {user && (
          <>
            <NavItem to="/crea" label="Crea" />
            <NavItem to="/perfil" label="Perfil" />
          </>
        )}

        <NavItem to="/suport" label="Suport" />
      </Flex>

      {/* === ACCIÓ DRETA: Login o Sortida === */}
      <Box>
        {user ? (
          // Si hi ha usuari, mostra opció per tancar sessió
          <Text
            onClick={async () => {
              await signOut(auth)     // Tanca sessió a Firebase
              navigate('/login')      // Redirigeix a la pàgina de login
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
          // Si no hi ha usuari, mostra enllaç per iniciar sessió
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
            <img src={iconUser} alt="Iniciar sessió" width="20" height="20" />
            Inicia sessió
          </NavLink>
        )}
      </Box>
    </Flex>
  )
}

// Component reutilitzable per crear enllaços de navegació
function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        // Enllaç actiu ressaltat amb color verd i línia inferior
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