"use client"


import React, { useContext, useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { ThemeContext } from '@/context/ThemeContext'
import { useRouter } from 'next/navigation'



export default function Register() {
  const {mode} = useContext(ThemeContext)
  const [err, setErr] = useState(false);
  const router  = useRouter()


  const handleSubmit = async (e)=> 
  {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await fetch("/api/auth/register",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name,email,password})
      })



      res.status === 201 && router.push('/dashboard/login?success=Your account has been created, bitch!')
    } catch (error) {
      setErr(true)
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='username' 
        className={`${mode === "dark" ? styles.inputW : styles.inputB}`}
        required />
        <input type="email" 
        placeholder='email' 
        className={`${mode === "dark" ? styles.inputW : styles.inputB}`}
        required />
        <input type="password" 
        placeholder='password' 
        className={`${mode === "dark" ? styles.inputW : styles.inputB}`}
        required />
        <button className={styles.button}>Register</button>
      </form>
      {err && "something went wrong!"}
      <Link href={"/dashboard/login"}>Login with an existing account</Link>
    </div>
  )
}
