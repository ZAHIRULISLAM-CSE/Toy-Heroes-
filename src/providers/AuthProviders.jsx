import React, { createContext } from 'react';
export const AuthContext=createContext();
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase config/config';

const AuthProviders = ({children}) => {
    const auth = getAuth(app);

    //function for creatUser with email and pass
    const creatUserWithEmailPassword=(email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }




    const shareFun={
        creatUserWithEmailPassword
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