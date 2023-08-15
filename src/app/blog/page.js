import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'




async function getData() {
  const res = await fetch('http://localhost:3000/api/posts' , {cache: 'no-store'}, )

 
  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}




export default async function Blog() {


  const data = await getData();



  return (
    <div className={styles.mainContainer}>
      {data.map((item)=>
      {

       return (<Link key={item.id} href={`/blog/${item._id}`} className={styles.links}>
        <div className={styles.imgContainer}>
          <Image src={item.img} alt='' height={250} width={400} className={styles.imgContainer} />
        </div>
        <div  className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p  className={styles.desc}>{item.desc}</p>
        </div>
      </Link>)
      })}
    </div>
  )
}
