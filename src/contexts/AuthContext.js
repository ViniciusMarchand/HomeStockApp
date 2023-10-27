import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [estaLogado, setEstaLogado] = useState(false);

    return (
        <AuthContext.Provider value={{estaLogado, setEstaLogado}}>
            {children}
        </AuthContext.Provider>
    )
}