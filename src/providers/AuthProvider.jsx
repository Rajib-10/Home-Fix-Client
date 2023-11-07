/* eslint-disable react/prop-types */
import { GoogleAuthProvider,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config"
import axios from "axios";

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

    // google login 
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider) 
    }
   
    // user create 
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sing in user 

    const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user log out 

    const userLogOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    // observer auth state 

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            const loggedUser = currentUser?.email || user?.email;
            console.log("current user",currentUser)
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                axios.post("http://localhost:5000/jwt",{ email: loggedUser },{ withCredentials: true }
                  )
                  .then((res) => {
                    console.log("token response", res.data);
                  });
              } else {
                axios
                  .post(
                    "http://localhost:5000/logout",
                    { email: loggedUser },
                    { withCredentials: true }
                  )
                  .then((res) => {
                    console.log("token logout response", res.data);
                  });
              }
        })
        return ()=>{
           return  unSubscribe()
        }
    },[user?.email])

    const authInfo = {
        googleLogin,
        createUser,
        signInUser,
        user,
        userLogOut,
        updateUserProfile,
        loading
    }
        
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider
