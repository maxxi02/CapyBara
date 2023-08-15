// "use client"

// import React, { useState, useEffect } from 'react';
// import styles from './page.module.css';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useSession } from 'next-auth/react';



// async function getData() {
//   const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

// export default function Blog() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const fetchedData = await getData();
//         setData(fetchedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);
//   const session = useSession()
//   if(session.status === "authenticated")
//   {
//   return (
//     <div className={styles.mainContainer}>
//       {data.map((item) => (
//         <Link key={item._id} href={`/blog/${item._id}`} className={styles.links}>
//           <div className={styles.imgContainer}>
//             <Image src={item.img} alt='' height={250} width={400} className={styles.imgContainer} />
//           </div>
//           <div className={styles.content}>
//             <h1 className={styles.title}>{item.title}</h1>
//             <p className={styles.desc}>{item.desc}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }
// }



import React from 'react'

export default function Blog() {
  return (
    <div>This is blog</div>
  )
}
