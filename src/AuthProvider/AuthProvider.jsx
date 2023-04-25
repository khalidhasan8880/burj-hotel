import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    


    const user = {name : "khalid"}
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;