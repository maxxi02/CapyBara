"use client"

import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import { usePathname, useRouter } from 'next/navigation'

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

    const pathname = usePathname()
    console.log(pathname)

  return (
    <div className={styles.container} >
        <Link href={"/"} className={styles.logo}>Capybara</Link>
        <div className={styles.links}>
            {links.map((link)=>
            {
                return (<Link className={`${link.path === pathname && styles.activeLinks}`} href={link.path} key={link.id}>{link.title}</Link>)
            })}
            <button className={styles.logout}>Logout</button>
        </div>
    </div>
  )
}
