import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function Profile() {
    const initalValues={
        first_name:"",
        last_name:"",
        phoneNumber:""

    }
    const navigate = useNavigate();
    const [formValues, setFormValues]=useState(initalValues)
    const handleChange=(e)=>{
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }
const update=()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
    })
}

   
  return (
    <div>
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
            <label>Phone number</label>
            <input type="number" name="phoneNumber" className="formField" value={formValues.phoneNumber} onChange={(e)=>handleChange(e)} />
            </div>
            <div className="btnContainer">
                <button className="signbtn" onClick={()=>update()}>Continue</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profile
