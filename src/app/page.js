import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import hero from 'public/hero.png'
import Button from '@/components/Button/Button'



export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero totam vel adipisci, esse magni ex repellendus quam commodi minima unde eligendi quos dolorum blanditiis voluptatum rerum minus alias soluta aut.</p>
        <Button url={"/portfolio"} text={"See Our Works"}/>
      </div>
      <div className={styles.item}>
        <Image src={hero} alt='' className={styles.img}/>
      </div>
    </div>
  )
}
