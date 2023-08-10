"use client"
import React, { useContext } from 'react'
import styles from './DarkModeToggle.module.css'
import {BsFillMoonFill ,BsFillSunFill} from 'react-icons/bs'
import { ThemeContext } from '@/context/ThemeContext'

export default function DarkModeToggle() {

  const {toggle, mode} = useContext(ThemeContext);
  console.log(mode)
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}><BsFillMoonFill/></div>
        <div className={styles.icon}><BsFillSunFill/></div>
        <div className={styles.ball}  style={mode === "light" ? {left:"2px"} : {right: "2px"}}/>
    </div>
  )
}
