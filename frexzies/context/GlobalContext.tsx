import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from "react";
import { getCurrentUser } from "../lib/appwrite";

interface ContextProps {
  user: User | null;
  loading: boolean;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<null>>;
}

export const GlobalContext = createContext<ContextProps>({
  user: null,
  loading: true,
  isLoggedIn: false,
  setIsLoggedIn: () => null,
  setUser: () => null
})

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res: any) => {
        if (res) {
          setIsLoggedIn(true)
          setUser(res)
        } else {
          setIsLoggedIn(false)
          setUser(null)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <GlobalContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      user,
      setUser,
      loading,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)