import { useContext, createContext, useState } from "react";
import { getItem } from "../utils/storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticate] = useState(false);

  const checkAuth = async () => {
    const result = await getItem('token');

    if (result !== null) {
      setAuthenticate(true);
    }
  }

  checkAuth();

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
