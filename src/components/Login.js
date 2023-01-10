import React, {useState,useRef,useEffect} from 'react'
import { LoginForm, SubmitButton } from '../style'
import {useAuth} from '../contexts/AuthProvider'
import '../style/loader.css'

function Login() {
  const[toggleLoginRegister,setToggleLoginRegister]= useState(false)
  const[loading,setLoading]=useState(false)
  const[disabled,setDisabled]=useState(false)
  const style = {"borderBottom":"1px solid black"}
  const {login,register,loginFailed} = useAuth()
  let username = useRef()
  let password = useRef()
  let confirmPw = useRef()
  let email = useRef()

  const resetFields = ()=>{
  username.current.value = ""
  password.current.value = ""
  confirmPw.current.value = ""
  email.current.value = ""
  }

 useEffect(()=>{
  if(loginFailed){
    setLoading(false)
    setDisabled(false)
  }
 },[loginFailed])


  
  const loginHandler = ()=>{
    login(email.current.value,password.current.value)
    resetFields()
    setLoading(true)
    setDisabled(true)
  }
  const registerHandler = ()=>{
    if(password.current.value === confirmPw.current.value){
      register(username.current.value,email.current.value,password.current.value)
      resetFields()
      setLoading(true)
      setDisabled(true)
    }else alert("Passwords don't match!")
  }
  
 

  
  
  return (
    <LoginForm>
      <span>
        <div onClick={()=>setToggleLoginRegister(true)} style={toggleLoginRegister?style:null}>Login</div>
        <div onClick={()=>setToggleLoginRegister(false)} style={!toggleLoginRegister?style:null}>Register</div>
      </span>
      {!toggleLoginRegister?
      <div>
        
        <label >E-mail: </label>
        <input disabled={disabled} ref = {email} placeholder='john@gmail.com'></input>
        <label >Password: </label>
        <input disabled={disabled} ref = {password} type={"password"}placeholder="password"></input>
        <label >Confirm password: </label>
        <input disabled={disabled} ref = {confirmPw} type={"password"} placeholder="repeat password"></input>
        <label >Username: </label>
        <input disabled={disabled} ref={username} placeholder='John'></input>
        
        <SubmitButton disabled={disabled} onClick={registerHandler}>Register</SubmitButton>
        {loginFailed?<p style={{color:"red",marginLeft:"90px"}}>Something went wrong</p>:null}
      </div>
      :
      <div>
        <label >E-mail: </label>
        <input disabled={disabled} ref={email} placeholder='john@gmail.com'></input>
        <label >Password: </label>
        <input disabled={disabled} ref = {password} type={"password"} placeholder="password"></input>
        <SubmitButton disabled={disabled} onClick={loginHandler}>Login</SubmitButton>
        {loginFailed?<p style={{color:"red",marginLeft:"90px"}}>Something went wrong</p>:null}
      </div>}
      {loading?<div class="loader"></div>:null}
    </LoginForm>
  )
}

export default Login