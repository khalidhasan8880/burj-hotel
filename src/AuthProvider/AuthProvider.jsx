import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new FacebookAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserData = (name) =>{
        return updateProfile(auth.currentUser, {
            displayName: name
          })
    }
    const facebookLogin =()=> {
        return signInWithPopup(auth, provider)
    }
    const verifyEmail =()=>{
        return sendEmailVerification(auth.currentUser)
    }
    const logOut =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setUser(user)
            } else {
              setUser(null)
            }
          });
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        createUser,
        login,
        user,
        updateUserData,
        facebookLogin,
        verifyEmail,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;