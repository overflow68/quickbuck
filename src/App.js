import {React} from 'react'

import Login from './components/Login'
import Main from './pages/Main'
import Home from './components/Home'
import CustomSearch from './components/CustomSearch'
import {Operations} from './contexts/OperationsProvider'
import { Authentication } from './contexts/AuthProvider'
import { ProtectedRouteAuth } from './ProtectedRouteAuth'
import { ProtectedRoute } from './ProtectedRoute'
import { Listing } from './components/Listing'
import AddListing from './components/AddListing'
import './style/style.css'
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Authentication>
      <Operations>
      <Routes>
      <Route path="/" element={<Main />} >
        <Route index element={<Home/>}/>
        <Route path="login" element={<ProtectedRouteAuth><Login/></ProtectedRouteAuth>}/>
        <Route path =":category" element={<CustomSearch/>}/>
        <Route path =":category/:id" element={<Listing/>}/>
        <Route path = "/add/listing" element = {<ProtectedRoute><AddListing/></ProtectedRoute>}/>
      </Route>
    </Routes>
    </Operations>
    </Authentication>
    </div>
  );
}

export default App;
