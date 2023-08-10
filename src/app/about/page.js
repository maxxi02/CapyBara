import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          className={styles.img}
          src={"https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600"}
          alt=''
          fill={true}/>
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Digital Storytellers</h1>
            <h2 className={styles.imgDesc}>Lorem ipsum dolor sit amet.</h2>
          </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quia commodi ex dolore vitae aperiam porro quibusdam ut necessitatibus blanditiis voluptatum, sed ipsam! Vitae tenetur beatae ipsa qui perspiciatis magnam?
          <br />
          <br />
          Vitae quam, quos quas est aliquid beatae earum possimus eveniet tempore fugit consequatur deserunt hic. Exercitationem sit natus explicabo assumenda quidem ab, tenetur sunt id laboriosam illo culpa? Iste, rerum.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis ullam aperiam pariatur! Non quam totam et! Unde nulla harum tempora ad! Nobis aliquam, laborum at id doloribus odit maxime?
          <br />
          <br />
          -More Faster 
          <br />
          <br />
          -Easier & Better Browsing
          <br />
          <br /> 
          -Full Of Awesomeness
          </p>
          <Button text={"Contact"}  url={"/contact"}/>
        </div>
      </div>
    </div>
  )
}
