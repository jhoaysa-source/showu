import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

// Imports de pàgines (vistes principals del lloc web)
import Home from './pages/Home'
import Explore from './pages/Explore'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Support from './pages/Support'
import Login from './pages/Login'
import Register from './pages/Register'
import ObraDetallada from './pages/ObraDetallada'
import Usuari from './pages/Usuari'
import ObraEditar from './pages/ObraEditar'

// Imports de components reutilitzables
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Box>
      {/* Barra de navegació (visible a totes les pàgines) */}
      <Navbar />

      {/* Definició de les rutes del projecte */}
      <Routes>
        {/* Pàgina d'inici */}
        <Route path="/" element={<Home />} />

        {/* Secció d'exploració d'obres */}
        <Route path="/explora" element={<Explore />} />

        {/* Vista detallada d'una obra concreta */}
        <Route path="/explora/obra/:id" element={<ObraDetallada />} />

        {/* Pàgina per crear una nova obra */}
        <Route path="/crea" element={<Create />} />

        {/* Perfil de l'usuari connectat */}
        <Route path="/perfil" element={<Profile />} />

        {/* Pàgina de suport o ajuda */}
        <Route path="/suport" element={<Support />} />

        {/* Formulari d'inici de sessió */}
        <Route path="/login" element={<Login />} />

        {/* Formulari de registre */}
        <Route path="/registre" element={<Register />} />

        {/* Perfil públic d'un altre usuari */}
        <Route path="/usuari/:nom" element={<Usuari />} />

        {/* Edició d'una obra pròpia */}
        <Route path="/perfil/editar/:id" element={<ObraEditar />} />
      </Routes>

      {/* Peu de pàgina (visible a totes les pàgines) */}
      <Footer />
    </Box>
  )
}

export default App