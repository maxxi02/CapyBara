"use client"

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`/api/posts/${id}`, { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  
  return res.json();
}


export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

export default function BlogPost({ params }) {
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData(params.id);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [params.id]);
  
  if (!data) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <div className={styles.item}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image className={styles.icon} src={"/rocio1.jpg"} alt='' width={50} height={50} />
            <p>{data.username}</p>
          </div>
        </div>
        <div className={styles.item}>
          <Image className={styles.img} src={data.img} alt='' height={250} width={400} />
        </div>
      </div>
      <div className={styles.item2}>
        <p>{data.content}</p>
      </div>
    </div>
  );
}
