import React, { useEffect } from 'react'
import "./common.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth } from './firebase'
import { GoogleAuthProvider } from 'firebase/auth'

function Home() {
    const googleProvider = new GoogleAuthProvider();
var user =localStorage.getItem("user")
console.log(user);
const navigate = useNavigate();
useEffect(()=>{
    console.log(user==undefined, user==null);
    if(user==undefined|| user==null){
        navigate("/")
    }
    else{
        navigate("/home") 
    }
},[])
 
        const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth,googleProvider).then((res)=>{
            console.log(res);
            localStorage.setItem("user", res.user.uid)
            localStorage.setItem("userDetails", res.user.displayName)

            if(res.user.uid){
                navigate("/home")
            }
            
        });
       
        } catch (err){
          console.error(err);
        }
    //   };
    }
    return (
        <div className="center">
            <button type="button" class="login-with-google-btn" onClick={()=>signInWithGoogle()} >
                Sign in with Google
            </button>
            <h3>Already Signin ?</h3>
            <Link style={{cursor:"pointer"}} to={"/login"}><button type="button" class="login-with-google-btn2" >
                Login
            </button></Link>
            <h3>or</h3>
            <Link style={{cursor:"pointer"}} to={"/register"}><button type="button" class="login-with-google-btn2" >
                Sign In
            </button></Link>
        </div>
    )
}

export default Home
