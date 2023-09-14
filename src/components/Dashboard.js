import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const userDetails=localStorage.getItem("userDetails")
  const logout=()=>{
    signOut(auth).then(() => {
   
      localStorage.removeItem("user")
      localStorage.removeItem("userDetails")
          navigate("/");
          console.log("Signed out successfully")
      }).catch((error) => {
   
      });
  }
  console.log(userDetails!==null?userDetails:"Home");
  return (
    <div className='dashboard'>
      <h1>Welcome {userDetails!==null?userDetails:"Home"}</h1>
      <button style={{margin:"20px"}} onClick={()=>logout()}>Logout</button>
    </div>
  )
}

export default Dashboard
