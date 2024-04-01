import { useContext, createContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("Context must be used within a valid react component");

  return context;
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
