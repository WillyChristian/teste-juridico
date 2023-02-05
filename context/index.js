import { useState, createContext } from "react";

export const Context = createContext({});

export default function AppContext({children}) {
  const [user, setUser] = useState({
    name: 'Jose',
    role: 'Admin',
    isAuthenticated: true
  });

  return(
    <Context.Provider value={user}>
      {children}
    </Context.Provider>
  )
}