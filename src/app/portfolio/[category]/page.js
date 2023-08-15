import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'



const getData = (category) =>
{
  const data = items[category]

  if(data)
  {
    return data
  }

  return notFound()
}

export default function Category({params}) {

  
  const data = getData(params.category)
  console.log(params.category)

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((items)=>
      {
        return(<div key={items.id} className={styles.item}>
          <div className={styles.content}>
            <h1  className={styles.title}>{items.title}</h1>
            <p  className={styles.desc}>{items.desc}</p>
            <Button text={"See More"} url={"/blog"}/>
          </div>
          <div className={styles.imgContainer}>
            <Image  alt=''  className={styles.img}
            src={items.image} fill={true} />
          </div>
        </div>)
        
      })}
    
    </div>
  )
}
