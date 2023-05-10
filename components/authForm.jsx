"use client";

import { useState } from "react";
import {createUserWithEmailAndPassword,signInWithPopup} from "firebase/auth"
import { auth, googleProvider } from "@/configuration/firebase";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  
  const getEmail=(e)=>{
      setEmail(e.target.value)
    }
    const getPassword=(e)=>{
        setPassword(e.target.value)
    }
    
    const signInHandler= async()=>{
        await createUserWithEmailAndPassword(auth,email,password)
    }
const signInWithGoogle=async()=>{
    await signInWithPopup(auth,googleProvider)
}
    
    console.log(auth?.currentUser?.email);
  

  return (
    <div>
      <form action="" className="flex" onSubmit={signInHandler}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={getEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={password} required  onChange={getPassword}/>
        </div>
        <button type="submit">Send</button>
      </form>
      <button onClick={signInWithGoogle}>Sign In with google</button>
    </div>
  );
};

export default AuthForm;
