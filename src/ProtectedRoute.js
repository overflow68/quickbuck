import React from "react"
import {Navigate} from "react-router-dom"
import {useAuth} from "./contexts/AuthProvider"

export const ProtectedRoute = ({children }) => {
    const {token,isAuthenticated} = useAuth()
  if (!token || !isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};