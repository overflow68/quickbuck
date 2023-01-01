import React from "react"
import {Navigate} from "react-router-dom"
import {useAuth} from "./contexts/AuthProvider"

export const ProtectedRouteAuth = ({children }) => {
    const {token,isAuthenticated} = useAuth()
  if (token || isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};