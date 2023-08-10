import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'


export default function Footer() {
  return (
    <div className={styles.container}>
        <div>@2023 Capybara. All rights reserved.</div>
        <div className={styles.social}>
          <Image src={"/1.png"} alt=''width={15} height={15} className={styles.icon} />
          <Image src={"/2.png"} alt=''width={15} height={15} className={styles.icon} />
          <Image src={"/3.png"} alt=''width={15} height={15} className={styles.icon} />
          <Image src={"/4.png"} alt=''width={15} height={15} className={styles.icon} />
        </div>
    </div>
  )
}
