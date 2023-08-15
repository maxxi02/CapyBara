"use client"


import React, { useContext, useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { ThemeContext } from '@/context/ThemeContext'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'

export default function Login() {


  const session = useSession();
  const router  = useRouter()
  
  const {mode} = useContext(ThemeContext)
  const [err, setErr] = useState(false);

  if(session.status === "loading")
  {
    return (<p>Loading...</p>)
  }

  if(session.status === "authenticated")
  {
     router.push("/dashboard")
  }

  const handleSubmit = async (e)=> 
  {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    signIn("credentials", {email, password})
  }



  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" 
        placeholder='email' 
        className={`${mode === "dark" ? styles.inputW : styles.inputB}`}
        required />
        <input type="password" 
        placeholder='password' 
        className={`${mode === "dark" ? styles.inputW : styles.inputB}`}
        required />
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={()=> signIn("google")}>Login with Google</button> 
    </div>
  )
}
