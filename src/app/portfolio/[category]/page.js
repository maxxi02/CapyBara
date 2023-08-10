import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'


export default function Category({params}) {

  console.log(params)

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1  className={styles.title}>Marites & Aeron</h1>
          <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis atque. Ab assumenda non reprehenderit? Explicabo pariatur porro fugit quis nisi, facilis voluptatem asperiores, minus beatae aut consequuntur odio reprehenderit?</p>
          <Button text={"See More"} url={"#"}/>
        </div>
        <div className={styles.imgContainer}>
          <Image  className={styles.img}
           src={"/marites&aeron.jpg"} fill={true} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1  className={styles.title}>Rovic and Rocio</h1>
          <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis atque. Ab assumenda non reprehenderit? Explicabo pariatur porro fugit quis nisi, facilis voluptatem asperiores, minus beatae aut consequuntur odio reprehenderit?</p>
          <Button text={"See More"} url={"#"}/>
        </div>
        <div className={styles.imgContainer}>
          <Image  className={styles.img}
           src={"/rovic&rocio.jpg"} fill={true} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1  className={styles.title}>The Gang</h1>
          <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis atque. Ab assumenda non reprehenderit? Explicabo pariatur porro fugit quis nisi, facilis voluptatem asperiores, minus beatae aut consequuntur odio reprehenderit?</p>
          <Button text={"See More"} url={"#"}/>
        </div>
        <div className={styles.imgContainer}>
          <Image  className={styles.img}
           src={"/rocio2.jpg"} fill={true} />
        </div>
      </div>
    </div>
  )
}
