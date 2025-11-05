import { Box, Flex, Text } from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

import iconUser from '../assets/iconoir_user.svg'

function Navbar() {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
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
      {/* LOGO ESQUERRA */}
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

      {/* ENLLAÇOS CENTRALS */}
      <Flex gap={8}>
        <NavItem to="/" label="Inici" />
        <NavItem to="/explora" label="Explorar" />
        {user && (
          <>
            <NavItem to="/crea" label="Crea" />
            <NavItem to="/perfil" label="Perfil" />
          </>
        )}
        <NavItem to="/suport" label="Suport" />
      </Flex>

      {/* BOTÓ DRET: Login o Sortir */}
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
            <img src={iconUser} alt="Iniciar sessió" width="20" height="20" />
            Inicia sessió
          </NavLink>
        )}
      </Box>
    </Flex>
  )
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
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