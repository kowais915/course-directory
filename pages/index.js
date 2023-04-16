import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const getCourses = ()=>{
    router.push('/courses')
  }
  return (
    <div className={styles.home}>
      <Image src='/hero.jpg' width={1400} height={700}></Image> 

      <div className={styles.textContainer}>
          <h1>Find the best courses</h1>
         
            <button onClick={getCourses}> 
           
              Courses
              
            </button>
          
          
      </div>              
    </div>
  )
}
