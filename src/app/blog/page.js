import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Blog() {
  return (
    <div className={styles.mainContainer}>
      <Link href={"/blog/testID"} className={styles.links}>
        <div className={styles.imgContainer}>
          <Image src={"/rocio1.jpg"} alt='' height={250} width={400} className={styles.imgContainer} />
        </div>
        <div  className={styles.content}>
          <h1 className={styles.title}>Rocio and friends</h1>
          <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore tempora aperiam culpa voluptate assumenda itaque adipisci nesciunt cumque odit, aliquam quidem, corrupti, veniam id magni? Accusamus molestias quisquam nemo.</p>
        </div>
      </Link>
      <Link href={"/blog/testID"}  className={styles.links}>
        <div className={styles.imgContainer}>
          <Image src={"/rocio2.jpg"} alt='' height={250} width={400} className={styles.imgContainer} />
        </div>
        <div  className={styles.content}>
          <h1 className={styles.title}>Rocio and friends</h1>
          <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore tempora aperiam culpa voluptate assumenda itaque adipisci nesciunt cumque odit, aliquam quidem, corrupti, veniam id magni? Accusamus molestias quisquam nemo.</p>
        </div>
      </Link>
      <Link href={"/blog/testID"}  className={styles.links}>
        <div className={styles.imgContainer}>
          <Image src={"/rocio3.jpg"} alt='' height={250} width={400} className={styles.imgContainer} />
        </div>
        <div  className={styles.content}>
          <h1 className={styles.title}>Rocio and friends</h1>
          <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore tempora aperiam culpa voluptate assumenda itaque adipisci nesciunt cumque odit, aliquam quidem, corrupti, veniam id magni? Accusamus molestias quisquam nemo.</p>
        </div>
      </Link>
      <Link href={"/blog/testID"}  className={styles.links}>
        <div className={styles.imgContainer}>
          <Image src={"/rocio4.jpg"} alt='' height={250} width={400} className={styles.imgContainer} />
        </div>
        <div  className={styles.content}>
          <h1 className={styles.title}>Rocio and friends</h1>
          <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore tempora aperiam culpa voluptate assumenda itaque adipisci nesciunt cumque odit, aliquam quidem, corrupti, veniam id magni? Accusamus molestias quisquam nemo.</p>
        </div>
      </Link>
      <Link href={"/blog/testID"}  className={styles.links}>
        <div className={styles.imgContainer}>
          <Image src={"/rocio5.jpg"} alt='' height={250} width={400} className={styles.imgContainer} />
        </div>
        <div  className={styles.content}>
          <h1 className={styles.title}>Rocio and friends</h1>
          <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore tempora aperiam culpa voluptate assumenda itaque adipisci nesciunt cumque odit, aliquam quidem, corrupti, veniam id magni? Accusamus molestias quisquam nemo.</p>
        </div>
      </Link>
    </div>
  )
}
