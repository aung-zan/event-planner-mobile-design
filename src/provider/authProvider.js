import { useContext, createContext, useState } from "react";
import { getItem } from "../utils/storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticate] = useState(null);

  const checkAuth = async () => {
    const result = await getItem('token');

    result == null ? setAuthenticate(false) : setAuthenticate(true);
  }

  if (authenticated === null) {
    checkAuth();
  }

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
