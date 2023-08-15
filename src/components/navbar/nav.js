"use client"

import Link from 'next/link'
import React, { useContext } from 'react'
import styles from './page.module.css'
import { usePathname,  } from 'next/navigation'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { ThemeContext } from '@/context/ThemeContext'
import { signOut, useSession } from 'next-auth/react'


const links = [

    {
        id: 1, 
        title: "Home",
        path:  "/",
    },
    {
        id: 2, 
        title: "Portfolio",
        path:  "/portfolio",
    },
    {
        id: 3, 
        title: "Blog",
        path:  "/blog",
    },
    {
        id: 4, 
        title: "About",
        path:  "/about",
    },
    {
        id: 5, 
        title: "Contact",
        path:  "/contact",
    },
    {
        id: 6, 
        title: "Dashboard",
        path:  "/dashboard",
    },
]

export default function Navbar() {


    const session = useSession()

    const pathname = usePathname()
    console.log(pathname)
    const {mode} = useContext(ThemeContext)

    
  return (
    <div className={styles.container} >
       
        <Link href={"/"} className={styles.logo}>Capybara</Link>
        <div className={styles.links}>
            <DarkModeToggle />
            {links.map((link) => (
                <Link
                    className={`${mode === "dark" ? (link.path === pathname ? styles.white : styles.links) : styles.links}`}
                    href={link.path}
                    key={link.id}
                >
                    {link.title}
                </Link>
            ))}
            {session.status === "authenticated" &&

                <button className={styles.logout} onClick={signOut}>Logout</button>
                
            }
        </div>
    </div>
  )
}


