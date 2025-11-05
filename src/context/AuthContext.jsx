import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

// 1. Crear el context
const AuthContext = createContext()

// 2. Hook personalitzat per fer servir el context
export const useAuth = () => useContext(AuthContext)

// 3. Provider global
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null) // info extesa: username, etc.
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser)

      if (firebaseUser) {
        // Carregar dades extres de Firestore (si existeixen)
        try {
          const docRef = doc(db, 'users', firebaseUser.uid)
          const docSnap = await getDoc(docRef)

          if (docSnap.exists()) {
            setUserData(docSnap.data())
          } else {
            setUserData(null)
          }
        } catch (error) {
          console.error('Error carregant dades de l’usuari:', error)
          setUserData(null)
        }
      } else {
        setUserData(null)
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, userData, loading }}>
      {children}
    </AuthContext.Provider>
  )
}