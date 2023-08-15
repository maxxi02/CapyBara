import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'





async function getData(id) {


  const res = await fetch(`http://localhost:3000/api/posts/${id}` , {cache: 'no-store'});
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

export async function generateMetadata({ params }) {


  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}




export default async function BlogPost({params}) {

  const data = await getData(params.id);
  
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <div className={styles.item}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image className={styles.icon} src={"/rocio1.jpg"} alt='' width={50} height={50}/>
            <p>{data.username}</p>
          </div>
        </div>
        <div className={styles.item}>
          <Image className={styles.img}
          src={data.img} alt='' height={250} width={400} />
        </div>
      </div>
      <div className={styles.item2}>
        <p>
        {data.content}
        <br />
        </p>
      </div>
    </div>
  )
}
