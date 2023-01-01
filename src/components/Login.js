import React, {useState,useRef} from 'react'
import { LoginForm, SubmitButton } from '../style'
import {useAuth} from '../contexts/AuthProvider'

function Login() {
  const[toggleLoginRegister,setToggleLoginRegister]= useState(false)
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

 


  
  const loginHandler = ()=>{
    login(email.current.value,password.current.value)
    resetFields()
  }
  const registerHandler = ()=>{
    if(password.current.value === confirmPw.current.value){
      register(username.current.value,email.current.value,password.current.value)
      resetFields()
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
        <input ref = {email} placeholder='john@gmail.com'></input>
        <label >Password: </label>
        <input ref = {password} type={"password"}placeholder="password"></input>
        <label >Confirm password: </label>
        <input ref = {confirmPw} type={"password"} placeholder="repeat password"></input>
        <label >Username: </label>
        <input ref={username} placeholder='John'></input>
        
        <SubmitButton onClick={registerHandler}>Register</SubmitButton>
        {loginFailed?<p style={{color:"red",marginLeft:"90px"}}>Something went wrong</p>:null}
      </div>
      :
      <div>
        <label >E-mail: </label>
        <input ref={email} placeholder='john@gmail.com'></input>
        <label >Password: </label>
        <input ref = {password} type={"password"} placeholder="password"></input>
        <SubmitButton onClick={loginHandler}>Login</SubmitButton>
        {loginFailed?<p style={{color:"red",marginLeft:"90px"}}>Something went wrong</p>:null}
      </div>}
    </LoginForm>
  )
}

export default Login