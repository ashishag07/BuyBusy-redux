import { createContext, useContext, useState } from "react";

// 1. create auth context
export const authContext = createContext();

// 2. create custom hook to consume the context values
export const useAuth = () => {
  const value = useContext(authContext);
  return value;
};

// 3. auth context provider
const AuthProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(null);

  return (
    <authContext.Provider value={{ activeUser, setActiveUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
