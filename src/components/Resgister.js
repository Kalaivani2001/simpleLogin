import React,{useState} from "react";
import {  createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { auth } from "./firebase";
import { useNavigate } from 'react-router-dom';

export default function Register(){
    const initalValues={
        first_name:"",
        last_name:"",
        email:"",
        password:""
    }
    const navigate = useNavigate();
    const [formValues, setFormValues]=useState(initalValues)
    const handleChange=(e)=>{
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }

    const handleSubmit=async()=>{
        await createUserWithEmailAndPassword(auth,formValues.email, formValues.password)
        .then((userCredential) => {
            const user = userCredential.user;
            const displayName = formValues.first_name+""+formValues.last_name
            // updateProfile({displayName}).then((res)=>{
            // console.log(res);
            // })
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
    }
    return(
        <div className="center "  style={{width:"25%"}}>
             <h2 style={{textAlign:"center"}}>Sign In</h2>
              <div className="container2">
             <div className="formInput">
            <label>First Name</label>
            <input type="text" name="first_name" className="formField" value={formValues.first_name} onChange={(e)=>handleChange(e)} />
            </div><div className="formInput">
            <label>Last Name</label>
            <input type="text" name="last_name" className="formField" value={formValues.last_name} onChange={(e)=>handleChange(e)} />
            </div><div className="formInput">
            <label>Email</label>
            <input type="text" name="email" className="formField" value={formValues.email} onChange={(e)=>handleChange(e)} />
            </div>
            <div className="formInput">
            <label>Password</label>
            <input type="password" name="password" className="formField" value={formValues.password} onChange={(e)=>handleChange(e)} />
            </div>
            <div className="btnContainer">
                <button className="signbtn" onClick={()=>handleSubmit()}>SIGN IN</button>
            </div>
        </div>
        </div>
    )
}
