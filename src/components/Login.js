import React,{useState} from "react";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom'

export default function Login(){
    const initalValues={
       email:"",
        password:""
    }
    const navigate = useNavigate();
    const [formValues, setFormValues]=useState(initalValues)
    const handleChange=(e)=>{
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }

    const handleSubmit=()=>{
        signInWithEmailAndPassword(auth, formValues.email, formValues.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            localStorage.setItem("user", user.uid)
            // localStorage.setItem("userDetails", user.displayName)
            // if(user.displayName==""){
            //     navigate("/profile")
            // }
            // else{
                navigate("/home")
            // }    
            
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }
    return(
        <div className="center"  style={{width:"25%"}}>
             <h2 style={{textAlign:"center"}}>LogIn</h2>
              <div className="container2">
           <div className="formInput">
            <label>Email</label>
            <input type="text" name="email" className="formField" value={formValues.email} onChange={(e)=>handleChange(e)} />
            </div>
            <div className="formInput">
            <label>Password</label>
            <input type="password" name="password" className="formField" value={formValues.password} onChange={(e)=>handleChange(e)} />
            </div>
            <div className="btnContainer">
                <button className="signbtn" onClick={()=>handleSubmit()}>LOGIN</button>
            </div>
        </div>
        </div>
    )
}
