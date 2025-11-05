// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

// 📦 Imports de pàgines
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

// 🧩 Imports de components nous
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Box>
      {/* ✅ Navbar condicional */}
      <Navbar />

      {/* 🗺️ Rutes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explora" element={<Explore />} />
        <Route path="/explora/obra/:id" element={<ObraDetallada />} />
        <Route path="/crea" element={<Create />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/suport" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registre" element={<Register />} />
        <Route path="/usuari/:nom" element={<Usuari />} />
        <Route path="/perfil/editar/:id" element={<ObraEditar />} />
      </Routes>

      {/* ✅ Footer condicional */}
      <Footer />
    </Box>
  )
}

export default App