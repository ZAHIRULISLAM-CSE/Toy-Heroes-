import React, { createContext } from 'react';
export const AuthContext=createContext();
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase config/config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProviders = ({children}) => {
    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();

    //function for creatUser with email and pass
    const creatUserWithEmailPassword=(email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    //function for login with email and pass
    const signInWithEp=(email,pass)=>{
        return signInWithEmailAndPassword(auth, email, pass)
    }

    //google signin
    const signInWithGoogle=()=>{
            return signInWithPopup(auth,googleProvider)
    }




    const shareFun={
        creatUserWithEmailPassword,signInWithEp,signInWithGoogle
    }




    return (
        <div>
            <AuthContext.Provider value={shareFun} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;