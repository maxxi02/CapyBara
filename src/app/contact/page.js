import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'


export const metadata = {
  title: 'Contact',
  description: 'This is the contact page.',
}



export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&#39;s keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={"/contact.png"} alt='' fill={true} className={styles.image}/>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea type="text" placeholder='message' cols={30} rows={10}  className={styles.textArea} />
          <Button text={"Send"} url={"#"}/>
        </form>
      </div>
    </div>
  )
}
