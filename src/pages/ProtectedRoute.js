import React , {useEffect} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";



//took this from github firebase-hooks library 
// https://github.com/CSFrequency/react-firebase-hooks/blob/master/auth/useAuthState.ts
const ProtectedRoute = ({ children }) => {
    const { user, isLoading } = useAuthState(auth);
  
    if (isLoading) {
      console.log("loading....")
    }
  
    if (!user) {
      console.log("No user, redirecting to login...");
      return <Navigate to="/login" />;
    }
  
    console.log("User exists:", user.email);
    return children;
  };



export default ProtectedRoute;

