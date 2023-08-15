"use client"

import { useSession } from 'next-auth/react';
import styles from './page.module.css';
import useSWR from 'swr'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';



export default function Dashboard() {



  const {mode} = useContext(ThemeContext)
  const session = useSession()
  const router = useRouter()
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, mutate , isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
  console.log(data)
  
  if(session.status === "loading")
  {
    return (<p>Loading...</p>)
  }
  if(session.status === "unauthenticated")
  {
    router.push("/dashboard/login")
  }


  
  
  if(session.status === "authenticated")
  {
      const handleSubmit = async (e) =>
      {
        e.preventDefault()
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const img = e.target[2].value;
        const content = e.target[3].value;
    
        try {
          await fetch("api/posts",
          {
            method:"POST",
            body: JSON.stringify({
              title,
              desc,
              img,
              content,
              username: session.data.user.name,
            })
          })
          mutate()
          e.target.reset()
        } catch (error) {
          throw error
        }
      }
      
      const handleDelete = async (id)=>
      {
        try {
          await fetch(`/api/posts/${id}`,
          {
            method: "DELETE", 
          })
          mutate();
        } catch (error) {
          console.log(error)
        }
      }

    return (
      <div className={styles.container}>
        <div className={styles.posts}>

          {isLoading ? (<p>Loading...</p>): 
          (data?.map((post)=>
            {
              return(
                <div className={styles.post1} key={post.id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} className={styles.img} alt='' width={500} height={500}/>
                  </div>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <span className={styles.delete} onClick={()=>handleDelete(post._id)} >Delete</span>
                </div>
              )
            }
          ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder='Title' className={`${mode === "dark" ? styles.dark :  styles.light}`} />
          <input type="text" placeholder='Desc' className={`${mode === "dark" ? styles.dark :  styles.light}`} />
          <input type="text" placeholder='Image' className={`${mode === "dark" ? styles.dark :  styles.light}`} />
          <textarea placeholder='Content' cols="30" rows="10" className={`${mode === "dark" ? styles.dark :  styles.light}`}></textarea>
          <button className={styles.send}>Send</button>
        </form>
      </div>
    );

  }
}
