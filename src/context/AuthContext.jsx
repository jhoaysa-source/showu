// Importació de React i Firebase
import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

//Crea el context d’autenticació
const AuthContext = createContext()

//Hook personalitzat per accedir al context des de qualsevol component
export const useAuth = () => useContext(AuthContext)

//Component Provider que engloba tota l’aplicació i proporciona el context
export function AuthProvider({ children }) {
  // Estat per guardar l'usuari autenticat (Firebase)
  const [user, setUser] = useState(null)

  // Estat per guardar dades extres de l’usuari des de Firestore
  const [userData, setUserData] = useState(null)

  // Estat per indicar si s’està carregant la sessió
  const [loading, setLoading] = useState(true)

  // useEffect per fer els canvis en l’estat de l’autenticació
  useEffect(() => {
    // Fa l'autenticació de Firebase
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser)

      if (firebaseUser) {
        // Si l’usuari està autenticat, intenta obtenir més dades des de Firestore
        try {
          const docRef = doc(db, 'users', firebaseUser.uid)
          const docSnap = await getDoc(docRef)

          if (docSnap.exists()) {
            // Si les dades existeixen, les guarda a l’estat
            setUserData(docSnap.data())
          } else {
            // Si no hi ha dades, buida l’estat
            setUserData(null)
          }
        } catch (error) {
          // En cas d’error, mostra’l a la consola i buida les dades
          console.error('Error carregant dades de l’usuari:', error)
          setUserData(null)
        }
      } else {
        // Si no hi ha usuari autenticat, buida les dades
        setUserData(null)
      }

      // S’ha completat la càrrega de l’estat d’autenticació
      setLoading(false)
    })

    // Retorna la funció per desconnectar l'escolta quan es destrueix el component
    return () => unsubscribe()
  }, [])

  // Proporciona el context amb els valors accessibles des de tota la web
  return (
    <AuthContext.Provider value={{ user, userData, loading }}>
      {children}
    </AuthContext.Provider>
  )
}