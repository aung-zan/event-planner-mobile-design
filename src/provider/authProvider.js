import { useContext, createContext, useState, useEffect } from "react";
import { getItem } from "../utils/storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticate] = useState(false);
  const [authCheck, setAuthCheck] = useState(false);

  const value = {authenticated, setAuthenticate, authCheck};

  const checkAuth = async () => {
    const result = await getItem('token');

    if (result !== null) {
      setAuthenticate(true);
    }

    setAuthCheck(true);
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
